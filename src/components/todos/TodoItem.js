import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px solid #ddd',
      textDecoration: this.props.todo.completed
        ? 'line-through'
        : 'none'
    }
  }

  render() {

    const {id, title} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input id={'item-' + id} type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
        <label htmlFor={'item-' + id}> {title}</label>
        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
      </div>
    )
  }

}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

// Style

const btnStyle = {
  background: '#f00',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export default TodoItem
