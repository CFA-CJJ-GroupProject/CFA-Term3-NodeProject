import React from 'react'
import {BrowserRouter as Redirect} from 'react-router-dom'

function submitCreateUser(event, onRegister) {
  event.preventDefault()

  const form = event.target
  const username = form.elements['username'].value
  const password = form.elements['password'].value
  onRegister({username, password})

}

export default function CreateUserForm({onRegister}) {
  return (
    <form onSubmit={(event) => submitCreateUser(event, onRegister)}>
      <label>
        <span>
          Username
        </span>
        <input name='username'/>
      </label>
      <label>
        <span>
          Password
        </span>
        <input type='password' name='password'/>
      </label>
      <button>Create User
      </button>
    </form>
  )
}
