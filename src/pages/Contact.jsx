import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-base-100 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us 💌</h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-8">
            Have questions, feedback, suggestions, or just want to say hello?
            We'd love to hear from you.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="card bg-base-300 shadow-xl">
            <div className="card-body">
              <h2 className="text-2xl font-bold mb-4">Get in Touch ✨</h2>

              <div className="space-y-5 text-gray-300">
                <div>
                  <p className="font-semibold text-white mb-1">📧 Email</p>

                  <p>support@vibe-match.site</p>
                </div>

                <div>
                  <p className="font-semibold text-white mb-1">🌐 Website</p>

                  <p>www.vibe-match.site</p>
                </div>

                <div>
                  <p className="font-semibold text-white mb-1">
                    ⏰ Support Hours
                  </p>

                  <p>Monday - Friday | 9 AM - 6 PM</p>
                </div>

                <div>
                  <p className="font-semibold text-white mb-1">💖 Community</p>

                  <p>
                    We aim to build a safe and positive space for meaningful
                    connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
