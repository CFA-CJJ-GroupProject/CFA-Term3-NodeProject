import React, {Component} from 'react'
import CreateJobForm from '../components/CreateJobForm'



class CreateJobPage extends Component {
	state = {
		jobs: null
	}

	handleCreateJob = ({ 
 		jobNumber,
    pickupStreet,
    pickupSuburb,
    pickupPostcode,
    pickupState,
    pickupTime,
    pickupInstructions,
    deliveryStreet,
    deliverySuburb,
    deliveryPostcode,
    deliveryState,
    deliveryTime,
    deliveryInstructions,
    descriptionOfGoods,
    deliveryType
		}) => {
		console.log(jobNumber)
		console.log(pickupStreet)
		console.log(pickupSuburb)
	// Post to /jobsß∂
	fetch('/Jobs', { 
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			jobNumber,
			pickupStreet,
			pickupSuburb,
			pickupPostcode,
			pickupState,
			pickupInstructions,
			deliveryStreet,
			deliverySuburb,
			deliveryPostcode,
			deliveryState,
			deliveryInstructions,
			descriptionOfGoods,
			deliveryType
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
	.then(error => {
		this.setState({ error })
	})
}
  render () {
	return (
    <div>
      <h1>Create Job</h1>
        <CreateJobForm onCreate={ this.handleCreateJob } />
    </div>
      )
		}
}

export default CreateJobPage
