import React from 'react';

const LIGHT_ORANGE = '#ff9a57';

export default function UnderConstruction(props) {

	let style = {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		width: '100%',
		height: '70vh',
	}

	let textStyle = {
		textAlign: 'center',
	}

	return (
		<div style={style}>
			<h1>Under construction!</h1>
			<p style={textStyle}>
				If you have any questions/requests, <br />
				<a href='https://dreygerger.typeform.com/to/CTpPof'>contact us here</a> <br />
				or email us at <br />
				<a href='mailto:contact@frattybear.com'>contact@frattybear.com</a>.
			</p>
		</div>
	);
}