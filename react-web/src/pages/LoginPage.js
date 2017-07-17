import React from 'react'
import SignInForm from '../components/SignInForm.js'

const LoginPage = ({loginMaybe}) => (
  <div>
    <h1>P A R T Y</h1>
    <SignInForm onSignIn={loginMaybe}/>
  </div>
)

export default LoginPage
