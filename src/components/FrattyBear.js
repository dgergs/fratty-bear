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

const FrattyBear = () => (
    <div style={{display:'flex', flexDirection:'row', marginTop:'200px'}}>
        <p style={fratty}>Fratty</p>
        <p style={bear}>Bear</p>
    </div>
);

export default FrattyBear;