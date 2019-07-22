import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {

    },
    bearContainer: {
        backgroundImage: `url(${require('../images/peteTheBear.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: 1000,
        textAlign: 'center',
        position: 'relative',
    },
    frattyBear: {
        padding: '40px 20px 0px 20px',
        textShadow: '4px 0px 0px #f01f39',
        borderBottom: '4px solid #f01f39',
        display: 'inline-block',
        color: 'white',
        fontSize: 120,
        fontFamily: 'Arial',
        textTransform: 'uppercase',
        fontWeight: 600,
        position: 'relative',
        zIndex: 100,
        top: 600,
        corsor: 'inherit',
    },
    frattyInfo: {
        marginLeft: 30,
        marginTop: 30,
        color: 'white',
        fontSize: 30,
    },
    whatWeDo: {
        backgroundColor: '#00356b',
        // background: 'linear-gradient(top, #0052A5, #00356b)',
    },
    weDoPhoto: {
        height: 500,
    },
    weDoContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20,
        marginTop: 0,
        color: 'white',
        maxWidth: 400,
        textAlign: 'center',
        // border: '1px solid #747474',
        boxShadow: '0px 0px 4px 0px white',
        borderRadius: 4,
        padding: 20,
    },
    weDoText: {
        margin: 0,
        marginTop: 20,
        // fontWeight: 300,
        lineHeight: 2,
    },
}

class App extends React.PureComponent {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <div className={classes.bearContainer} >
                    <div style={{ position:'absolute', width: '100%', height: '100%', background: '#0052A5', opacity: 0.4 }} />
                    <div className={classes.frattyBear}>Fratty Bear</div>
                    {false && <div className={classes.frattyInfo}>
                        We make bulk orders for fraternities
                        <br />
                        Need help with designs? We've gotchu covered.
                    </div>}
                </div>
                <div className={classes.whatWeDo}>
                    <h2
                        style={{ textAlign: 'center', color: 'white', margin: 0, fontSize: 40, padding: '30px 0px 0px' }}
                    >
                        What We Do
                    </h2>
                    <div style={{ width: 120, height: 5, background: 'white', margin: '15px auto 40px' }} />
                    <div
                        style={{ width: '100%', display: 'flex', justifyContent: 'space-around', maxWidth: 1200, margin: 'auto' }}
                    >
                        <div
                            className={classes.weDoContent}
                        >
                            <img
                                className={classes.weDoPhoto}
                                src={require('../images/bulkOrders.jpg')}
                            />
                            <br />
                            <h1 className={classes.weDoText} >
                                bulk orders
                            </h1>
                            <h4 className={classes.weDoText} >
                                Whether you need 12 intramural jerseys or 1000 t-shirts for a philanthropy event, Fratty Bear is here to hook it up
                            </h4>
                        </div>
                        <div
                            className={classes.weDoContent}
                        >
                            <img
                                className={classes.weDoPhoto}
                                src={require('../images/design.jpg')}
                            />
                            <br />
                            <h1 className={classes.weDoText} >
                                free design
                            </h1>
                            <h4 className={classes.weDoText} >
                                We have an in-house design team to work with you and help you find the perfect shirt designs
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
