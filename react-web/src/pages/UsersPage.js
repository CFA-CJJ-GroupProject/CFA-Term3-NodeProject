import React, { Component } from 'react'
import UsersList from '../components/UsersList'

class UsersPage extends Component {
	state = {
		error: null,
		users: null
	}

	componentDidMount() {
		// Asynchronous
		fetch('/users')
		.then(res => res.json())
		.then(users => {
			this.setState({users})
		})
		.catch(error => {
			this.setState({error})
		})
	}

	render() {
		const { error, users } = this.state
		return (
			<div>
				<h1>ALL HAIL USERS</h1>
				{ !!error && <p>{ error.message }</p> }
				{
					!!users ? (
						<UsersList items={ users } />
					) : (
						'Loading Users...'
					)
				}
			</div>
		)
	}
}

export default UsersPage
