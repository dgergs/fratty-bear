import React from 'react';

const footerRectangle = {
    backgroundColor: '#14295F',
    color: '#FE6600',
    margin: 0,
    marginTop: 100,
    height: 100,
    padding: '20px 40px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
};

const imgStyle = {
    height: '100%',
}

const footerLeft = {
    width: '25%',
    height: '80%',
    textAlign: 'left',
}

const footerCenter = {
    width: '50%',
    margin: 0,
}

const footerRight = {
    width: '25%',
    textAlign: 'right',
    margin: 0,
    textDecoration: 'none',
    color: '#FE6600',
}

const Footer = () => (
    <div style={footerRectangle}>
        <div style={footerLeft}>
            <img alt="" src={require('../images/FrattyBearDrinkingLogo.png')} style={imgStyle} />
        </div>
        <p style={footerCenter}>Kustom Life Company 2019 © All Rights Reserved</p>
        <a href="mailto:contact@frattybear.com" style={footerRight}><p style={{margin: 0,}}>contact@frattybear.com</p></a>
    </div>
);

export default Footer;