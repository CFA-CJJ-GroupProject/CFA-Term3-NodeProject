import React from 'react'
import SignInForm from '../components/SignInForm.js'

const LoginPage = ({loginMaybe}) => (
  <div className='login'>
    <h1>Login</h1>
    <SignInForm onSignIn={loginMaybe}/>
  </div>
)


export default LoginPage
