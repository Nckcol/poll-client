import React, {Component} from 'react'
import './App.css'
import {Route, Switch} from 'react-router-dom'

import TestPage from '../TestPage/TestPage'
import HomePage from '../HomePage/HomePage'
import SubjectPage from '../SubjectPage/SubjectPage'
import { AddTestPage } from '../Pages/AddTestPage'

class App extends Component {
  testSubmit(testData) {
    //this.setState({testResult: {}})

  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Polls Project</h1>
        </header>
        <main className='App-container'>
          <Switch>
            <Route 
              path='/' exact 
              component={
                ({match}) => <HomePage match={match} />
              }
              />
            <Route
              path='/subject/:id'
              component={
                ({match}) => <SubjectPage match={match} />
              }
              />
            <Route
              path='/test/new' exact
              component={({match}) => <AddTestPage match={match} />}/>
            <Route
              path='/test/:id'
              component={({match}) => <TestPage match={match} onTestSubmit={this.testSubmit} />}/>
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
