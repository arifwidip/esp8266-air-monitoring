import React, { Component } from 'react';
import firebase from 'firebase';

class Chart extends Component {
	constructor() {
		super();

		this.state = {
			items: []
		};

		this.firebaseConfig = {
			apiKey: 'AIzaSyANx9iqyKSdbG4Uu4CRCrR6gGamXj9GK5s',
			authDomain: "wemos-arduino.firebaseapp.com",
			databaseURL: "https://wemos-arduino.firebaseio.com",
			storageBucket: "wemos-arduino.appspot.com",
			messagingSenderId: "345464825282"
		};

		firebase.initializeApp(this.firebaseConfig);
	}

	componentWillMount() {
		const ref = firebase.database().ref('temperature');
		ref.limitToLast(50).once('value', (dataSnapshot) => {
			this.setState({
				items: dataSnapshot.val()
			});
		});
	}

	render() {
		return (
			<div>
				{console.log(this.state.items)}
			</div>
		);
	}
}

export default Chart;
