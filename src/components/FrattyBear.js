import React from 'react';

const fontSize = window.innerWidth > 500 ? 72: 64;
const fontWeight = 700;

const fratty = {
    color: '#fff',
    WebkitTextStroke: '1px black',
    fontSize: fontSize,
    fontWeight: fontWeight,
    letterSpacing: '-2px',
}

const bear = {
    color: '#FE6600',
    fontSize: fontSize,
    fontWeight: fontWeight,
    letterSpacing: '-2px',
}

const style = {
    display:'flex', 
    flexDirection:'row', 
    marginTop: window.innerWidth > 500 ? '20px' : '0',
}

const FrattyBear = () => (
    <div style={style}>
        <p style={fratty}>Fratty</p>
        <p style={bear}>Bear</p>
    </div>
);

export default FrattyBear;