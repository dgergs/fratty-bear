import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {

    },
    bearContainer: {
        backgroundImage: `url(${require('../images/peteTheBear.jpg')})`,
        backgroundSize: 'cover',
        width: '100%',
        height: 900,
    },
    frattyBear: {
    marginLeft: 30,
    marginLeft: 30,
    color: 'white',
    fontSize: 120,
    fontFamily: 'Impact'
    },
    frattyInfo: {
        marginLeft: 30,
        marginTop: 30,
        color: 'white',
        fontSize: 30,
        }
}

class App extends React.PureComponent {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <div className={classes.bearContainer} >
                <br />
                <br />
                <br />
                <br />
                <div className={classes.frattyBear}>Fratty Bear</div>

                <br />
                <br />
                <br />
                <br />
                <div className={classes.frattyInfo}>We make bulk orders for fraternities</div>
                 <br />

                <div className={classes.frattyInfo}>Need help with designers? We've gotchu covered. </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
