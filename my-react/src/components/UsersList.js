import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = ({ onEdit, users, setUsers }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        setUsers(response.data.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, [setUsers]);

  const handleDelete = (id) => {
    setLoading(true);
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
        setLoading(false);
      })
      .catch(() => {
        setError('Error deleting user');
        setLoading(false);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id} className="user-item">
            {user.first_name} {user.last_name} - {user.email}
            <button onClick={() => onEdit(user)} className="btn-edit">Edit</button>
            <button onClick={() => handleDelete(user.id)} className="btn-delete">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
