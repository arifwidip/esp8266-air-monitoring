import React, { Component } from 'react';
import firebase from 'firebase';
import ReactHighcharts from 'react-highcharts';

class Chart extends Component {
	constructor() {
		super();

		this.state = {
			items: []
		};
	}

	componentWillMount() {
		const ref = firebase.database().ref( this.props.database );
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
				items: items
			});
		});
	}

	render() {
		const config = {
			chart: {
			    type: 'spline',
			},
			title: {
			    text: 'WeMos Temperature Sensor'
			},
			xAxis: {
			    type: 'datetime',
			    tickPixelInterval: 150
			},
			yAxis:
          {
              title: {
                  text: 'Temperature'
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
			        name: 'Temperature',
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
