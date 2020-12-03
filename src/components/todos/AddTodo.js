import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    // [e.target.name] helps to set many state parameters. It based on name HTML property :)
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    })

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({
            title: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={formStyle}>
                <input
                    style={inputStyle}
                    type="text"
                    name="title"
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />

                <input
                    style={btnStyle}
                    type="submit"
                    value="Submit" 
                    className="btn"
                />
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
  }

// Styles
const formStyle = {
    display: 'flex'
};

const inputStyle = {
    flex: '10',
    padding: '10px',
    border: '1px solid #ddd'
};

const btnStyle = {
    flex: '1'
};

export default AddTodo
