import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import decodeJWT from 'jwt-decode'
import CreateJobPage from './pages/CreateJobPage'
import JobsPage from './pages/JobsPage'
import CustomersPage from './pages/CustomersPage'
import JobConfirmationPage from './pages/JobConfirmationPage'
import JobCard from './pages/JobCard'
import CreateUserPage from './pages/CreateUserPage'
import UsersPage from './pages/UsersPage'
import CreateCustomerPage from './pages/CreateCustomerPage'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import LogoutPage from './pages/LogoutPage'
import Footer from './components/Footer'
import SignInForm from './components/SignInForm'
import { setAPIToken } from './api/init'

// Importing everything from auth and calling it authapi
import * as authAPI from './api/auth'
import * as usersAPI from './api/users'

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
    role: sessionStorage.getItem('role'),
    users: null
  }

loadPromises = {}

loadUsers = () => {
  if (this.loadPromises.listUsers){
    return
  }
  console.log('911 was a inside job')
  this.loadPromises.listUsers = usersAPI.list()
    .then(users =>{
      this.setState({ users, error: null })
    })
    .catch(error => {
      this.setState({ error })
    })
}



    setToken = (token) => {
      setAPIToken(token)
      this.loadPromises = {}
      if (token) {
        sessionStorage.setItem(tokenKey, token)
      }else{
        sessionStorage.removeItem(tokenKey)
      }
      this.setState({
        token: token
      })
    }

  handleSignIn = ({username, password}) => {
    authAPI.signIn({username, password}).then(json => {
      const tokenPayload = decodeJWT( json.token )
      this.setToken(json.token)
      sessionStorage.setItem('role', tokenPayload.role)

      this.setState({
        token: json.token,
        role: tokenPayload.role
      })
    }).catch(error => {
      this.setState({error})
    })
  }


  handleRegister = ({username, password, role, customerProfile}) => {
    authAPI.register({username, password, role, customerProfile}).then(json => {
      this.setToken(json.token)
      this.setState({
        token: json.token,
        redirect: true
      })
    })
    .catch(error => {
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

  render() {
    const {error, token, jobs, role, redirect} = this.state
    // const userInfo = !!token ? decodeJWT(token) : null
    console.log('UserInfo', token)
    return (

      <Router>
        <main>

          {
            token ? (<Header handleLogout={this.handleLogout} role={ role }  />) : (<Redirect to='/'/>)
          }
          { token ? (
              <Route exact path='/' render={() => (<HomePage />)} />)
            : (<Route exact path='/' render={() => (<LoginPage loginMaybe={this.handleSignIn}/>)} />)
          }

          <Route exact path='/createjob' render={() => (<CreateJobPage/>)}/>

          <Route exact path='/jobs' render={() => (<JobsPage/>)}/>

          <Route exact path='/jobconfirmation' render={() => (<JobConfirmationPage/>)}/>

          <Route exact path='/jobcard/:id' render={() => (<JobCard/>)}/>

          <Route exact path='/createuser' render={() => (<CreateUserPage handleRedirect={this.handleRedirect} redirect={redirect} onRegister={this.handleRegister}/>)}/>

          <Route exact path='/users' render={() => {
            this.loadUsers()

            return(
              <UsersPage users={ this.state.users } />
              )
            }
          }/>

          <Route exact path='/customer' render={() => (<CustomersPage/>)}/>

          <Footer/>
        </main>

      </Router>
    )
  }
}

export default App;
