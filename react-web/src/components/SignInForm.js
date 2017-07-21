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
      <div className='cu'>
        <div className='company-name'>
          <h1>ALL<br/>
            NEEDS<br/>
            TRANSPORT</h1>
          </div>
        <Field required='true' type='username' placeholder='Username...' name='username' />
        <Field required='true' type='password' placeholder='Password...' name='password' />
      </div>
      <button type='submit' className='cu-button'>Sign in</button>
    </form>
  )
}
