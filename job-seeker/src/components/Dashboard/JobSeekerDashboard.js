import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getCurrentUser } from '../../services/authService';

const JobSeekerDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const user = getCurrentUser();
      const response = await axios.get(`https://your-api-url.com/applications?userId=${user.id}`);
      setApplications(response.data);
    };

    fetchApplications();
  }, []);

  return (
    <div>
      <h2>Job Applications</h2>
      <ul>
        {applications.map(app => (
          <li key={app.id}>
            <h3>{app.jobTitle}</h3>
            <p>Status: {app.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobSeekerDashboard;
