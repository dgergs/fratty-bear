import React from 'react';
import '../css/style.css';
import '../css/home.css';
import FrattyBear from '../components/FrattyBear';
import ImageSeries from '../components/ImageSeries';
import TextLoop from "react-text-loop";

const ORANGE = '#FE6600';

const styles = {
    frattyBear: {
      color: 'WHITE',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '1 1 60%',
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
    }
}

const images = [require('../images/stock_1.jpg'), require('../images/stock_2.jpg'), require('../images/stock_3.jpg'), require('../images/stock_4.jpg')];

class Home extends React.PureComponent {
    render() {
        return (
            <div>
              <div class="bearContainer">
                <FrattyBear />
                <h1 class="landingHeader">Custom Fraternity Apparel</h1>
              </div>
              <h1>What We Offer</h1>
              <div class="value">
                <div class="value-prop">
                  <img alt="" src={require('../images/FrattyBearIcon.png')} class="value-img" />
                  <h3>Clothing Variety</h3>
                  <p>We've got you covered with shirts, hoodies, hats, or anything else you need.</p>
                </div>
                <div class="value-prop">
                  <img alt="" src={require('../images/FrattyBearIcon.png')} class="value-img" />
                  <h3>Loyalty Program</h3>
                  <p>Earn rewards your house can enjoy through shopping with us.</p>
                </div>
                <div class="value-prop">
                  <img alt="" src={require('../images/FrattyBearIcon.png')} class="value-img" />
                  <h3>Philanthropy</h3>
                  <p>For every philanthropy order, we donate 5% of profits to the non-profit of your choice.</p>
                </div>
              </div>
              <ImageSeries images={images}/>
              <h1>Past Clients</h1>
              <div style={{textAlign: 'center'}}>
                <TextLoop interval={5000} mask = {true}>
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

export default Home;
