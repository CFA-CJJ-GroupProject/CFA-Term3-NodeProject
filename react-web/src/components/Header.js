import React from 'react'
import Top from './Top'
import PrimaryNav from './PrimaryNav'


export default ({
  role
}) => (
  <div>
  <Top />
  <PrimaryNav role={ role } />
  </div>
)
