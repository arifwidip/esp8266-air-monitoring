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
							dateRange="lastmonth" />
					</Col>

					<Col lg={6} md={6}>
						<Chart
							database="humidity"
							title="Humidity Sensor"
							yLabel="Humidity"
							dateRange="lastmonth"
							/>
					</Col>

					<Col lg={12} md={12}>
						<Chart
								database="co2"
								title="Carbon Dioxide"
								yLabel="Co2 (PPM)"
								dateRange="lastmonth"
								/>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}
