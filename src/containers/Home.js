import React from 'react';
import { withStyles } from '@material-ui/styles';

import { FOOTER_HEIGHT, NAV_HEIGHT } from '../App.js';  // these weren't working for some reason

const LIGHT_ORANGE = '#ff9a57';
const ORANGE = '#FE6600';

const styles = {
    root: {
      height: `calc(100vh - 160px)`,  // where you would use FOOTER_HEIGHT and NAV_HEIGHT
      background: `linear-gradient(bottom, ${LIGHT_ORANGE}, #fff)`,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
}

class App extends React.PureComponent {

    render() {
        const { classes } = this.props;
        return (
            <div
                className={classes.root}
            >
              <img
                style={{
                  height: 500,
                  marginTop: 100,
                }}
                src={require('../images/peteTheBear.jpg')}
                alt="pete-the-bear"
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 64,
                  fontWeight: 700,
                  fontFamily: 'Arial',
                  letterSpacing: -3,
                }}
              >
                <p
                  style={{
                    color: '#fff',
                  }}
                >
                  Fratty
                </p>
                <p
                  style={{
                    color: ORANGE,
                    marginLeft: 10,
                  }}
                >
                  Bear
                </p>
              </div>
              <p
                style={{
                  fontSize: 32,
                  marginTop: 20,
                }}
              >
                Custom Fraternity Apparel
              </p>
            </div>
            );
    }

}

export default withStyles(styles)(App);
