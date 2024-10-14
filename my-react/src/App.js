import React, { useState } from 'react';
import UsersList from './components/UsersList';
import AddUserForm from './components/AddUserForm';
import UpdateUserForm from './components/UpdateUserForm';
import './styles/App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const handleAdd = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  return (
    <div className="App">
      <UsersList users={users} onEdit={handleEdit} setUsers={setUsers} />
      {editingUser ? (
        <UpdateUserForm user={editingUser} onUpdate={handleUpdate} />
      ) : (
        <AddUserForm onAdd={handleAdd} />
      )}
    </div>
  );
}

export default App;
