import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: () => {
    const [count, setCount] = useState(0);

    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
        <div className="flex justify-center space-x-12 my-16">
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="h-48" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="h-48" alt="React logo" />
          </a>
        </div>
        <div className="card text-center p-10 border-4 border-gray-300 rounded-lg shadow-xl">
          <button
            className="bg-blue-500 text-white text-2xl font-bold py-4 px-8 rounded-lg hover:bg-blue-600 transition"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>
      </div>
    );
  },
});
