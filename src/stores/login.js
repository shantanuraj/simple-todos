/**
 * Login actions / reducer
 */

import { push } from 'react-router-redux';

const UPDATE_USERNAME = 'UPDATE_USERNAME'

export const updateUsername = (username) => ({
  type: UPDATE_USERNAME,
  username,
})

const UPDATE_PASSWORD = 'UPDATE_PASSWORD'

export const updatePassword = (password) => ({
  type: UPDATE_PASSWORD,
  password,
})

const LOGIN_START = 'LOGIN_START'

const loginStart = () => ({
  type: LOGIN_START,
})

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  token,
})

const LOGIN_FAILURE = 'LOGIN_FAILURE'

const loginFailure = (message) => ({
  type: LOGIN_FAILURE,
  message,
})

export const performLogin = (username, password) => {
  return dispatch => {
    dispatch(loginStart())

    return fetch('http://www.mocky.io/v2/59ecdbab3100009601d24e62')
      .then(res => res.json())
      .then(res => dispatch(loginSuccess(res.token)))
      .then(() => dispatch(push('/todos')))
      .catch(err => dispatch(loginFailure(err.message)))
  }
}

export const login = (state = {
  username: '',
  password: '',
  token: null,
  fetching: false,
  message: null,
}, action) => {
  switch(action.type) {
    case UPDATE_USERNAME:
      return {...state, username: action.username};
    case UPDATE_PASSWORD:
      return {...state, password: action.password};
    case LOGIN_START:
      return {...state, fetching: true};
    case LOGIN_SUCCESS:
      return {...state, fetching: false, token: action.token};
    case LOGIN_FAILURE:
      return {...state, fetching: false, message: action.message};
    default:
      return state;
  }
}
