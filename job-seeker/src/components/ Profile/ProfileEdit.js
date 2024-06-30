import React, { useState, useEffect } from 'react';
import { getCurrentUser, updateUser } from '../../services/authService';

const ProfileEdit = ({ history }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user);
      history.push('/profile');
    } catch (err) {
      setError('Failed to update profile');
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="role"
          value={user.role}
          onChange={handleChange}
          placeholder="Role"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileEdit;
