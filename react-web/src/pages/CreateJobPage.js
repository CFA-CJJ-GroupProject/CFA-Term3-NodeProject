import React from 'react'
import CreateJobForm from '../components/CreateJobForm'

const CreateJobPage = ({
    onCreateJob
}) => (
    <div>
        <CreateJobForm onCreate={ onCreateJob } />
    </div>
      )

export default CreateJobPage
