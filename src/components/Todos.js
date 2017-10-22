/**
 * Todos component
 */

import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import '../styles/Todos.css';

class Todos extends Component {
  componentDidMount() {
    const { fetching, todos, fetchTodos, token } = this.props;
    if (token && todos.length === 0 && !fetching) {
      fetchTodos(token);
    }
  }

  render() {
    const { fetching, todos, message, token } = this.props;

    if (!token) {
      return (
        <Link to="/login">
          <span>Login</span>
        </Link>
      );
    }

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
