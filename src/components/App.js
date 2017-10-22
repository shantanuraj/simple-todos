import React, { Component } from 'react';

import { Provider } from 'react-redux';

import { Switch, Route } from 'react-router';

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
            <Switch>
              <Route path="/todos" component={ConnectedTodos}/>
              <Route component={ConnectedLogin}/>
            </Switch>
            </div>
          </ConnectedRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
