import React from 'react'
import CreateUserForm from '../components/CreateUserForm.js'

const CreateUserPage = ({onRegister}) => (
  <div>
    <h1>Create User</h1>
    <CreateUserForm onRegister={onRegister}/>
  </div>
)

export default CreateUserPage
