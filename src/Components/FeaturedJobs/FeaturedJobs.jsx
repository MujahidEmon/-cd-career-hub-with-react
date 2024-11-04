import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4)

    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])

    console.log(jobs)

    return (
        <div>
            <h2 className='font-extrabold text-5xl'>Featured Jobs {jobs.length}</h2>
            <p className='font-medium text-lg'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-6'>
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength===jobs.length && 'hidden'}>
                <button  onClick={() => setDataLength(6)} className=" {dataLength===jobs.length && 'hidden'} btn bg-blue-400 text-white hover:text-black">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;