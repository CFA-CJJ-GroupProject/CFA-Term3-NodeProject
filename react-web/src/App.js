import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import CreateJobPage from './pages/CreateJobPage'
import JobsPage from './pages/JobsPage'
import JobConfirmationPage from './pages/JobConfirmationPage'
import JobCard from './pages/JobCard'
import CreateUserPage from './pages/CreateUserPage'
import UsersPage from './pages/UsersPage'
import CreateCustomerPage from './pages/CreateCustomerPage'
import PrimaryNav from './components/PrimaryNav'
import HomePage from './pages/HomePage'


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
        <PrimaryNav />
          <Route exact path='/' render={
            () => (
              <HomePage/>
            )
          } />

          <Route exact path='/createjob' render={
            () => (
              <CreateJobPage/>
            )
          } />

          <Route exact path='/jobs' render={
            () => (
              <JobsPage/>
            )
          } />

          <Route exact path='/jobconfirmation' render={
            () => (
              <JobConfirmationPage/>
            )
          } />

          <Route exact path='/jobcard/:id' render={
            () => (
              <JobCard/>
            )
          } />

          <Route exact path='/createuser' render={
            () => (
              <CreateUserPage/>
            )
          } />

          <Route exact path='/users' render={
            () => (
              <UsersPage/>
            )
          } />

          <Route exact path='/createcustomer' render={
            () => (
              <CreateCustomerPage/>
            )
          } />

        </main>
      </Router>
    )
  }
}

export default App;
