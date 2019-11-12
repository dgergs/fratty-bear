import React from 'react';
import { withStyles } from '@material-ui/styles';

const LIGHT_ORANGE = '#ff9a57';

const styles = {
    root: {
      minHeight: `calc(100vh - 160px)`,
      height: 'auto',
      maxWidth: 'calc(100vw)',
      width: 'auto',
      background: `linear-gradient(bottom, ${LIGHT_ORANGE}, #fff)`,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0px 60px',
    },
    image: {
        display: 'block',
        maxWidth: 'calc(95vw)',
        maxHeight: 600,
        width: 'auto',
        height: 'auto',
        alignSelf: 'center',
        boxShadow: '0px 5px 15px #aaa',
        flex: 6
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 5
    },
    infoText: {
        fontSize: 26,
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

const yikes = 'Back in 2017 when I was elected as Rush Officer of Pi Lambda Phi at the University of California, Berkeley, I had the responsibility of designing and attaining the rush shirts for the semester. Having already been making custom t-shirts for a wholesale company I started in high school, my chapter was naturally okay purchasing them from me. I saw this as a business opportunity and began selling custom designed t-shirts to many of the houses on Berkeley’s Greek Row. Through discussions with my friends and customers, I was able to understand the frustrations that come from the process of ordering custom merchandise from finding a design that everyone can agree on to wondering whether the “Gildan 2000” t-shirts a greek apparel website recommended are going to feel high quality or cheap. I did my research and realized that there are very few options that fraternities guys can choose from, meaning they have to settle with what’s available. What really surprised me was how much these other websites were charging for what should cost a lot less outside of the greek industry. A navy shirt that would normally cost anyone else 15 dollars now costs you 22 dollars because you are a college student in greek life that “has money and can pay more”. Doesn’t sounds fair, does it? That’s because its not. With the guidance and encouragement from my business professor, my partner Drey and I decided to focus our attention on solving these issues and simplifying the process of ordering your boys the dope shirts that they deserve. And that’s how Fratty Bear began.'
const info = 'It wasn\'t fate. It’s not a calling, vocation, or anything that dramatic. There wasn\'t a parting of the heavens or some divine oracle declaring that our life\'s purpose was to make custom clothing. Nahhhhh... Nothing like that. We\'re just two college students tired of seeing fraternities get overcharged for personalized clothing.'
const info2 = 'We have the machinery to do embroidery, direct-to-garment printing, silk screen, and full color vinyl heat transfer. We can make your clothing exactly the way you want it.'

const abt0 = 'It\'s really not that crazy. Fraternities shouldn\'t be over charged for custom apparel.' 
const abt1 = 'We started Fratty Bear to be the best fraternity printing option out there. We do it all from shirts, to hoodies, to banners, and more. '

var link = <a href='https://dreygerger.typeform.com/to/CTpPof'>here</a>;
function AboutUs(props) {

    const { classes } = props;
    return (
        <div className={classes.root} >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                }}
            >
              <div>
                <img
                    alt="two handsome men"
                    src={require('../images/aboutus.jpg')}
                    className={classes.image}
                 />
                 <p >Fratty Bear Co-Founders,</p>
                 <p>Drey Gerger and Jose Solorzano</p>
                </div>
                <div className={classes.infoContainer} >
                  <h1 style={ {fontSize: 45}}> About Us </h1>
                  <div className={classes.infoText} >{abt0}</div>
                  <div className={classes.infoText} >{abt1}</div>
                  
                  <div className={classes.infoText} >
                    If you want to reach out, contact us {link} or email us at
                  </div>
                  <a style={ {fontSize: 36} }href='mailto:contact@frattybear.com'>contact@frattybear.com</a>
                </div>
            </div>
        </div>
    );
}

export default withStyles(styles)(AboutUs);