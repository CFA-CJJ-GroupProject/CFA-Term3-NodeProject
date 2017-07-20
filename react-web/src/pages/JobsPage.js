import React, { Component } from 'react'
import JobsList from '../components/JobsList'
import Footer from '../components/Footer'

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
				<Footer />
			</div>
		)
	}
}

export default JobsPage
