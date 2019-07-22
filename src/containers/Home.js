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
        backgroundColor: '#0052A5',
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
                        style={{ textAlign: 'center', color: 'white', margin: 0, fontSize: 40, padding: '30px 0px' }}
                    >
                        What We Do
                    </h2>
                    <div style={{ width: 120, height: 5, background: 'white', margin: 'auto' }} />
                    <div
                        style={{ width: '100%', display: 'flex', justifyContent: 'space-around', maxWidth: 800, margin: 'auto' }}
                    >
                        <div style={{ width: 300, height: 400, border: '2px solid white', margin: 40 }} />
                        <div style={{ width: 300, height: 400, border: '2px solid white', margin: 40 }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
