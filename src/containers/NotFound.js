import React from 'react';

const container = {
    height: '70vh',
    textAlign: 'center',
    paddingTop: '20vh',
}

class NotFound extends React.Component {
    render() {
        return (
            <div style={container}>
                <h1 style={{fontSize: 96,}}>404</h1>
                <p>Can't find the page you're looking for...</p>
            </div>
        );
    }
}

export default NotFound;