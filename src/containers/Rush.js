import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        background: 'linear-gradient(white, rgb(251, 171, 24, 0.1), white)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    rowFormat: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        width: '100%',
        flexDirection: 'row',
        '@media (min-width: 500px)': {
            flexDirection: 'row',
        },
    },
    colFormat: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        width: '100%',
        flexDirection: 'column',
        '@media (min-width: 500px)': {
            flexDirection: 'row',
        },
    },
    image: {
        width: 400,
        boxShadow: '0px 5px 15px #aaa',
    },
    infoContainer: {
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    infoText: {
        fontSize: 29,
        textTransform: 'uppercase',
        fontWeight: 500,
        textAlign: 'center',
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
                <div className={classes.colFormat} >
                    <img
                        alt="rush proof"
                        src={require('../images/rushShirt.png')}
                        className={classes.image}
                    />
                    <div className={classes.infoContainer} >
                        <div className={classes.infoText}>{info2}</div>
                        <br />
                        <div className={classes.infoText} >
                            <a
                                href= "mailto:contact@frattybear.com"
                                style={{
                                    color:'inherit',
                                    borderBottom: '2px solid #000',
                                    cursor: 'pointer',
                                    textDecoration: 'none',
                                }}
                            >
                                contact@frattybear.com
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.colFormat} >
                    <div className={classes.infoContainer} >
                        <div className={classes.infoText}>
                            First time frats get free custom
                            rush cards with their order!
                        </div>
                    </div>
                    <img
                        alt="rush group"
                        src={require('../images/rushGroup.png')}
                        className={classes.image}
                    />
                </div>
                <div className={classes.colFormat} >
                    <img
                        alt="rush proof"
                        src={require('../images/LoyaltyTemplate.png')}
                        className={classes.image}
                    />
                    <div className={classes.infoContainer}>
                        <div className={classes.infoText}>
                            {info3}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default withStyles(styles)(Rush);