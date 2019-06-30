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
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';

import AboutUs from './containers/AboutUs';
import Home from './containers/Home';
import Rush from './containers/Rush';

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
    pageTabs: {
    color: '#fff',
    marginLeft: 5,
    marginRight: 5,
    },
    navMenu: {},
    footer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#383838',
        color: '#fff',
        padding: 20
    },
    footerLayout: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    },
    footerCol: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5,
        marinRight: 5,
    },
    footerItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: '#fff'
    }
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
            case '/rush':
                return <Rush />

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
                        {/*<IconButton onClick={this.handleMenuOpen} >
                            <MenuIcon style={{ color: '#fff' }} />  {*//*this is an inline style*//*}
                        </IconButton>*/}
                        <div>
                            <Button onClick={this.changePage('/rush')} className={classes.pageTabs} >Rush</Button>
                            <Button onClick={this.changePage('/about-us')} className={classes.pageTabs} >About Us</Button>
                            <a href="https://www.pinterest.com/klcwholesale/fratty-bear/">
                                <Button className={classes.pageTabs} >Previous Work</Button>
                            </a>
                        </div>
                        {/*<Menu
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
                        </Menu>*/}
                    </Toolbar>
                </AppBar>
                {this.renderPage()}
                <div className={classes.footer} >
                    <div className={classes.footerLayout} >
                        <div className={classes.footerCol} >
                            <div className={classes.footerItem}>
                                <HomeIcon />
                                <h4 style={{paddingLeft:5}}> 14537 Garfield Ave. Paramount, CA, 90723</h4>
                            </div>
                            <div className={classes.footerItem}>
                                <EmailIcon />
                                <h4 style={{paddingLeft:5}}> contact@frattybear.com</h4>
                            </div>
                        </div>

                        <div className={classes.footerCol} >
                            <div className={classes.footerItem}>
                                <h2> Our Hours </h2>
                            </div>
                            <div className={classes.footerItem}>
                                <h4> Monday to Friday: 9:00am - 6:00pm </h4>
                            </div>
                        </div>

                        <div className={classes.footerCol} >
                            <div className={classes.footerItem}>
                                <h2> Instagram </h2>
                            </div>
                        </div>

                        <div className={classes.footerCol} style={{flex: 2}} >
                            <div className={classes.footerItem}>
                                <h2> Our Philosophy </h2>
                            </div>
                            <div className={classes.footerItem}>
                                <h4>At Fratty Bear, we're good at two things: having fun and making t-shirts.
                                Just like our customers, we are strong believers in the "work hard, play hard"
                                philosophy. We make ordering shirts for your fraternity as easy as shotgunning
                                a Natty Light second semester of senior year. Who says you can't get lit while
                                being a scholar?</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
