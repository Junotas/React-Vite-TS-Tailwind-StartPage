import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useUserList } from '../hooks/useUserList';

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
      <div className="flex flex-col justify-center items-center min-h-screen bg-purple-50">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-2xl font-bold text-purple-800">User List</h2>
            <button
              className="bg-purple-500 text-white font-bold py-1 px-4 rounded hover:bg-purple-600 transition"
              onClick={toggleFetch}
            >
              {isModified ? 'Reset List' : 'Fetch List'}
            </button>
          </div>

          <div className="min-h-[150px]">
            {isLoading ? (
              <p>Loading users...</p>
            ) : error ? (
              <p className="text-red-500">Error loading users</p>
            ) : (
              <ul className="list-disc list-inside text-center space-y-2">
                {users.map((user) => (
                  <li key={user.id} className="flex justify-between items-center text-lg">
                    {user.name}
                    <button
                      onClick={() => removeUser(user.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Add new user"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              className="border rounded px-3 py-1 mr-2 w-full"
            />
            <button
              onClick={handleAddUser}
              className="bg-green-500 text-white font-bold py-1 px-4 rounded hover:bg-green-600 transition"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  },
});
