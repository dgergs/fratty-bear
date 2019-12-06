import React from 'react';
import '../css/style.css';

const styles = {
    title: {
        fontSize: '56px',
        fontFamily: 'Oswald, sans-serif',
        color: 'var(--orange)',
        paddingTop: '50px',
        paddingBottom: '20px',
        textAlign: 'center',
    },
    container:  {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        margin: '50px 10vw',
    },
    image: {
        maxWidth: '80vw',
        maxHeight: 400,
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 5,
        '@media (max-width: 500px)': {
            marginTop: 50,
        }
    },
    infoText: {
        fontSize: 22,
        paddingLeft: '5vw',
        '@media (max-width: 500px)': {
            fontSize: 18,
            textAlign: 'center',
            marginLeft: 30,
            marginRight: 30,
        },
    },
}

const abt0 = 'Here at Fratty Bear, we’re in the business of creating something great. We value honesty, loyalty, and experiences worth talking about. Our top priorities are making high quality products and giving unbeatable customer service to each and every person that steps through our doors. We aim to provide the best possible experience that you can’t help but tell your friends about the guys at Fratty Bear.' 
const abt1 = ' \"Don\'t find customers for your products, find products for your customers.\" – Seth Godin'
const abt2 = ''

var link = <a href='https://frattybear.typeform.com/to/Cw3MGa'>here</a>;
class About extends React.Component {
    render() {
        return (
            <div>
                <h1 style={styles.title}>Hi, we're Jose and Drey.</h1>
                <div style={styles.container}>
                    <div>
                        <img alt="two handsome men" src={require('../images/aboutus2.jpg')} style={styles.image} />
                        <p >Fratty Bear Co-Founders,
                        <br />
                        <a href="https://www.linkedin.com/in/drey-gerger-748326b2/" style={{color:'black'}}>Drey Gerger </a>
                        and Jose Solorzano</p>
                    </div>
                    <div style={styles.infoContainer} >
                      <p style={styles.infoText} >{abt0}</p>
                      <p style={styles.infoText} >{abt1}</p>
                      <p style={styles.infoText} >Please reach out! Email us at <a href='mailto:contact@frattybear.com'>contact@frattybear.com</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;