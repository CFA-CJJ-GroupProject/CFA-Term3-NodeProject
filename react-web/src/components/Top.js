import React from 'react'
import {NavLink} from 'react-router-dom'

export default({handleLogout, username}) => (
  <div className='company-name'>
    <div>
      <h3>ALL<br/>
        NEEDS<br/>
        TRANSPORT</h3>
    </div>
    <div className='logout'>
      <NavLink onClick={handleLogout} exact to='/' activeClassName='active'>
        <h3>LOG<br/>OUT</h3>
      </NavLink>
      <h4>{username}</h4>
    </div>
  </div>

)
