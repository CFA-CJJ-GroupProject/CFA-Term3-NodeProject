import React from 'react'
import CreateUserForm from '../components/CreateUserForm'

const CreateUserPage = ({
    onCreateUser
}) => (
    <div>
      <h1>Create a User</h1>
        <CreateUserForm onCreate={ onCreateUser } />
    </div>
      )

export default CreateUserPage
