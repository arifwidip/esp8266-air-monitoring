import React, { Component } from 'react';
import firebase from 'firebase';
import ReactHighcharts from 'react-highcharts';

class Chart extends Component {
	constructor() {
		super();

		this.state = {
			items: [],
			initialDataLoaded: false,
		};
	}

	componentWillMount() {
		const ref = firebase.database().ref( this.props.database );

		// Update the chart realtime
		ref.limitToLast(1).on('child_added', (data) => {
			if( this.state.initialDataLoaded ) {
				var itemVal = data.val();
				this.setState({
					items: [{
						x: itemVal.timestamp,
						y: itemVal.value
					}, ...this.state.items]
				});
			}
		});

		// Load Initial Data
		ref.limitToLast(50).once('value', (dataSnapshot) => {
			let items = [];

			dataSnapshot.forEach((item) => {
				let itemVal = item.val();

				items.push({
					x: itemVal.timestamp,
					y: itemVal.value
				});
			});

			this.setState({
				items: items,
				initialDataLoaded: true
			});
		});
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
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
              }]
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
			<div>
				<ReactHighcharts config={config} ref="chart" />
			</div>
		);
	}
}

export default Chart;
