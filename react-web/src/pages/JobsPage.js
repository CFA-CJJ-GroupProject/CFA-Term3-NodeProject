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
		const role = this.props.role
		const username = this.props.username
		var string = role.toLowerCase();

	  if ( string === 'office') {
			fetch("/jobs")
			.then(res => res.json())
			.then(jobs => {
				this.setState({jobs})
			})
			.catch(error => {
				this.setState({error})
			})
	  }

	  else
			fetch("/driverjobs/"+username)
			.then(res => res.json())
			.then(jobs => {
				this.setState({jobs})
			})
			.catch(error => {
				this.setState({error})
			})
		}

	render() {
		const { jobs } = this.props
		return (
			<div className='jobs'>
				<h1>Jobs</h1>
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
