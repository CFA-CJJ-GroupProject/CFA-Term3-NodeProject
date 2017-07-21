import React from 'react'
import {NavLink} from 'react-router-dom'

export default({handleLogout, username}) => (
  <div className='top'>
    <div className='company-name'>
      <h3>ALL<br/>
        NEEDS<br/>
        TRANSPORT</h3>
      </div>
      <div className='links'>
        <NavLink onClick={handleLogout} exact to='/' activeClassName='active'>
          <h4>Log out</h4>
        </NavLink>
        <p>{username}</p>
      </div>
</div>



)
