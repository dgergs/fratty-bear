import React from 'react';

const imageSeries = {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10vh',
}

const image = {
    width: '25vw',
    height: '30vw',
    objectFit: 'cover',
}


class ImageSeries extends React.Component {

    render() {
        return (
            <div style={imageSeries}>
                {this.props.images.map((imagePath) => (
                    <img alt="" src={imagePath} style={image} />
                ))}
            </div>
        );
    }
}

export default ImageSeries;
