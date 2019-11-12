import React from 'react';
import { withStyles } from '@material-ui/styles';

import { FOOTER_HEIGHT, NAV_HEIGHT } from '../App.js';  // these weren't working for some reason

const LIGHT_ORANGE = '#ff9a57';
const ORANGE = '#FE6600';

const styles = {
    root: {
      height: `calc(100vh - 60px)`,  // where you would use FOOTER_HEIGHT and NAV_HEIGHT
      '@media (max-width: 1050px)': {
        height: 'calc(100vh)',
      },
      '@media (max-width: 800px)': {
        height: 'calc(100vh - 130px)',
      },
    '@media (max-width: 450px)': {
      height: 'calc(100vh - 150px)',
      },
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
                  maxHeight: 500,
                  maxWidth: 'calc(95vw)',
                  width: 'auto',
                  height: 'auto',
                  marginTop: 70,
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
                    fontFamily: 'Impact',
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
                  textAlign: 'center',
                }}
              >
                Custom Fraternity Apparel
              </p>
            </div>
            );
    }

}

export default withStyles(styles)(App);
