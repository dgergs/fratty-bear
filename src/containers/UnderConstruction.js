import React from 'react';

const LIGHT_ORANGE = '#ff9a57';

export default function UnderConstruction(props) {

	return (
		<div
			style={{
				height: `calc(100vh - 160px)`,  // where you would use FOOTER_HEIGHT and NAV_HEIGHT
	      background: `linear-gradient(bottom, ${LIGHT_ORANGE}, #fff)`,
	      display: 'flex',
	      alignItems: 'center',
	      flexDirection: 'column',
			}}
		>
			<h1>
				site still under construction...
			</h1>
			<h1>
				<a
					href='https://dreygerger.typeform.com/to/CTpPof'
					style={{ color: 'inherit' }}
				>
					click to contact us
				</a>
				<br />
				<br />
				<a href='mailto:contact@frattybear.com'>contact@frattybear.com</a>
			</h1>
		</div>
		);
}