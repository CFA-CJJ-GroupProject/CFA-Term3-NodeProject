import React from 'react'
import CreateCustomerForm from '../components/CreateCustomerForm'

const CreateCustomerPage = ({
    onCreateCustomer
}) => (
    <div>
        <h1>Customer Details</h1>
        <CreateCustomerForm onCreate={ onCreateCustomer } />
    </div>
      )

export default CreateCustomerPage
