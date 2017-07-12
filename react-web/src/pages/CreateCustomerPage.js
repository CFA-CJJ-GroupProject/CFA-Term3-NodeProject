import React from 'react'
import CreateCustomerForm from '../components/CreateCustomerForm'

const CreateCustomerPage = ({
    onCreateCustomer
}) => (
    <div>
        <CreateCustomerForm onCreate={ onCreateCustomer } />
    </div>
      )

export default CreateCustomerPage
