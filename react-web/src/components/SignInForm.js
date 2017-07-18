import React from 'react'
import Field from './Field'

function submitSignIn(event, onSignIn) {
  event.preventDefault()

  const form = event.target
  const username = form.elements['username'].value
  const password = form.elements['password'].value
  onSignIn({username, password})
}

export default function SignInForm({onSignIn}) {
  return (
    <form onSubmit={(event) => submitSignIn(event, onSignIn)}>
    <Field required='true' type='username' placeholder='Username...' name='username' />
    <Field required='true' type='password' placeholder='Password...' name='password' />
    <button type='submit' className='sign-in'>Sign in</button>
    </form>
  )
}
