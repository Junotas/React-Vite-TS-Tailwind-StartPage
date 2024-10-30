import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: () => {
    const [message, setMessage] = useState("We're just getting started!");

    const toggleMessage = () => {
      setMessage((prevMessage) =>
        prevMessage === "We're just getting started!"
          ? "Stay tuned for more cool stuff!"
          : "We're just getting started!"
      );
    };

    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-purple-50">
        <h1 className="text-5xl font-extrabold text-purple-600 mb-8">About Us</h1>

        <div className="flex justify-center space-x-12 mb-8">
          <img src={viteLogo} className="h-32 animate-spin-slow" alt="Vite logo" />
          <img src={reactLogo} className="h-32 animate-pulse" alt="React logo" />
        </div>

        <p className="text-2xl text-center mb-6 max-w-lg">
          We’re two logos on a mission to make web development fun, fast, and accessible to everyone.
          Whether you're new or a pro, we're here to keep things smooth and stylish.
        </p>

        <button
          className="bg-purple-500 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-600 transition"
          onClick={toggleMessage}
        >
          Click for a Surprise!
        </button>

        <p className="mt-4 text-xl text-purple-700">{message}</p>
      </div>
    );
  },
});