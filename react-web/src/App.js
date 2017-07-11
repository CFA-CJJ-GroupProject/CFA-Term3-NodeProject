import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import CreateJobPage from './pages/CreateJobPage'

class App extends Component {

  // Initial state
  state = {
    error: null,
    // token: savedToken,
    jobs: null, // Null means not loaded yet
  }

  render() {
    const { error } = this.state


    return (
      <Router>
        <main>



            <Route path='/createjob' render={
              () => (
                <CreateJobPage/>
              )
            } />

        </main>
      </Router>
    )
  }
}

export default App;
