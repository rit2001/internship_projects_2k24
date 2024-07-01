import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../services/authService';
import { Link } from 'react-router-dom';

const ProfileView = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getUserProfile();
      setProfile(response.data);
    };
    fetchProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h2>{profile.name}</h2>
      <p>{profile.email}</p>
      <Link to="/profile/edit">Edit Profile</Link>
    </div>
  );
};

export default ProfileView;
