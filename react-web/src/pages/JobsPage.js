import React, { Component } from 'react'
import JobsList from '../components/JobsList'
import Footer from '../components/Footer'

class JobsPage extends Component {
	state = {
		error: null,
		jobs: null
	}

	componentDidMount() {
		// Asynchronous
		fetch('/jobs')
		.then(res => res.json())
		.then(jobs => {
			this.setState({jobs})
		})
		.catch(error => {
			this.setState({error})
		})
	}

	render() {
		const { error, jobs } = this.state
		return (
			<div className='jobs'>
				<h1>ALL JOBS</h1>
				{ !!error && <p>{ error.message }</p> }
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
