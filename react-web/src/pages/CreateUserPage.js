import React from 'react'
import {Redirect} from 'react-router-dom'
import CreateUserForm from '../components/CreateUserForm.js'

const CreateUserPage = ({onRegister, redirect, handleRedirect}) => (

  redirect ? (<div><Redirect to='/createcustomer' />{handleRedirect()}</div>) :
  (<div>
    <h1>Create User</h1>
    <CreateUserForm onRegister={onRegister}/>
  </div>)
)

export default CreateUserPage
