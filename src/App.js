import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/styles';

import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';

import AboutUs from './containers/AboutUs';
import Home from './containers/Home';

const BLUE = '#0052A5';
const RED = '';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        backgroundColor: BLUE,
        fontFamily: 'impact',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navMenu: {},
    footer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#383838',
        height: 100,
    },
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuAnchor: null,
            page: '/',
        }
    }

    changePage = (page) => () => {
        this.setState({ page });
    }

    handleMenuOpen = (event) => this.setState({ menuAnchor: event.currentTarget });
    handleMenuClose = (event) => this.setState({ menuAnchor: null }); //arrow function

    renderPage = () => {
        const { classes } = this.props;
        switch(this.state.page) {
            case '/':
                return (
                    <Home />
                 );
            case '/about-us':
                return <AboutUs />

        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <AppBar position = "static">
                    <Toolbar className={classes.header} >
                        <div
                            onClick={this.changePage('/')}
                            style={{ cursor: 'pointer' }}
                        >
                            <h1>
                                Fratty Bear
                            </h1>
                        </div>
                        <IconButton onClick={this.handleMenuOpen} >
                            <MenuIcon style={{ color: '#fff' }} />  {/*this is an inline style*/}
                        </IconButton>
                        <Menu
                            anchorEl={this.state.menuAnchor}
                            open={Boolean(this.state.menuAnchor)}
                            onClose={this.handleMenuClose}
                            className={classes.navMenu}
                        >
                            <MenuItem onClick={this.changePage('/about-us')} >About Us</MenuItem>
                            <a
                                style={{ textDecorationLine: 'none', color: '#000' }}
                                href="https://www.pinterest.com/klcwholesale/fratty-bear/"
                            >
                                <MenuItem  >
                                    Previous Work
                                </MenuItem>
                            </a>
                        </Menu>
                    </Toolbar>
                </AppBar>
                {this.renderPage()}
                <div className={classes.footer} >
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
