import React from 'react'
import JobsList from '../components/JobsList'

const JobsPage = () => (
    <div>
        <h1>ALL JOBS</h1>
        <JobsList items={
            [
							{ _id: 'abc', jobNumber: 'HEllo World'},
							{ _id: 'defg', jobNumber: 'Goodbye World'}

            ]
        } />
    </div>
      )

export default JobsPage
