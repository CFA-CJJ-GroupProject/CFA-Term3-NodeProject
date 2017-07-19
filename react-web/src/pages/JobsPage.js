import React, { Component } from 'react'
import JobsList from '../components/JobsList'

class JobsPage extends Component {
	render() {
		const { jobs } = this.props
		return (
			<div>
				<h1>ALL HAIL JOBS</h1>
				{
					!!jobs ? (
						<JobsList items={ jobs } />
					) : (
						'Loading Jobs...'
					)
				}
			</div>
		)
	}
}

export default JobsPage
