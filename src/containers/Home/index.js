import React, { Component } from 'react'
import { base } from '../../firebase'
import { Link } from 'react-router'
import './style.scss'

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount () {
    this.ref = base.syncState('todos', {
      context: this,
      state: 'todos',
      asArray: true
    })
  }

  componentWillUnmount () {
    base.removeBinding(this.ref);
  }

  _addTodo (item) {
    this.setState({
      todos: this.state.todos.concat([item])
    });
  }

  _deleteTodo (index) {
    this.setState({
      todos: todoSplice
    })
  }

  render () {

    const todos = this.state.todos.map((item, id) => {
      return (
        <li key={id}>
          {JSON.stringify(item)}
          &nbsp;
          <Link onClick={this._deleteTodo.bind(this, id)}>Delete</Link>
        </li>
      )
    });

    return (
      <div className='home'>
        <h1>Home</h1>
        <Link onClick={this._addTodo.bind(this, 'Name')}>Add</Link>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}

export default Home
