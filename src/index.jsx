import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';
import RealtimeChart from './page/realtime-chart';
import LastWeekChart from './page/lastweek-chart';
import LastMonthChart from './page/lastmonth-chart';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={RealtimeChart} />
			<Route path="realtime" component={RealtimeChart} />
			<Route path="lastweek" component={LastWeekChart} />
			<Route path="lastmonth" component={LastMonthChart} />
		</Route>
	</Router>,
	document.getElementById('app')
);
