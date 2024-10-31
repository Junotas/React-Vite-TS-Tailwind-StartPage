import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

type User = {
  id: number;
  name: string;
};

// the data is fetched from src/assets/users.json
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch(`${import.meta.env.BASE_URL}src/assets/users.json`);
  if (!response.ok) throw new Error('Failed to fetch user data');
  return response.json();
};

export const Route = createFileRoute('/')({
  component: () => {
    const [fetchEnabled, setFetchEnabled] = useState(false);

    const { data: users, isLoading, error } = useQuery<User[], Error>({
      queryKey: ['users'],
      queryFn: fetchUsers,
      enabled: fetchEnabled,
    });

    const toggleFetch = () => {
      setFetchEnabled((prev) => !prev);
    };

    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-purple-50">
        <h2 className="text-3xl font-bold mb-4 text-purple-800">User List</h2>
        <button
          className="bg-purple-500 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-600 transition mb-4"
          onClick={toggleFetch}
        >
          {fetchEnabled ? 'Hide Users' : 'Show Users'}
        </button>

        <div className="w-full max-w-md min-h-[150px] flex justify-center items-center">
          {fetchEnabled && (
            <>
              {isLoading ? (
                <p>Loading users...</p>
              ) : error ? (
                <p className="text-red-500">Error loading users</p>
              ) : (
                <ul className="list-disc list-inside text-center">
                  {users?.map((user) => (
                    <li key={user.id} className="text-lg w-[200px] mx-auto text-left">
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    );
  },
});
