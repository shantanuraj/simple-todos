/**
 * Todos component
 */

import React, { Component } from 'react';

import '../styles/Todos.css';

class Todos extends Component {
  componentDidMount() {
    const { fetching, todos, fetchTodos } = this.props;
    if (todos.length === 0 && !fetching) {
      fetchTodos();
    }
  }

  render() {
    const { fetching, todos, message } = this.props;

    console.log(message, fetching, todos);

    if (message) {
      return <div id="error">Error! {message}</div>
    }

    if (fetching || todos.length === 0) {
      return <div id="loading">Loading...</div>
    }

    return (
      <ul id="todos">
        {todos.map((todo, i) => (
          <li key={i}>
            <span>{todo}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default Todos;
