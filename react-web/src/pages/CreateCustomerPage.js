import React from 'react'
import CreateCustomerForm from '../components/CreateCustomerForm'
import Footer from '../components/Footer'


const CreateCustomerPage = ({
    onCreateCustomer, id
}) => {
    console.log(id)
    return <div className='create-customer'>
        <h1>Customer Details</h1>
        <CreateCustomerForm id={id} onUpdate={ onCreateCustomer } />
        <Footer />
    </div>
}

export default CreateCustomerPage
