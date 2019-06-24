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
}

class App extends React.PureComponent {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <div className={classes.bearContainer} ></div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
