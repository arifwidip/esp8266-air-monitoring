import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/';
import firebase from 'firebase';
import Chart from './chart';

const firebaseConfig = {
	apiKey: 'AIzaSyANx9iqyKSdbG4Uu4CRCrR6gGamXj9GK5s',
	authDomain: "wemos-arduino.firebaseapp.com",
	databaseURL: "https://wemos-arduino.firebaseio.com",
	storageBucket: "wemos-arduino.appspot.com",
	messagingSenderId: "345464825282"
};

firebase.initializeApp(firebaseConfig);

import style from '../index.scss';
console.log(style);

export default () => {
	return (
		<div className={style["page-content"]}>
			<Grid>
				<Row>
					<Col lg={6} md={6}><Chart database="temperature" /></Col>
					<Col lg={6} md={6}><Chart database="temperature" /></Col>
				</Row>
			</Grid>
		</div>
	);
}
