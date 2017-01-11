import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import HeaderSection from './components/header-section';
import Content from './components/content';

import './index.scss';

injectTapEventPlugin();

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<HeaderSection />
					<Content />
				</div>
			</MuiThemeProvider>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
