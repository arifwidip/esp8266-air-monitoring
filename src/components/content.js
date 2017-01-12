import React, { Component, PropTypes } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import firebase from 'firebase';
import { Link } from 'react-router';
import * as config from '../constant';

import RealtimeChart from '../page/realtime-chart';
import LastWeekChart from '../page/lastweek-chart';
import LastMonthChart from '../page/lastmonth-chart';
import AllTimeChart from '../page/alltime-chart';

const firebaseConfig = {
	apiKey: config.API_KEY,
	authDomain: config.AUTH_DOMAIN,
	databaseURL: config.DATABASE_URL,
	storageBucket: config.STORAGE_BUCKET,
	messagingSenderId: config.MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);
	window.firebase = firebase;

export default class Content extends Component {
	static contextTypes = {
		router: PropTypes.object.isRequired
	};

	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	componentDidMount() {
		let path = this.context.router.location.pathname;

		if( path == '/' ) {
			path = '/realtime';
		}

		this.setState({
			value: path
		});
	}

	handleChange(value) {
		this.setState({
			value: value
		});
	}

	render() {
		return (
			<Tabs
				value={this.state.value}
				onChange={this.handleChange.bind(this)}>
				<Tab label="Realtime" value="/realtime" containerElement={<Link to="/realtime" />} />
				<Tab label="Last Week" value="/lastweek" containerElement={<Link to="/lastweek" />} />
				<Tab label="Last Month" value="/lastmonth" containerElement={<Link to="/lastmonth" />} />
			</Tabs>
		);
	}
}
