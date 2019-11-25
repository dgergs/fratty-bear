import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        alignSelf: 'center',
        paddingTop: 40,
        paddingBottom: 40,
        background: 'linear-gradient(white, rgb(224, 22, 43, 0.1), white)'
    },
    form: {
        display: 'flex',
        width: '80%',
        flexDirection: 'column',
    },
    image: {
        width: 400,
        marginRight: 20,
        marginLeft: 20,
        alignSelf: 'center',
        boxShadow: '0px 5px 15px #aaa',
        flex: 6
    },
    infoContainer: {
        width: 700,
        display: 'flex',
        flexDirection: 'column',
        marginRight: 20,
        justifyContent: 'space-between',
        flex: 5
    },
    infoText: {
        fontSize: 27,
    },
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Phone Number:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

function Contact(props) {

    const { classes } = props;
    return (
        <div className={classes.root} >
            <div className={classes.form}>
                <NameForm />
            </div>
        </div>
    );
}

export default withStyles(styles)(Contact);