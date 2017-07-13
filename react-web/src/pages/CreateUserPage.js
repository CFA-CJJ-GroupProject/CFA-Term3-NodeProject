import React from 'react'
import CreateUserForm from '../components/CreateUserForm.js'

const CreateUserPage = ({
    onCreateUser
}) => (
    <div>
        <h1>Create User</h1>
        <CreateUserForm onCreate={ onCreateUser } />
    </div>
      )

export default CreateUserPage
