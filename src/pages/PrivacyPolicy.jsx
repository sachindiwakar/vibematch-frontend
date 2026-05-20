import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-base-300 rounded-3xl shadow-xl p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Privacy Policy 🔒
        </h1>

        <p className="text-gray-400 leading-8 mb-8 text-center">
          Your privacy matters to us. This Privacy Policy explains how VibeMatch
          collects, uses, and protects your information.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              1. Information We Collect
            </h2>

            <p className="text-gray-400 leading-8">
              We may collect personal information such as your name, email
              address, profile information, interests, photos, and messages to
              provide a better user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. How We Use Your Information
            </h2>

            <p className="text-gray-400 leading-8">
              Your information is used to create and manage your account,
              improve our services, provide matching functionality, enable chat
              features, and maintain platform security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. Data Security</h2>

            <p className="text-gray-400 leading-8">
              We implement modern security practices and authentication systems
              to protect your data. However, no online service can guarantee
              complete security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Account Deletion</h2>

            <p className="text-gray-400 leading-8">
              Users may request account deletion at any time. Once deleted,
              related profile data, chats, requests, and associated information
              may be permanently removed from our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              5. Third-Party Services
            </h2>

            <p className="text-gray-400 leading-8">
              VibeMatch may use trusted third-party services for authentication,
              email delivery, hosting, payments, and analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              6. Changes to This Policy
            </h2>

            <p className="text-gray-400 leading-8">
              We may update this Privacy Policy from time to time. Continued use
              of the platform after updates means you agree to the revised
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>

            <p className="text-gray-400 leading-8">
              If you have questions regarding this Privacy Policy, feel free to
              contact us through the VibeMatch contact page.
            </p>
          </section>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          Last updated: {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
