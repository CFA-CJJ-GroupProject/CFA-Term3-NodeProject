import React from 'react'
const LogoutPage = (logout) => (
  <div>
    {sessionStorage.removeItem('token'),
    window.location.reload(true)
}
  </div>
)

export default LogoutPage
