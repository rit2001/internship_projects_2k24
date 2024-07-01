import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserProfile, updateUserProfile } from '../../services/authService';

const ProfileEdit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await getUserProfile();
      setName(response.data.name);
      setEmail(response.data.email);
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile({ name, email });
      history.push('/profile');
    } catch (err) {
      console.error('Failed to update profile:', err);
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileEdit;
