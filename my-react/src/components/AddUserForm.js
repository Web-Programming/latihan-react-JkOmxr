import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = ({ onAdd }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('https://reqres.in/api/users', {
      first_name: firstName,
      last_name: lastName,
      email: email
    })
    .then((response) => {
      setMessage('User added successfully!');
      const newUser = {
        id: Date.now(),
        first_name: firstName,
        last_name: lastName,
        email: email
      };
      onAdd(newUser);
      setFirstName('');
      setLastName('');
      setEmail('');
    })
    .catch(() => {
      setMessage('Error adding user');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>Add User</button>
        {loading && <p>Adding user...</p>}
        {message && <p className="success">{message}</p>}
      </form>
    </div>
  );
};

export default AddUserForm;
