import React, { Component } from 'react'
import CustomersList from '../components/CustomersList'

class CustomersPage extends Component {
	state = {
		error: null,
		customers: null
	}

	componentDidMount() {
		// Asynchronous
		fetch('/customers')
		.then(res => res.json())
		.then(customers => {
			this.setState({customers})
		})
		.catch(error => {
			this.setState({error})
		})
	}

	render() {
		const { error, customers } = this.state
		return (
			<div>
				<h1>ALL CUSTOMERS</h1>
				{ !!error && <p>{ error.message }</p> }
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
