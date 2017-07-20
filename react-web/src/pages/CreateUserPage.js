import React from 'react'
import {Redirect} from 'react-router-dom'
import CreateUserForm from '../components/CreateUserForm.js'
import Footer from '../components/Footer'

const CreateUserPage = ({onRegister, redirect, handleRedirect}) => (

  redirect ? (<div><Redirect to='/createcustomer' />{handleRedirect()}</div>) :
  (<div className='create-user'>
    <h1>Create a User</h1>
    <CreateUserForm onRegister={onRegister}/>
    <Footer />
  </div>)
)

export default CreateUserPage
