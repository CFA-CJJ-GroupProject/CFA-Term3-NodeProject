import React from 'react'
import CreateUserForm from '../components/CreateUserForm.js'

const CreateUserPage = ({
    onCreateUser
}) => (
    <div>
        <CreateUserForm onCreate={ onCreateUser } />
    </div>
      )

export default CreateUserPage
