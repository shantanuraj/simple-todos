/**
 * Connected Login component
 */

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import Login from '../components/Login';

import { performLogin, updateUsername, updatePassword } from '../stores/login';

const mapStateToProps = (state) => state.login;

const mapDispatchToProps = (dispatch) => bindActionCreators({
  performLogin,
  updateUsername,
  updatePassword,
}, dispatch);

const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ConnectedLogin;
