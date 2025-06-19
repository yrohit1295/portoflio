import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-lg text-gray-400 mb-6">Page not found. The route you entered doesn’t exist.</p>
            <Link
                to="/"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition"
            >
                Go Back Home
            </Link>
        </section>
    );
}

export default NotFound;
