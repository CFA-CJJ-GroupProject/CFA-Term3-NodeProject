import React from 'react'
import CreateCustomerForm from '../components/CreateCustomerForm'
import Footer from '../components/Footer'

const CreateCustomerPage = ({
    onCreateCustomer
}) => (
    <div className='create-customer'>
        <h1>Customer Details</h1>
        <CreateCustomerForm onCreate={ onCreateCustomer } />
        <Footer />
    </div>
      )

export default CreateCustomerPage
