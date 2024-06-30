import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCurrentUser } from '../../services/authService';

const EmployerDashboard = () => {
  const [jobListings, setJobListings] = useState([]);
  const [newJob, setNewJob] = useState({ title: '', description: '', location: '' });

  useEffect(() => {
    const fetchJobListings = async () => {
      const user = getCurrentUser();
      const response = await axios.get(`https://your-api-url.com/jobs?employerId=${user.id}`);
      setJobListings(response.data);
    };

    fetchJobListings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJob({
      ...newJob,
      [name]: value
    });
  };

  const handlePostJob = async () => {
    const user = getCurrentUser();
    const response = await axios.post(`https://your-api-url.com/jobs`, { ...newJob, employerId: user.id });
    setJobListings([...jobListings, response.data]);
    setNewJob({ title: '', description: '', location: '' });
  };

  return (
    <div>
      <h2>Employer Dashboard</h2>
      <div>
        <h3>Post a New Job</h3>
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={newJob.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newJob.location}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={newJob.description}
          onChange={handleChange}
        ></textarea>
        <button onClick={handlePostJob}>Post Job</button>
      </div>
      <ul>
        {jobListings.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployerDashboard;
