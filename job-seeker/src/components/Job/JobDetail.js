import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getJobById } from '../../services/jobService';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      const jobData = await getJobById(id);
      setJob(jobData.data);
    };
    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Salary: {job.salary}</p>
      <button>Apply</button>
    </div>
  );
};

export default JobDetail;
