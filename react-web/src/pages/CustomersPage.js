import React, { Component } from 'react'
import CustomersList from '../components/CustomersList'
import Footer from '../components/Footer'

class CustomersPage extends Component {
	render() {
		const { customers } = this.props
		return (
			<div className='customers'>
				<h1>Customers</h1>
				{
					!!customers ? (
						<CustomersList items={ customers } />
					) : (
						'Loading Customers...'
					)
				}
				<Footer />
			</div>
		)
	}
}

export default CustomersPage
