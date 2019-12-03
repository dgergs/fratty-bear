import React from 'react';

const footerRectangle = {
    backgroundColor: '#14295F',
    color: '#FE6600',
    margin: 0,
    marginTop: 100,
    padding: '20px 40px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: window.innerWidth > 500 ? 'row': 'column',
    flexShrink: 1,
    alignItems: 'center',
};

const imgStyle = {
    height: window.innerWidth > 500 ? '100px': '50px',
}

const footerLeft = {

    width: '25%',
    height: '80%',
    textAlign: window.innerWidth > 500 ? 'left': 'center',
}

const footerCenter = {
    width: window.innerWidth > 500 ? '50%': '80%',
    margin: 0,
}

const footerRight = {
    width: window.innerWidth > 500 ? '25%': '80%',
    textAlign: window.innerWidth > 500 ? 'right': 'center',
    margin: 0,
    textDecoration: 'none',
    color: '#FE6600',
}

const Footer = () => (
    <div style={footerRectangle}>
        <div style={footerLeft}>
            <img alt="" src={require('../images/FrattyBearIcon.png')} style={imgStyle} />
        </div>
        <p style={footerCenter}>Kustom Life Company 2019 © All Rights Reserved</p>
        <a href="mailto:contact@frattybear.com" style={footerRight}><p style={{margin: 0,}}>contact@frattybear.com</p></a>
    </div>
);

export default Footer;