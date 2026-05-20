import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About VibeMatch 💕
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-8">
            VibeMatch is a modern social connection platform designed to help
            people discover meaningful conversations, genuine connections, and
            real vibes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-base-300 shadow-xl">
            <div className="card-body">
              <div className="text-4xl">✨</div>

              <h2 className="card-title text-xl mt-2">
                Meaningful Connections
              </h2>

              <p className="text-gray-400 leading-7">
                We focus on creating authentic interactions instead of endless
                swiping.
              </p>
            </div>
          </div>

          <div className="card bg-base-300 shadow-xl">
            <div className="card-body">
              <div className="text-4xl">💬</div>

              <h2 className="card-title text-xl mt-2">Real-Time Chat</h2>

              <p className="text-gray-400 leading-7">
                Chat instantly with your matches and build conversations that
                actually matter.
              </p>
            </div>
          </div>

          <div className="card bg-base-300 shadow-xl">
            <div className="card-body">
              <div className="text-4xl">🔒</div>

              <h2 className="card-title text-xl mt-2">Privacy & Safety</h2>

              <p className="text-gray-400 leading-7">
                Your data and conversations stay secure with modern
                authentication and privacy-first architecture.
              </p>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 shadow-xl mt-10">
          <div className="card-body md:p-10">
            <h2 className="text-3xl font-bold mb-4">Our Mission 🚀</h2>

            <p className="text-gray-400 leading-8 text-lg">
              In a world full of noise and shallow interactions, VibeMatch aims
              to create a space where people can connect naturally through
              shared interests, good conversations, and positive energy.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-4">
              Whether it's friendship, networking, collaboration or something
              more. Every great connection starts with the right vibe.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-3">
            Made with ❤️ for meaningful connections.
          </h2>

          <p className="text-gray-500">
            Thank you for being part of the VibeMatch journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
