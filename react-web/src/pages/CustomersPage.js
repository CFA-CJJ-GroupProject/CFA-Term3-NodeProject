import React, { Component } from 'react'
import CustomersList from '../components/CustomersList'

class CustomersPage extends Component {
	render() {
		const { customers } = this.props
		return (
			<div>
				<h1>ALL HAIL CUSTOMERS</h1>
				{console.log('are there customers?', customers)}
				{console.log('props?', this.props)}
				{
					!!customers ? (
						<CustomersList items={ customers } />
					) : (
						'Loading Customers...'
					)
				}
			</div>
		)
	}
}

export default CustomersPage
