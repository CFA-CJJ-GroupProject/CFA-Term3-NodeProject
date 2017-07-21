import React from 'react'
import {Redirect} from 'react-router-dom'
import CreateUserForm from '../components/CreateUserForm.js'
import Footer from '../components/Footer'

const CreateUserPage = ({onRegister, redirect, handleRedirect, payload}) => (redirect
  ? (

    <div><Redirect to={payload.path}/>{handleRedirect()}</div>
  )
  : (
    <div className='create-user'>
      <h1>Create User</h1>
      <CreateUserForm customer={payload.data} onRegister={onRegister}/>
      <Footer/>
    </div>
  ))

export default CreateUserPage
