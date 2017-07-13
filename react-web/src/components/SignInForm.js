import React from 'react'

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  color: 'black'
}

function submitSignIn(event, onSignIn) {
  event.preventDefault()
  const form = event.target
  const username = form.elements['username'].value
  const password = form.elements['password'].value
  onSignIn({ username, password})
}

export default function SignInForm({
  onSignIn
}) { 
  return (
    <form 
      onSubmit={  (event) => submitSignIn(event, onSignIn) } 
      style={ formStyle } 
    >
      <label>
        <span> Email </span>
        <input name='username' />
      </label>
      <label>
        <span> Password </span>
        <input type='password' name='password' />
      </label>
      <button>Sign In </button>
    </form> 
  )
}