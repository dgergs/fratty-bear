import React from 'react';

const fontSize = 72;
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
    <div style={{display:'flex', flexDirection:'row',}}>
        <p style={fratty}>Fratty</p>
        <p style={bear}>Bear</p>
    </div>
);

export default FrattyBear;