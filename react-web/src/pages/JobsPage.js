import React, { Component } from 'react'
import JobsList from '../components/JobsList'
import Footer from '../components/Footer'

class JobsPage extends Component {
	state = {
		error: null,
		jobs: null
	}

	render() {
		const { jobs } = this.props
		return (
			<div className='jobs'>
				<h1>Jobs</h1>
				{
					!!jobs ? (
						<JobsList items={ jobs } />

					) : (
						'Loading Jobs...'
					)
				}
				<Footer />
			</div>
		)
	}
}

export default JobsPage
