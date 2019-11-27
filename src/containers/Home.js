import React from 'react';
import { withStyles } from '@material-ui/styles';
import FrattyBear from '../components/FrattyBear';
import ImageSeries from '../components/ImageSeries';
import Button from '@material-ui/core/Button';
import TextLoop from "react-text-loop";

const ORANGE = '#FE6600';

const styles = {
    root: {
      color: ORANGE,
      fontFamily: "Lato, Roboto, Helvetica Neue, sans-serif",
    },
    title: {
      fontSize: '56px',
      fontFamily: 'Oswald, sans-serif',
      color: 'var(--orange)',
      paddingTop: '50px',
      paddingBottom: '20px',
      textAlign: 'center',
    },
    landingHeader: {
      color: 'WHITE',
      textShadow: '3px 3px 3px rgba(0, 0, 0, 0.25)',
      fontSize: window.innerWidth > 500 ? '72px' : '36px',
    },
    frattyBear: {
      color: 'WHITE',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '1 1 60%',
      flexDirection: 'column',
    },
    bearContainer: {
      backgroundImage: `url(${require('../images/peteTheBear.jpg')})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    orangeTitle: {
      color: 'Orange',
      fontSize: 60,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    quotes: {
      color: 'Black',
      fontSize: 30,
      textAlign: 'center'
    },
    writtenBy: {
      color: 'Black',
      fontSize: 20,
      textAlign: 'center',
    },
    value: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: window.innerWidth > 500 ? 'row': 'column',
      alignItems: 'center',
      margin: '0 10vw',
      marginTop: '10px',
    },
    valueProp: {
      margin: '0 20px',
    },
    valuePropH3: {
      fontWeight: 900,
      fontSize: '24px',
      color: '#525252',
    },
    valueImg: {
      width: '50px',
    },
}

const images = [require('../images/stock_1.jpg'), require('../images/stock_2.jpg'), require('../images/stock_3.jpg'), require('../images/stock_4.jpg')];

class Home extends React.PureComponent {
    render() {
        return (
            <div>
              <div style={styles.bearContainer}>
                <FrattyBear />
                <h1 style={styles.landingHeader}>Custom Fraternity Apparel</h1>
                <Button variant="contained" href='https://dreygerger.typeform.com/to/CTpPof'>Get in touch</Button>
              </div>
              <h1 style={styles.title}>What We Offer</h1>
              <div style={styles.value}>
                <div style={styles.valueProp}>
                  <img alt="" src={require('../images/FrattyBearIcon.png')} style={styles.valueImg} />
                  <h3>Clothing Variety</h3>
                  <p>We've got you covered with shirts, hoodies, hats, or anything else you need.</p>
                </div>
                <div style={styles.valueProp}>
                  <img alt="" src={require('../images/FrattyBearIcon.png')} style={styles.valueImg} />
                  <h3>Loyalty Program</h3>
                  <p>Earn rewards your house can enjoy through shopping with us.</p>
                </div>
                <div style={styles.valueProp}>
                  <img alt="" src={require('../images/FrattyBearIcon.png')} style={styles.valueImg} />
                  <h3>Philanthropy</h3>
                  <p>For every order, we donate 5% of your order to your house's philanthropy!</p>
                </div>
              </div>
              <ImageSeries images={images}/>
              <h1 style={styles.title}>Past Clients</h1>
              <div style={{textAlign: 'center', overflowWrap: 'break-word', flex: 1}}>
                <TextLoop interval={5000} mask = {true} noWrap = {window.innerWidth > 500}>
                  <div style={styles.container} style={{flexDirection:'column', textAlign: 'center',}}>
                    <div style={styles.quotes}>
                      "Shirts arrived and they look GREAT"
                    </div>
                    <div style={styles.writtenBy}>
                      - Max, UC Berkeley
                    </div>
                  </div>
                  <div style={styles.container} style={{flexDirection:'column', textAlign: 'center',}}>
                    <div style={styles.quotes}>
                      "Fantastic. Huge hit"
                    </div>
                    <div style={styles.writtenBy}>
                      - Alec, Columbia University
                    </div>
                  </div>
                  <div style={styles.container} style={{flexDirection:'column', textAlign: 'center',}}>
                    <div style={styles.quotes}>
                      "Umm.. I'm not in a frat"
                    </div>
                    <div style={styles.writtenBy}>
                      - Jen, UC Berkeley
                    </div>
                  </div>
                  <div style={styles.container} style={{flexDirection:'column', textAlign: 'center',}}>
                    <div style={styles.quotes}>
                      "These philo shirts put our house on the map"
                    </div>
                    <div style={styles.writtenBy}>
                      - Ken, Arizona State University
                    </div>
                  </div>
                </TextLoop>{" "}
                </div>
            </div>
          );
    }

}

export default withStyles(styles)(Home);
