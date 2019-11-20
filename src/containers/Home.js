import React from 'react';
import { withStyles } from '@material-ui/styles';

import { FOOTER_HEIGHT, NAV_HEIGHT } from '../App.js';  // these weren't working for some reason

const LIGHT_ORANGE = '#ff9a57';
const ORANGE = '#FE6600';

const styles = {
    root: {
      height: `calc(100vh)`,  // where you would use FOOTER_HEIGHT and NAV_HEIGHT
      '@media (max-width: 1050px)': {
        height: 'calc(100vh)',
      },
      '@media (max-width: 800px)': {
        height: 'calc(100vh)',
      },
    '@media (max-width: 450px)': {
      height: 'calc(100vh)',
      },
      background: `white`,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    bearContainer: {
      backgroundImage: `url(${require('../images/peteTheBear.jpg')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
    },
    frattyBear: {
      color: 'ORANGE',
      fontSize: 120,
      fontFamily: 'Impact',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
}

class App extends React.PureComponent {

    render() {
        const { classes } = this.props;
        return (
            <div
                className={classes.root}
            >
              <div className={classes.bearContainer} >
                <div className={classes.frattyBear} >
                  <p
                    style={{
                      color: '#fff',
                      WebkitTextStroke: '1px black',
                      fontSize: 64,
                      fontWeight: 700,
                      letterSpacing: '-2px',
                    }}
                  >
                    Fratty
                  </p>
                  <p
                    style={{
                      color: ORANGE,
                      fontSize: 64,
                      fontWeight: 700,
                      letterSpacing: '-2px',
                    }}
                  >
                    Bear
                  </p>
                </div>
                <div>
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
                
              </div>
              
            </div>
            );
    }

}

export default withStyles(styles)(App);
