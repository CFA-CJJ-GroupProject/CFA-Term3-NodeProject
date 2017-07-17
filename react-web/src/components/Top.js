import React from 'react'
import { NavLink } from 'react-router-dom'

export default({}) => (
  <div className='company-name'>
    <h3>ALL<br/>
      NEEDS<br/>
      TRANSPORT</h3>
      <NavLink exact to='/logout' activeClassName='active'><h3>LOG<br/>OUT<br/>NOW</h3></NavLink>


  </div>
)
