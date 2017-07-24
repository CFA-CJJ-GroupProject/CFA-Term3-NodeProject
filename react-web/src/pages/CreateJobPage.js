import React, {Component} from 'react'
import CreateJobForm from '../components/CreateJobForm'
import Footer from '../components/Footer'
import {Redirect} from 'react-router-dom'


const CreateJobPage = ({onRegister, redirect, handleRedirect, payload, username}) => (redirect
	? (

    <div><Redirect to={payload.path}/>{handleRedirect()}</div>
  )
  : (
    <div className='create-job'>
      <h1>Create a Job</h1>
		{console.log(payload.data)}
      <CreateJobForm job={payload.data} onRegister={onRegister} username={username}/>
      <Footer/>
    </div>
  ))


// 	state = {
// 		error: null
// 	}
//
// 	handleCreateJob = ({
//  		jobNumber,
//     pickupStreet,
//     pickupSuburb,
//     pickupPostcode,
//     pickupState,
// 		pickupDate,
//     pickupTime,
//     pickupInstructions,
//     deliveryStreet,
//     deliverySuburb,
//     deliveryPostcode,
//     deliveryState,
// 		deliveryDate,
//     deliveryTime,
//     deliveryInstructions,
//     descriptionOfGoods,
//     deliveryType,
// 		weight,
// 		height,
// 		length,
// 		width,
// 		businessId,
// 		}) => {
//
// 	// Post to /jobsß∂
// 	fetch('/jobs', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({
// 			jobNumber,
// 			pickupStreet,
// 			pickupSuburb,
// 			pickupPostcode,
// 			pickupDate,
// 			pickupTime,
// 			pickupState,
// 			pickupInstructions,
// 			deliveryStreet,
// 			deliverySuburb,
// 			deliveryPostcode,
// 			deliveryState,
// 			deliveryTime,
// 			deliveryDate,
// 			deliveryInstructions,
// 			descriptionOfGoods,
// 			deliveryType,
// 			businessId,
// 			dimensions: {
// 				weight,
// 				height,
// 				length,
// 				width
// 			}
// 		})
// 	})
// 	.then(res => res.json())
// 	.then(newJob => {
// 		this.setState((prevState) => {
// 			// Update local state with new job
// 			return {
// 				newJob
// 			}
// 		})
// 	})
// 	.catch(error => {
// 		this.setState({ error })
// 	})
// }
//   render () {
// 		const { error, username } = this.state
// 	return (
//     <div className='create-job'>
//       <h1>Create a Job</h1>
// 				{ !!error && <p>{ error.message }</p> }
//         <CreateJobForm onCreate={ this.handleCreateJob } username={ username } />
// 				<Footer />
//     </div>
//       )
// 		}
// }

export default CreateJobPage
