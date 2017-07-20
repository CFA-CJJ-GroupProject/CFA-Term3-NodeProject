import React, {Component} from 'react'
import CreateJobForm from '../components/CreateJobForm'
import Footer from '../components/Footer'


class CreateJobPage extends Component {
	state = {
		error: null
	}

	handleCreateJob = ({
 		jobNumber,
    pickupStreet,
    pickupSuburb,
    pickupPostcode,
    pickupState,
		pickupDate,
    pickupTime,
    pickupInstructions,
    deliveryStreet,
    deliverySuburb,
    deliveryPostcode,
    deliveryState,
		deliveryDate,
    deliveryTime,
    deliveryInstructions,
    descriptionOfGoods,
    deliveryType,
		weight,
		height,
		length,
		width
		}) => {

	// Post to /jobsß∂
	fetch('/jobs', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			jobNumber,
			pickupStreet,
			pickupSuburb,
			pickupPostcode,
			pickupDate,
			pickupTime,
			pickupState,
			pickupInstructions,
			deliveryStreet,
			deliverySuburb,
			deliveryPostcode,
			deliveryState,
			deliveryTime,
			deliveryDate,
			deliveryInstructions,
			descriptionOfGoods,
			deliveryType,
			dimensions: {
				weight,
				height,
				length,
				width
			}
		})
	})
	.then(res => res.json())
	.then(newJob => {
		this.setState((prevState) => {
			// Update local state with new job
			return {
				newJob
			}
		})
	})
	.catch(error => {
		this.setState({ error })
	})
}
  render () {
		const { error } = this.state
	return (
    <div className='create-job'>
      <h1>Create Job</h1>
				{ !!error && <p>{ error.message }</p> }
        <CreateJobForm onCreate={ this.handleCreateJob } />
				<Footer />
    </div>
      )
		}
}

export default CreateJobPage
