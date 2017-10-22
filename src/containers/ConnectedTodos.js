/**
 * Connected Todos component
 */

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import Todos from '../components/Todos';

import { fetchTodos } from '../stores/todos';

const mapStateToProps = (state) => state.todos;

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTodos,
}, dispatch);

const ConnectedTodos = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default ConnectedTodos;
