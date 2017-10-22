/**
 * Redux store
 */

import {
  applyMiddleware,
  compose,
  combineReducers,
  createStore,
} from 'redux';

import thunk from 'redux-thunk';

import { routerReducer, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

import { login } from './login';

import { todos } from './todos';

export const history = createHistory();

const routerMiddleware_ = routerMiddleware(history);

const rootReducer = combineReducers({
  login,
  todos,
  router: routerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(routerMiddleware_, thunk)));
  return store;
}
