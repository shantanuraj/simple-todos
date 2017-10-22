/**
 * Connected Todos component
 */

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import Todos from '../components/Todos';

import { fetchTodos } from '../stores/todos';

const mapStateToProps = (state) => ({
  ...state.todos,
  token: state.login.token,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchTodos,
}, dispatch);

const ConnectedTodos = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default ConnectedTodos;
