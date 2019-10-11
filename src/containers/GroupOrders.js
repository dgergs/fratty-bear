import React from 'react';
import { withStyles } from '@material-ui/styles';

const LIGHT_ORANGE = '#ff9a57';

const styles = {
    root: {
      height: `calc(100vh - 160px)`,  // where you would use FOOTER_HEIGHT and NAV_HEIGHT
      background: `linear-gradient(bottom, ${LIGHT_ORANGE}, #fff)`,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0px 60px',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      margin: '0px 20px',
    },
}

function GroupOrders(props) {

    const { classes } = props;
    return (
        <div className={classes.root} >
            <div
              style={{
                display: 'flex',
                alignItems: 'space-around',
                justifyContent: 'space-around',
              }}
            >
              <div className={classes.container}>
                <p>What we offer</p>
                <p>What we offer</p>
                <p>What we offer</p>
                <img
                  src={require('../images/LoyaltyTemplate.png')}
                  style={{
                    height: 300,
                  }}
                  alt=''
                />
              </div>
              <div className={classes.container}>
                <img
                  src={require('../images/LoyaltyTemplate.png')}
                  style={{
                    height: 300,
                  }}
                  alt=''
                />
                <p>What we offer</p>
                <p>What we offer</p>
                <p>What we offer</p>
              </div>
              <div className={classes.container}>
                <p>What we offer</p>
                <p>What we offer</p>
                <p>What we offer</p>
                <img
                  src={require('../images/LoyaltyTemplate.png')}
                  style={{
                    height: 300,
                  }}
                  alt=''
                />
              </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(GroupOrders);