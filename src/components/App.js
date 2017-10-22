import React, { Component } from 'react';

import { Provider } from 'react-redux';

import { Route } from 'react-router';

import { ConnectedRouter } from 'react-router-redux';

import configureStore, { history } from '../stores';

import ConnectedLogin from '../containers/ConnectedLogin';
import ConnectedTodos from '../containers/ConnectedTodos';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <div id="app">
          <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={ConnectedLogin}/>
              <Route exact path="/todos" component={ConnectedTodos}/>
            </div>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
