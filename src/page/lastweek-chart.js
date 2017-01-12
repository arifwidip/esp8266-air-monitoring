import React from 'react';
import Chart from '../components/chart';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/';

import style from '../index.scss';

export default () => {
	return (
		<div className={style["page-content"]}>
			<Grid>
				<Row>
					<Col lg={6} md={6}>
						<Chart
							database="temperature"
							title="Temperature Sensor"
							yLabel="Temperature"
							dateRange="lastweek" />
					</Col>

					<Col lg={6} md={6}>
						<Chart
							database="humidity"
							title="Humidity Sensor"
							yLabel="Humidity"
							dateRange="lastweek"
							/>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}
