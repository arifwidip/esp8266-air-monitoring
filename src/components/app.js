import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import HeaderSection from './header-section';
import Content from './content';

import '../index.scss';

injectTapEventPlugin();

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<HeaderSection />
					<Content />
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
