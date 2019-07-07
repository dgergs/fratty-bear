import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        alignSelf: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        background: 'linear-gradient(white, rgb(224, 22, 43, 0.1), white)'
    },
    image: {
        width: 400,
        marginRight: 20,
        marginLeft: 20,
        alignSelf: 'center',
        boxShadow: '0px 5px 15px #aaa',
        flex: 6
    },
    infoContainer: {
        width: 700,
        display: 'flex',
        flexDirection: 'column',
        marginRight: 20,
        justifyContent: 'space-between',
        flex: 5
    },
    infoText: {
        fontSize: 27,
    },
}

const yikes = 'Back in 2017 when I was elected as Rush Officer of Pi Lambda Phi at the University of California, Berkeley, I had the responsibility of designing and attaining the rush shirts for the semester. Having already been making custom t-shirts for a wholesale company I started in high school, my chapter was naturally okay purchasing them from me. I saw this as a business opportunity and began selling custom designed t-shirts to many of the houses on Berkeley’s Greek Row. Through discussions with my friends and customers, I was able to understand the frustrations that come from the process of ordering custom merchandise from finding a design that everyone can agree on to wondering whether the “Gildan 2000” t-shirts a greek apparel website recommended are going to feel high quality or cheap. I did my research and realized that there are very few options that fraternities guys can choose from, meaning they have to settle with what’s available. What really surprised me was how much these other websites were charging for what should cost a lot less outside of the greek industry. A navy shirt that would normally cost anyone else 15 dollars now costs you 22 dollars because you are a college student in greek life that “has money and can pay more”. Doesn’t sounds fair, does it? That’s because its not. With the guidance and encouragement from my business professor, my partner Drey and I decided to focus our attention on solving these issues and simplifying the process of ordering your boys the dope shirts that they deserve. And that’s how Fratty Bear began.'
const info = 'It wasn\'t fate. It’s not a calling, vocation, or anything that dramatic. There wasn\'t a parting of the heavens or some divine oracle declaring that our life\'s purpose was to make custom clothing. Nahhhhh... Nothing like that. We\'re just two college students tired of seeing fraternities get overcharged for personalized clothing.'
const info2 = 'We have the machinery to do embroidery, direct-to-garment printing, silk screen, and full color vinyl heat transfer. We can make your clothing exactly the way you want it.'

function AboutUs(props) {

    const { classes } = props;
    return (
        <div className={classes.root} >
            <img
                alt="two handsome men"
                src={require('../images/aboutus.jpg')}
                className={classes.image}
             />
            <div className={classes.infoContainer} >
                <h1> About Us </h1>
                <div className={classes.infoText} >{yikes}</div>
                <div className={classes.infoText} >{}</div>
            </div>
        </div>
    );
}

export default withStyles(styles)(AboutUs);