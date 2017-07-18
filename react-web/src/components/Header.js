import React from 'react'
import Top from './Top'
import PrimaryNav from './PrimaryNav'


export default ({
  role,
  resetRedirect,
  handleLogout
}) => (
  <div>
  <Top handleLogout={handleLogout} />
  <PrimaryNav role={ role } />
  </div>
)
