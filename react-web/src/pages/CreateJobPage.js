import React from 'react'
import CreateJobForm from '../components/CreateJobForm'

const CreateJobPage = ({
    onCreateJob
}) => (
    <div>
      <h1>Create Job</h1>
        <CreateJobForm onCreate={ onCreateJob } />
    </div>
      )

export default CreateJobPage
