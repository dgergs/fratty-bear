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
    infoText: {
      fontSize: 18,
      textAlign: 'center',
      paddingTop: 15,
      paddingBottom: 15,
      '@media (min-width: 500px)': {
          textAlign: 'left',
          marginLeft: 30,
          marginRight: 30,
      },
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
                <h2>What we offer</h2>
                <div className={classes.infoText}>
                  <p>We've got you covered with shirts, hoodies, hats, or anything else you need.</p>
                  <br />
                  <p>We offer free design assistance so you might as well get in touch here or email us</p>
                  <p>contact@frattybear.com</p>
                </div>
                <img
                  src={require('../images/sampleProof.png')}
                  style={{
                    height: 300,
                  }}
                  alt=''
                />
              </div>
              <div className={classes.container}>
                <img
                  src={require('../images/rushCard.png')}
                  style={{
                    height: 300,
                  }}
                  alt=''
                />
                <h2>Free Rewards</h2>
                <div className={classes.infoText}>
                  <p>Every order, we donate 5% to the philanthropy of your choice!</p>
                  <br />
                  <p>You'll get free cards, banners, and even polos when you stick with us!</p>
                </div>
              </div>
              <div className={classes.container}>
                <h2>Loyalty Program</h2>
                <div className={classes.infoText}> 
                  <p>On only your second order, you'll receive free customized rush cards for your next rush searson.</p>
                  <br />
                  <p>Welcome to the Fratty Bear Family! </p>
                </div>
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