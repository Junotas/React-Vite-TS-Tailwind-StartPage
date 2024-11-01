import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useUserList } from '../hooks/useUserList';
import { Button, TextField } from '@mui/material';

export const Route = createFileRoute('/')({
  component: () => {
    const [newUserName, setNewUserName] = useState('');
    const { users, isLoading, error, toggleFetch, addUser, removeUser, isModified } = useUserList();

    const handleAddUser = () => {
      if (newUserName.trim()) {
        addUser(newUserName);
        setNewUserName('');
      }
    };

    return (
      <div className="flex flex-col justify-center items-center min-h-screen" style={{ backgroundColor: '#f3e5f5' }}>
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-2xl font-bold" style={{ color: '#6a1b9a' }}>User List</h2>
            <Button
              variant="contained"
              color="primary"
              onClick={toggleFetch}
              sx={{ fontWeight: 'bold', marginBottom: 2 }}
            >
              {isModified ? 'Reset List' : 'Fetch List'}
            </Button>
          </div>

          <div className="min-h-[150px]">
            {isLoading ? (
              <p>Loading users...</p>
            ) : error ? (
              <p style={{ color: '#d32f2f' }}>Error loading users</p>
            ) : (
              <ul className="list-disc list-inside text-center space-y-2">
                {users.map((user) => (
                  <li key={user.id} className="flex justify-between items-center text-lg">
                    {user.name}
                    <Button
                      onClick={() => removeUser(user.id)}
                      sx={{ color: 'secondary.main' }}
                    >
                      Delete
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center mt-4">
            <TextField
              variant="outlined"
              label="Add new user"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              fullWidth
              sx={{ mr: 2 }}
            />
            <Button
              onClick={handleAddUser}
              variant="contained"
              color="secondary"
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    );
  },
});
