import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="text-8xl md:text-9xl font-black bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          404
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mt-6">
          Oops... Lost the Vibe 💔
        </h1>

        <p className="text-gray-400 text-lg leading-8 mt-5 max-w-xl mx-auto">
          The page you're looking for doesn't exist, was moved, or maybe the
          vibes just didn't match 😅
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link to="/" className="btn btn-primary px-6">
            🏠 Back Home
          </Link>

          <Link
            to="/login"
            className="btn btn-outline border-pink-500 text-pink-500 hover:bg-pink-500 hover:border-pink-500 hover:text-white transition-all duration-300 px-6"
          >
            💖 Login
          </Link>
        </div>

        <div className="mt-12 text-6xl animate-bounce">💕</div>
      </div>
    </div>
  );
};

export default NotFound;
