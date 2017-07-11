import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import CreateJobPage from './pages/CreateJobPage'
import JobsPage from './pages/JobsPage'
import JobConfirmationPage from './pages/JobConfirmationPage'
import JobCard from './pages/JobCard'
import CreateUserPage from './pages/CreateUserPage'
import UsersPage from './pages/UsersPage'


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

          <Route path='/jobs' render={
            () => (
              <JobsPage/>
            )
          } />

          <Route path='/jobconfirmation' render={
            () => (
              <JobConfirmationPage/>
            )
          } />

          <Route path='/jobcard/:id' render={
            () => (
              <JobCard/>
            )
          } />

          <Route path='/creatuser' render={
            () => (
              <CreateUserPage/>
            )
          } />

          <Route path='/userspage' render={
            () => (
              <UsersPage/>
            )
          } />
          
        </main>
      </Router>
    )
  }
}

export default App;
