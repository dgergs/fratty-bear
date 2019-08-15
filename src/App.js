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
import Contact from './containers/Contact';
import UnderConstruction from './containers/UnderConstruction';

const BLUE = '#0052A5';
const RED = '';

const PAGES = [
    { label: 'about us', link: '/about-us' },
    { label: 'reatil shop', link: '/retail' },
    { label: 'wholesale', link: '/wholesale' },
    { label: 'past work', link: '/previous-work' },
]

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial',
        textTransform: 'uppercase',
    },
    header: {
        // backgroundColor: BLUE,
        background: 'linear-gradient(top, #0052A5, #00356b)',
        textTransform: 'uppercase',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
    },
    navText: {
        fontSize: 30,
        margin: '0px 5px 0px 5px',
        cursor: 'pointer',
        transition: 'text-decoration 0.4s, font-size 0.4s',
        minWidth: 250,
        textAlign: 'center',
        border: '2px solid transparent',
        textDecorationLine: 'underline',
        textDecorationColor: 'transparent',
        '&:hover': {
            textShadow: '2px 0px 0px #f01f39',
            textDecorationColor: '#f01f39',
        }
    },
    navTextFocus: {
        textShadow: '2px 0px 0px #f01f39',
        textDecorationColor: '#f01f39',
    },
    construction: {
        display: 'flex',
        color: 'red',
        alignItems: 'center',
    },
    pageTabs: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 5,
        marginRight: 5,
        cursor: 'pointer',
    },
    navMenu: {},
    footer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#383838',
        color: '#fff',
        padding: 20,
        flexDirection: 'column',
        '@media (min-width: 500px)': {
            flexDirection: 'row',
        }
    },
    footerCol: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 5,
        marinRight: 5,
    },
    footerItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: '#fff'
    },
    drawer: {
        position: 'absolute',
        right: 0,
        transition: 'width 0.5s',
        height: 'calc(100vh)',
        background: 'blue',
        zIndex: 1500,
        background: 'linear-gradient(right, #0052A5, #00356b)',
    },
    menuText: {
        margin: 10,
        color: '#fff',
        fontWeight: 600,
    },
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuAnchor: null,
            page: '/',
            showMenu: false,
        }
    }

    changePage = (page) => () => {
        this.setState({ page, showMenu: false });
    }

    handleMenuOpen = (event) => this.setState({ menuAnchor: event.currentTarget });
    handleMenuClose = (event) => this.setState({ menuAnchor: null }); //arrow function

    renderPage = () => {
        const { classes } = this.props;
        switch(this.state.page) {
            case '/':
                return <Home />;
            case '/about-us':
                return <AboutUs />
            case '/previous-work':
                return <UnderConstruction />
            case '/contact':
                return<Contact />
            case '/retail':
                return <UnderConstruction />
            case '/wholesale':
                return <Rush />
        }
    }

    render() {
        const { classes } = this.props;
        console.log(this.state.page)
        return (
            <div className={classes.root} >
                <AppBar position = "static">
                    <Toolbar className={classes.header} >
                        <div
                            className={`${classes.navText} ${classes.navTextFocus}`}
                            onClick={this.changePage('/')}
                        >
                            fratty bear
                        </div>
                        {window.innerWidth > 700 && PAGES.map((tab) => (
                            <div
                                className={`${classes.navText} ${tab.link === this.state.page || tab.label === 'fratty bear' ? classes.navTextFocus : ''}`}
                                onClick={tab.label === 'past work' ? () => {window.location.href = "https://www.pinterest.com/klcwholesale/fratty-bear/";} : this.changePage(tab.link)}
                                style={tab.label === 'fratty bear' ? { fontSize: 40 } : {}}
                            >
                                {tab.label}
                            </div>
                            ))}
                            {window.innerWidth < 700 &&
                                <div
                                    onClick={() => {this.setState({ showMenu: true })}}
                                >
                                    <MenuIcon />
                                </div>
                            }
                    </Toolbar>
                    
                </AppBar>
                <div
                    className={classes.drawer}
                    style={{
                        width: this.state.showMenu ? 200 : 0,
                    }}
                >
                    {this.state.showMenu && PAGES.map((page) => (
                        <div
                            onClick={page.label === 'past work' ? () => {window.location.href = "https://www.pinterest.com/klcwholesale/fratty-bear/";} : this.changePage(page.link)}
                            className={classes.menuText}
                        >
                            {page.label}
                        </div>
                        ))}
                </div>
                {this.state.showMenu &&
                    <div
                        style={{
                            zIndex: 1400,
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            width: 'calc(100vw)',
                            height: 'calc(100vh)',
                            backgroundColor: 'rgba(0,0,0,0.3)',
                        }}
                        onClick={() => {this.setState({ showMenu: false })}}
                    />
                }
                {false && <div className={classes.construction}>
                    <h1 style={{textAlign: 'center', margin: 'auto'}}>Site Under Construction. It will look better soon...</h1>
                </div>}
                {this.renderPage()}
                <div className={classes.footer}>
                    <div className={classes.footerCol} >
                        <div style={{ display: 'flex', alignItems: 'center' }} >
                            <HomeIcon />
                            <h4>
                                14537 Garfield Ave. <br /> Paramount, CA, 90723
                            </h4>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }} >
                            <EmailIcon />
                            <h4>
                                contact@frattybear.com
                            </h4>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <h2>Our Hours</h2>
                            <p>Monday to Friday: <br /> 9:00am - 6:00pm</p>
                        </div>
                    </div>
                    <div className={classes.footerCol} >
                        <h2>Instagram</h2>
                    </div>
                    <div className={classes.footerCol} >
                        <h2>Our Philosophy</h2>
                        <p>At Fratty Bear, we're good at two things: having fun and making t-shirts.
                             We make ordering shirts for your fraternity as easy as shotgunning a Natty Light second semester of senior year. Who says you can't get lit while being a scholar?
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
