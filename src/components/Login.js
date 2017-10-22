/**
 * Login component
 */

import React from 'react'

import '../styles/Login.css';

const Login = ({
  username,
  password,
  fetching,
  message,
  token,
  performLogin,
  updateUsername,
  updatePassword,
}) => {
  if (message) {
    return <div id="error">Error! {message}</div>
  }

  if (fetching || token) {
    return <div id="loading">Loading....</div>
  }

  return (
    <div id="login">
      <div>
        <input placeholder="Enter username" id="username" type="text" value={username} onChange={e => updateUsername(e.target.value)} />
      </div>
      <div>
        <input placeholder="Enter passowrd" id="passowrd" type="password" value={password} onChange={e => updatePassword(e.target.value)} />
      </div>
      <button onClick={performLogin}>Login</button>
    </div>
  );
};

export default Login;
