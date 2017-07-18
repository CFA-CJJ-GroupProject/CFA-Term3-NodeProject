import React from 'react'
import CreateJobPage from '../pages/CreateJobPage'
import JobsPage from '../pages/JobsPage'
import JobConfirmationPage from '../pages/JobConfirmationPage'
import JobCard from '../pages/JobCard'
import CreateUserPage from '../pages/CreateUserPage'
import UsersPage from '../pages/UsersPage'
import CreateCustomerPage from '../pages/CreateCustomerPage'
import HomePage from '../pages/HomePage'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'


export default ({
}) => (

    <nav>

      <ul class='nav'>
        <li><NavLink exact to='/' activeClassName='active'>Dashboard</NavLink></li>
        <li><NavLink to='/Jobs'  activeClassName='active'>Jobs</NavLink></li>
        <li><NavLink to='/createjob'  activeClassName='active'>Create Job</NavLink></li>
      </ul>
    </nav>
)
