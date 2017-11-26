import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'

import TestPage from '../TestPage/TestPage'
import HomePage from '../HomePage/HomePage'
import SubjectPage from '../SubjectPage/SubjectPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Polls Project</h1>
        </header>
        <main className="App-container">
          <Switch>
            <Route exact path='/' component={({match}) => <HomePage match={match} />} />
            <Route path='/subject/:id' component={({match}) => <SubjectPage match={match} />} />
            <Route path='/test/:id' component={({match}) => <TestPage match={match} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
