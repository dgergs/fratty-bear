import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {

        background: 'linear-gradient(white, rgb(224, 22, 43, 0.1), white)'
    },
    rowFormat: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        alignSelf: 'center',
        paddingTop: 40,
        paddingBottom: 40,
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
        fontSize: 30,
    },
}

const info = ''
const info2 = 'We\'ve got you covered for Rush! Shirts, banners, cards, anything'
const info3 = 'Join our loyalty program for rewards on your orders!'

function Rush(props) {

    const { classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.rowFormat} >
                <img
                    alt="rush proof"
                    src={require('../images/rushShirt.png')}
                    className={classes.image}
                 />
                <div className={classes.infoContainer} >
                    <div className={classes.infoText} style={{fontSize: 35}}  ><br />{info2}</div>
                    <div className={classes.infoText} >
                        Email<a href= "mailto:contact@frattybear.com" style={{color:'inherit', textDecoration: 'none'}}> contact@frattybear.com </a>
                        with your order and we'll get started
                    </div>
                </div>
            </div>
            <div className={classes.rowFormat} >
                <div className={classes.infoContainer} style={{ width: 800 }}>
                    <div className={classes.infoText} >
                        First time frats get free custom ordering through
                        rush cards with their order!
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className={classes.infoText} style={{fontSize: 35, display: 'flex', alignItems: 'center',}}>
                        <img alt="rush proof" src={require('../images/LoyaltyTemplate.png')} className={classes.image}/>
                        <div style={{marginLeft:30}}>{info3}</div>
                    </div>
                </div>
                <div>
                    <img
                        alt="rush group"
                        src={require('../images/rushGroup.png')}
                        className={classes.image}
                    />
                </div>
             </div>
            <div className={classes.rowFormat} >


            </div>
        </div>
    );
}

export default withStyles(styles)(Rush);