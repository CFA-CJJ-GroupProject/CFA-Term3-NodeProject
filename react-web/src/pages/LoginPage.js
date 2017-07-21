import React from 'react'
import SignInForm from '../components/SignInForm.js'

const LoginPage = ({loginMaybe}) => (
  <div className='login'>
    <SignInForm onSignIn={loginMaybe}/>
  </div>
)


export default LoginPage
