import React, { Component } from 'react';
import firebase from 'firebase';
import ReactHighcharts from 'react-highcharts';
import timestamp from 'unix-timestamp';
import { Card, CardText } from 'material-ui/Card';

timestamp.round = true;

ReactHighcharts.Highcharts.setOptions({
	global: {
		useUTC: false
	}
});

class Chart extends Component {
	constructor() {
		super();

		this.state = {
			items: [],
			initialDataLoaded: false,
			plotlines: []
		};
	}

	loadInitialData(dataSnapshot) {
		let items = [];

		dataSnapshot.forEach((item) => {
			let itemVal = item.val();
			items.push([itemVal.timestamp, itemVal.value]);
		});

		this.setState({
			items: items,
			initialDataLoaded: true
		});
	}

	componentDidMount() {
		const ref = firebase.database().ref( this.props.database );

		// Update the chart realtime
		if( this.props.realtime ) {
			ref.limitToLast(1).on('child_added', (data) => {
				if( this.state.initialDataLoaded ) {
					var itemVal = data.val();
					let chart = this.refs.chart.getChart();
					chart.series[0].addPoint( [itemVal.timestamp, itemVal.value], true, true );
				}
			});
		}

		// Load Initial Data if dateRange specified
		if( this.props.dateRange ) {
			switch (this.props.dateRange) {
				case 'lastweek':
					ref.orderByChild('timestamp').startAt(timestamp.now('-1w') * 1000).once('value', this.loadInitialData.bind(this));
					break;

				case 'lastmonth':
					ref.orderByChild('timestamp').startAt(timestamp.now('-1M') * 1000).once('value', this.loadInitialData.bind(this));
					break;
			}
		}

		// If dateRange not specified, load last 50 data
		else {
			ref.limitToLast(50).once('value', this.loadInitialData.bind(this));
		}
	}

	render() {
		const config = {
			chart: {
			    type: 'spline',
			},
			title: {
			    text: this.props.title
			},
			xAxis: {
			    type: 'datetime',
			    tickPixelInterval: 150
			},
			yAxis:
          {
              title: {
                  text: this.props.yLabel
              },
              minTickInterval: 0.1,
              plotLines: this.props.plotlines
          }
      ,
			legend: {
			    enabled: false
			},
			exporting: {
			    enabled: false
			},
			series: [
			    {
			        name: this.props.yLabel,
			        data: this.state.items
			    }
			]
		};

		return (
			<Card style={{marginBottom: '20px'}}>
				<CardText>
					<ReactHighcharts config={config} ref="chart" />
				</CardText>
			</Card>
		);
	}
}

export default Chart;
