import React, { Component } from 'react'
import UsersList from '../components/UsersList'

class UsersPage extends Component {
	render() {
		const { users } = this.props
		return (
			<div>
				<h1>ALL HAIL USERS</h1>
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
