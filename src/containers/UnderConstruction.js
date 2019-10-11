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
			<h1 style={{}}>
				site still under construction...
			</h1>
			<h1>
				<a
					href="https://l.facebook.com/l.php?u=https%3A%2F%2Fdreygerger.typeform.com%2Fto%2FCTpPof%3Ffbclid%3DIwAR1Ef7F0RkFURuyf-srfX4eY0N8U6RnE5uygdJJhkVrrTuwDJyczGsmb5uc&h=AT16V0kG0v5kjJ6e3lAsUD_J5PiZ9PAs2zZqw1sJjuEMTkBvwQNYFG7--BtqGEbdhUNaGU7_5zpw95QmcoYIPzFtIh4FCGRhGpc_-4TdvCoCgTGnbim2MavNria8hjwsSWn10F8L-Bu2BQ"
					style={{ color: 'inherit' }}
				>
					click to contact us
				</a>
			</h1>
		</div>
		);
}