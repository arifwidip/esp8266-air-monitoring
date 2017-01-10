import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Header, Content, Grid, Cell } from 'react-mdl';
import Chart from './components/chart';

import './index.scss';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Header title="WEMOS Air Quality Monitor" />
					<Content>
						<Grid>
							<Cell col={6}><Chart /></Cell>
							<Cell col={6}>A</Cell>
						</Grid>
					</Content>
				</Layout>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
