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
							realtime={true} />
					</Col>

					<Col lg={6} md={6}>
						<Chart
							database="humidity"
							title="Humidity Sensor"
							yLabel="Humidity"
							realtime={true}
							/>
					</Col>

					<Col lg={12} md={12}>
						<Chart
							database="co2"
							title="Carbon Dioxide"
							yLabel="Co2 (PPM)"
							realtime={true}
							plotlines={[{
                  value: 351,
                  width: 2,
                  color: '#ff0000',
                  label: {
                    text: 'Danger'
                  }
              }]}
							/>
					</Col>
				</Row>
			</Grid>
		</div>
	);
}
