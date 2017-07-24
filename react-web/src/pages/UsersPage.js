import React, { Component } from 'react'
import UsersList from '../components/UsersList'
import Footer from '../components/Footer'

class UsersPage extends Component {
	render() {
		const { users } = this.props
		return (
			<div className='users'>
				<h1>Users</h1>
				{
					!!users ? (
						<UsersList items={ users } />
					) : (
						'Loading Users...'
					)
				}
				<Footer />
			</div>
		)
	}
}

export default UsersPage
