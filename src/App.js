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
import GroupOrders from './containers/GroupOrders';

export const ORANGE = '#FE6600';
const BLUE = '#0052A5';
const RED = '';

const PAGES = [
  { label: <img
    src={require('./images/FrattyBearIcon.png')}
    alt="icon"
    style={{
        height: 60,
        width: 60,
        marginRight: 10,
    }}
  />, link: '/' },
  { label: 'Group Orders', link: '/group-orders' },
  { label: 'Shop', link: '/retail-shop' },
  { label: 'About Us', link: '/about-us' },
  { label: 'Past Work', link: '/past-work' },
]

export const NAV_HEIGHT = 60;
export const FOOTER_HEIGHT = 100;

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Comfortaa',
        // textTransform: 'uppercase',
    },
    header: {
        backgroundColor: '#fff',
        // background: 'linear-gradient(top, #0052A5, #00356b)',
        // textTransform: 'uppercase',
        fontWeight: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        height: NAV_HEIGHT,
    },
    navText: {
        fontSize: 30,
        color: ORANGE,
        margin: '0px 5px 0px 5px',
        cursor: 'pointer',
        transition: 'text-decoration 0.4s, font-size 0.4s',
        // minWidth: 250,
        margin: '0px 10px',
        textAlign: 'center',
        border: '2px solid transparent',
        textDecorationLine: 'underline',
        textDecorationColor: 'transparent',
        '&:hover': {
            
        }
    },
    navTextFocus: {
        borderBottom: `3px solid ${ORANGE}`,
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
        position: 'fixed',
        right: 0,
        transition: 'width 0.5s',
        height: 'calc(100vh)',
        background: 'blue',
        zIndex: 1500,
        background: 'linear-gradient(right, #ff9a57, #FE6600)',
    },
    menuText: {
        margin: 10,
        color: '#fff',
        fontWeight: 600,
    },
    mobileMenuButton: {
      position: 'fixed',
      top: 10,
      right: 10,
      background: '#fff',
      borderRadius: '50%',
      boxShadow: '0px 1px 2px 0px #272727',
      width: 40,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
        this.isMobile = window.innerWidth < 450;
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
                return <Home isMobile={this.isMobile} />;
            case '/group-orders':
                return<GroupOrders isMobile={this.isMobile} />
            case '/retail-shop':
                return <UnderConstruction />
            case '/about-us':
                return <AboutUs isMobile={this.isMobile} />
            case '/past-work':
                window.open('https://www.instagram.com/frattybear/?hl=en')
                return <Home isMobile={this.isMobile} />; 
        }
    }

    render() {
        const { classes } = this.props;
        const isMobile = this.isMobile;
        return (
            <div className={classes.root} >
                {!isMobile &&
                  <AppBar position = "static">
                      <Toolbar className={classes.header} >
                          {!isMobile && PAGES.map((tab) => (
                              <div
                                style={{
                                  display: 'flex',
                                  marginLeft: 'auto',
                                  marginRight: -12,

                                }}
                                key={`page-${tab.link}`}
                              >
                                {tab.link === this.state.page}
                                <div
                                    className={`${classes.navText} ${tab.link === this.state.page ? classes.navTextFocus : ''}`}
                                    onClick={tab.label === 'past work' ? () => {window.location.href = "https://www.pinterest.com/klcwholesale/fratty-bear/";} : this.changePage(tab.link)}
                                    style={tab.label === 'fratty bear' ? { fontSize: 40 } : {}}
                                >
                                    {tab.label}
                                </div>
                              </div>
                              ))}
                      </Toolbar>
                  </AppBar>
                }
                {isMobile &&
                  <div
                      onClick={() => {this.setState({ showMenu: true })}}
                      className={classes.mobileMenuButton}
                  >
                      <MenuIcon />
                  </div>
                }
                <div
                    className={classes.drawer}
                    style={{
                        width: this.state.showMenu ? 200 : 0,
                    }}
                >
                    {this.state.showMenu && PAGES.map((page) => (
                        <div
                            onClick={page.label === 'past work' ? () => {window.location.href = "https://www.instagram.com/frattybear/?hl=en";} : this.changePage(page.link)}
                            className={classes.menuText}
                            key={page.label}
                        >
                            {page.label}
                        </div>
                        ))}
                </div>
                {this.state.showMenu &&
                    <div
                        style={{
                            zIndex: 1400,
                            position: 'fixed',
                            left: 0,
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
                {/*This below is the new footer, I just rewrote it using inline styling*/}
                <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      height: FOOTER_HEIGHT,
                      backgroundColor: '#120B61'
                    }}
                >
                  {!isMobile &&
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: isMobile ? 'column' : 'row',
                        fontFamily: 'Arial',
                      }}
                    >
                      <img
                        src={require('./images/FrattyBearDrinkingLogo.png')}
                        style={{
                          height: FOOTER_HEIGHT,
                        }}
                        alt="bear-drinking"
                      />
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <p
                          style={{
                            color: '#fff',
                            WebkitTextStroke: '1px black',
                            fontSize: isMobile ? 26 : 64,
                            fontWeight: 700,
                            letterSpacing: '-2px',
                          }}
                        >
                          Fratty
                        </p>
                        <p
                          style={{
                            color: ORANGE,
                            fontSize: isMobile ? 26 : 64,
                            fontWeight: 700,
                            letterSpacing: '-2px',
                          }}
                        >
                          Bear
                        </p>
                      </div>
                    </div>
                  }
                  <div
                    style={{
                      color: ORANGE,
                      textDecorationLine: 'underline',
                      textDecorationColor: ORANGE,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      flexWrap: 'wrap',
                      width: isMobile ? '100%' : 500,
                      textAlign: isMobile ? 'center' : 'left',
                    }}
                  >
                    <p>Kustom Life Company 2019 <br /> All Rights Reserved</p>
                    {isMobile && <div style={{ height: 20, width: '100%' }} />}
                    <div >
                      <p>contact@frattybear.com</p>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(App);
