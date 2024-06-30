import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get('https://your-api-url.com/jobs');
      setJobs(response.data);
    };

    fetchJobs();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(search.toLowerCase()) || 
    job.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search for jobs..." 
        value={search} 
        onChange={handleSearch} 
      />
      <ul>
        {filteredJobs.map(job => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
