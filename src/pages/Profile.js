import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import axios from 'axios';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://pothuraju.vercel.app/user', {
          headers: {
            'Authorization': `${token}`,
          },
        });
        setUserData(response.data);
      } catch (err) {
        console.error('Error fetching user data:', err.response ? err.response.data : err.message);
        setError(err.response ? err.response.data.message : err.message);
      }
    };

    if (token) {
      fetchUserData();
    } else {
      setError('No token found');
    }
  }, [token]);

  return (
    <div>
        <Navbar />
      <h1>Profile</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData ? (
        <div>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Mobile No:</strong> {userData.mobileNo}</p>
          <p><strong>Address:</strong> {userData.address}</p>
        </div>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
