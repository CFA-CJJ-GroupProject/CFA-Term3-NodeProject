import React from 'react'
import CreateCustomerForm from '../components/CreateCustomerForm'
import Footer from '../components/Footer'

const CreateCustomerPage = ({onCreateCustomer, id, customer}) => {
  console.log("customer", customer)
  return <div className='create-customer'>
    <h1>Customer Details</h1>
    {
      !!customer ? (
        <CreateCustomerForm id={id} onUpdate={onCreateCustomer} customer={customer}/>
      ) : (
        <p>Loading…</p>
      )
    }
    <Footer/>
  </div>
}

export default CreateCustomerPage
