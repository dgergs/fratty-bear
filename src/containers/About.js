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

const yikes = 'Back in 2017 when I was elected as Rush Officer of Pi Lambda Phi at the University of California, Berkeley, I had the responsibility of designing and attaining the rush shirts for the semester. Having already been making custom t-shirts for a wholesale company I started in high school, my chapter was naturally okay purchasing them from me. I saw this as a business opportunity and began selling custom designed t-shirts to many of the houses on Berkeley’s Greek Row. Through discussions with my friends and customers, I was able to understand the frustrations that come from the process of ordering custom merchandise from finding a design that everyone can agree on to wondering whether the “Gildan 2000” t-shirts a greek apparel website recommended are going to feel high quality or cheap. I did my research and realized that there are very few options that fraternities guys can choose from, meaning they have to settle with what’s available. What really surprised me was how much these other websites were charging for what should cost a lot less outside of the greek industry. A navy shirt that would normally cost anyone else 15 dollars now costs you 22 dollars because you are a college student in greek life that “has money and can pay more”. Doesn’t sounds fair, does it? That’s because its not. With the guidance and encouragement from my business professor, my partner Drey and I decided to focus our attention on solving these issues and simplifying the process of ordering your boys the dope shirts that they deserve. And that’s how Fratty Bear began.'
const info = 'It wasn\'t fate. It’s not a calling, vocation, or anything that dramatic. There wasn\'t a parting of the heavens or some divine oracle declaring that our life\'s purpose was to make custom clothing. Nahhhhh... Nothing like that. We\'re just two college students tired of seeing fraternities get overcharged for personalized clothing.'
const info2 = 'We have the machinery to do embroidery, direct-to-garment printing, silk screen, and full color vinyl heat transfer. We can make your clothing exactly the way you want it.'

const abt0 = 'It\'s really not that crazy. Fraternities shouldn\'t be over charged for custom apparel.' 
const abt1 = 'We started Fratty Bear because we wanted to make ordering fraternity apparel easy. No hidden fees, no unreasonable order restrictions, and no more ugly apparel. We do it all from shirts, to hoodies, to banners, and more.'
const abt2 = ''

var link = <a href='https://dreygerger.typeform.com/to/CTpPof'>here</a>;
class About extends React.Component {
    render() {
        return (
            <div>
                <h1 style={styles.title}>Hi, we're Jose and Drey.</h1>
                <div style={styles.container}>
                    <div>
                        <img alt="two handsome men" src={require('../images/aboutus.jpg')} style={styles.image} />
                        <p >Fratty Bear Co-Founders,
                        <br />
                        <a href="https://www.linkedin.com/in/drey-gerger-748326b2/" style={{color:'black'}}>Drey Gerger </a>
                        and Jose Solorzano</p>
                    </div>
                    <div style={styles.infoContainer} >
                      <p style={styles.infoText} >{abt0}</p>
                      <p style={styles.infoText} >{abt1}</p>
                      <p style={styles.infoText} >Don’t be afraid to reach out! Contact us here or email us at <a href='mailto:contact@frattybear.com'>contact@frattybear.com</a>.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;