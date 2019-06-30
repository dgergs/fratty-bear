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
        background: 'linear-gradient(white, rgb(224, 22, 43, 0.3), white)'
    },
    image: {
        width: 400,
        marginRight: 20,
        boxShadow: '0px 5px 15px #aaa',
    },
    infoContainer: {
        width: 700,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    infoText: {
        fontSize: 27,
    },
}

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
                <div className={classes.infoText} >{info}</div>
                <div className={classes.infoText} >{info2}</div>
            </div>
        </div>
    );
}

export default withStyles(styles)(AboutUs);