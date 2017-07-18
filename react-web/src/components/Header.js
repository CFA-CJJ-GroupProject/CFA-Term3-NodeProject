import React from 'react'
import Top from './Top'
import PrimaryNav from './PrimaryNav'


export default ({
  resetRedirect,
  handleLogout
}) => (
  <div>
  <Top handleLogout={handleLogout} />
  <PrimaryNav />
  </div>
)
