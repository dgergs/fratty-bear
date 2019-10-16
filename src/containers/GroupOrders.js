import React from 'react';
import { withStyles } from '@material-ui/styles';

const LIGHT_ORANGE = '#ff9a57';

const styles = {
    root: {
      // height: `calc(100vh - 160px)`,  // where you would use FOOTER_HEIGHT and NAV_HEIGHT
      minHeight: `calc(100vh - 160px)`,
      height: 'auto',
      maxWidth: 'calc(100vw)',
      width: 'auto',
      background: `linear-gradient(bottom, ${LIGHT_ORANGE}, #fff)`,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: window.innerWidth < 450 ? 5 : '0px 60px',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      margin:  window.innerWidth < 1000 ? '20px 0px' : '0px 20px',
      maxWidth: window.innerWidth < 1000 ? 'calc(85vw)' : 'calc(25vw)',
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
  image: {
    maxHeight: 300,
    // maxWidth: window.innerWidth < 700 ? 'calc(85vw)' : 'calc(25vw)',
    maxWidth: '95%',
    height: 'auto',
    width: 'auto',
  },
}

function GroupOrders(props) {

    const { classes, isMobile } = props;
    return (
        <div className={classes.root} >
            <div
              style={{
                display: 'flex',
                alignItems: 'space-around',
                justifyContent: 'space-around',
                flexDirection: isMobile ? 'column' : 'row',
                flexWrap: 'wrap',
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
                  className={classes.image}
                  alt=''
                />
              </div>
              <div className={classes.container}>
                <img
                  src={require('../images/rushCard.png')}
                  className={classes.image}
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
                  className={classes.image}
                  alt=''
                />
              </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(GroupOrders);