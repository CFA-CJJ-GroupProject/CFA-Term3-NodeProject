import React from 'react'
import { NavLink } from 'react-router-dom'

export default({handleLogout}) => (
  <div className='company-name'>
    <h3>ALL<br/>
      NEEDS<br/>
      TRANSPORT</h3>
      <NavLink onClick={handleLogout} exact to='/' activeClassName='active'><h3>LOG<br/>OUT<br/>NOW</h3></NavLink>
  </div>
)
