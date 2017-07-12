import React from 'react'
import CreateJobForm from '../components/CreateJobForm'
import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';


const CreateJobPage = ({
    onCreateJob
}) => (
    <div>
        <h1>Create a Job</h1>
        <CreateJobForm onCreate={ onCreateJob } />
    </div>
      )

export default CreateJobPage
