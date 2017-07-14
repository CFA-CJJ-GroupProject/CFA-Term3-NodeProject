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
import CreateCustomerPage from './pages/CreateCustomerPage'
import PrimaryNav from './components/PrimaryNav'
import HomePage from './pages/HomePage'
import SignInForm from './components/SignInForm'
// Importing everything from auth and calling it authapi
import * as authAPI from './api/auth'


class App extends Component {

  // Initial state
  state = {
    error: null,
    token: null,
    // token: savedToken,
    jobs: null, // Null means not loaded yet
  }

  handleSignIn = ({ username, password }) => {
    authAPI.signIn({username, password })
      .then(json => {
        this.setState({ token: json.token })
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    const { error, token, jobs } = this.state


    return (


      <Router>
        <main>
           {
            !!token ? (
              <h1> Welcome to ANT jobs application </h1>
            ) :  (
              <SignInForm onSignIn={ this.handleSignIn } />
            )
          }


        <PrimaryNav />
          <Route path='/' render={
            () => (
              <HomePage/>
            )
          } />

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

          <Route path='/createuser' render={
            () => (
              <CreateUserPage/>
            )
          } />

          <Route path='/users' render={
            () => (
              <UsersPage/>
            )
          } />

          <Route path='/createcustomer' render={
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
