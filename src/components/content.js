import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import firebase from 'firebase';

import RealtimeChart from '../page/realtime-chart';
import LastWeekChart from '../page/lastweek-chart';
import LastMonthChart from '../page/lastmonth-chart';
import AllTimeChart from '../page/alltime-chart';

const firebaseConfig = {
	apiKey: 'AIzaSyANx9iqyKSdbG4Uu4CRCrR6gGamXj9GK5s',
	authDomain: "wemos-arduino.firebaseapp.com",
	databaseURL: "https://wemos-arduino.firebaseio.com",
	storageBucket: "wemos-arduino.appspot.com",
	messagingSenderId: "345464825282"
};

firebase.initializeApp(firebaseConfig);

export default () => {
	return (
		<Tabs>
			<Tab label="Realtime"><RealtimeChart /></Tab>
			<Tab label="Last Week"><LastWeekChart /></Tab>
			<Tab label="Last Month"><LastMonthChart /></Tab>
			<Tab label="All Time"><AllTimeChart /></Tab>
		</Tabs>
	);
}
