import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import decodeJWT from 'jwt-decode'
import CreateJobPage from './pages/CreateJobPage'
import JobsPage from './pages/JobsPage'
import CustomersPage from './pages/CustomersPage'
import JobConfirmationPage from './pages/JobConfirmationPage'
import JobCard from './pages/JobCard'
import CreateUserPage from './pages/CreateUserPage'
import CreateCustomerPage from './pages/CreateCustomerPage'

import UsersPage from './pages/UsersPage'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import {setAPIToken} from './api/init'
import './style.css'


// Importing everything from auth and calling it authapi
import * as authAPI from './api/auth'
import * as usersAPI from './api/users'
import * as jobsAPI from './api/jobs'
import * as customersAPI from './api/customers'

const tokenKey = 'userToken'

const savedToken = sessionStorage.getItem(tokenKey)
setAPIToken(savedToken)
class App extends Component {

  // Initial state
  state = {
    error: null,
    token: sessionStorage.getItem(tokenKey),
    // token: savedToken,
    jobs: null, // Null means not loaded yet
    redirect: null,
    users: null,
    customers: null,
    payload: {
      path: null,
      data: null
    }
  }

  loadPromises = {}

  loadUsers = () => {
    if (this.loadPromises.listUsers) {
      return
    }
    this.loadPromises.listUsers = usersAPI.list().then(users => {
      this.setState({users, error: null})
    }).catch(error => {
      this.setState({error})
    })
  }

  loadJobs = () => {
    let username = this.state.username
    let role = this.state.role
    if (this.loadPromises.listJobs) {
      return
    }
    this.loadPromises.listJobs = jobsAPI.list(username, role).then(jobs => {
      this.setState({jobs, error: null})
    }).catch(error => {
      this.setState({error})
    })
  }

  loadCustomers = () => {
    if (this.loadPromises.listCustomers) {
      return
    }
    this.loadPromises.listCustomers = customersAPI.list().then(customers => {
      this.setState({customers, error: null})
    }).catch(error => {
      this.setState({error})
    })
  }

  setToken = (token) => {
    setAPIToken(token)
    this.loadPromises = {}
    if (token) {
      sessionStorage.setItem(tokenKey, token)
    } else {
      sessionStorage.removeItem(tokenKey)
    }
    this.setState({token: token})
  }

  handleSignIn = ({username, password}) => {
    authAPI.signIn({username, password}).then(json => {
      const tokenPayload = decodeJWT(json.token)
      this.setToken(json.token)
    }).catch(error => {
      this.setState({error})
    })
  }

  handleRegister = ({username, password, role, customerProfile}) => {
    authAPI.register({username, password, role, customerProfile}).then(json => {
      this.setToken(json.token)
      this.setState({token: json.token, redirect: true})
    }).catch(error => {
      this.setState({error})
    })
  }

  handleRedirect = () => {
    this.setState((prevState) => {
      return {
        redirect: !prevState.redirect
      }
    })
  }

  handleLogout = () => {
    this.setToken(null)
  }

  handleCreateUser = (user) => {
    usersAPI.postUser(user)
      .then(result => {
        this.setState({ redirect: true, payload: result.payload})
      })
      .catch(error => {
        this.setState({ error })
      })
  }

    handleCreateCustomer = (customer, id) => {
    customersAPI.postCustomer(customer, id)
      .then(result => {
        this.setState({ redirect: true, payload: result.payload})
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  handleCreateJob = (job) => {
    jobsAPI.postJob(job)
      .then(result => {
        this.setState({ redirect: true, payload: result.payload})
      })
      .catch(error => {
        this.setState({ error })
      })
  }

  render() {
    const {error, token, redirect} = this.state
    let username, role;
    if (!!token) {
      const tokenPayload = decodeJWT(token)
      role = tokenPayload.role
      username = tokenPayload.username
    }
    return (
      <Router>
        <main>
          {
            token ? (<Header handleLogout={this.handleLogout} role={ role } username={username}  />) : (<Redirect to='/'/>)
          }
          { token ? (
              <Route exact path='/' render={() => (<HomePage />)} />)
            : (<Route exact path='/' render={() => (<LoginPage loginMaybe={this.handleSignIn}/>)} />)
          }

          <Route exact path='/jobconfirmation' render={() => (<JobConfirmationPage/>)}/>

          <Route exact path='/users/new' render={() => (
            <CreateUserPage payload={this.state.payload} handleRedirect={this.handleRedirect} redirect={redirect} onRegister={this.handleCreateUser}/>
          )}/>

          <Route exact path='/users' render={() => {
            this.loadUsers()
            return (<UsersPage users={this.state.users}/>)
          }}/>
          <Route exact path='/jobs' render={() => {
            this.loadJobs()
            return (<JobsPage jobs={this.state.jobs} role={ role } username={username}/>)
          }}/>
          <Route exact path='/jobs/new' render={() => (
            <CreateJobPage payload={this.state.payload} handleRedirect={this.handleRedirect} redirect={redirect} onRegister={this.handleCreateJob}/>
          )}/>

          <Route exact path='/customers' render={() => {
            this.loadCustomers()
            return (<CustomersPage customers={this.state.customers}/>)
          }}/>

          <Route exact path='/customers/:id' render={({match}) => {
            console.log(match.params)
            return <CreateCustomerPage onCreateCustomer={this.handleCreateCustomer} id={match.params.id}/>
          }}/>
          <Route exact path='/jobs/:id/update' render={() => (<CreateJobPage payload={this.state.payload} handleRedirect={this.handleRedirect} redirect={redirect} onRegister={this.handleCreateJob}/>)}/>


        </main>

      </Router>
    )
  }
}

export default App;
