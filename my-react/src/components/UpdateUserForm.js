import React, { useState } from 'react';
import axios from 'axios';
import '../styles/App.css';

const UpdateUserForm = ({ user, onUpdate }) => {
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.put(`https://reqres.in/api/users/${user.id}`, {
      first_name: firstName,
      last_name: lastName,
      email: email
    })
    .then((response) => {
      setMessage('User updated successfully!');
      onUpdate(response.data);
    })
    .catch(() => {
      setMessage('Error updating user');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>Update User</button>
        {loading && <p>Updating user...</p>}
        {message && <p className="success">{message}</p>}
      </form>
    </div>
  );
};

export default UpdateUserForm;
