import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo';
import About from './components/pages/About';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  state = {
    todos: []
  }

  // Get data from remote 
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res =>  this.setState({todos: res.data})
    )
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    })
  }

  // Add TODO
  addTodo = title => {
    if (!title) {
      alert("You need to enter title!")
      return;
    }

    axios.post('https://jsonplaceholder.typicode.com/todos', {
      id: uuidv4(),
      title,
      completed: false
    }).then(res => {
      this.setState({todos: [...this.state.todos, res.data]});
    })

  }

  // Delete TODO
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => {
      console.log(res)
      this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
    });
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />

          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos
                todos={this.state.todos}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </React.Fragment>
          )} />

          <Route path="/about" component={About} />

        </div>
      </div>
      </Router>
    );
  }
}


export default App;