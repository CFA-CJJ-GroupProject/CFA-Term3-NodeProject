import React from 'react'
import Top from './Top'
import PrimaryNav from './PrimaryNav'


export default ({
  role,
  resetRedirect,
  username,
  handleLogout
}) => (
  <div>
  <Top handleLogout={handleLogout} username={username} />
  <PrimaryNav role={ role } />

  </div>
)
