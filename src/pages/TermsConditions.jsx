import React from "react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-base-300 rounded-3xl shadow-xl p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Terms & Conditions 📜
        </h1>

        <p className="text-gray-400 leading-8 mb-8 text-center">
          By accessing or using VibeMatch, you agree to comply with these Terms
          & Conditions.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>

            <p className="text-gray-400 leading-8">
              By creating an account or using VibeMatch, you confirm that you
              agree to these Terms & Conditions and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. User Responsibilities
            </h2>

            <p className="text-gray-400 leading-8">
              Users are responsible for maintaining respectful behavior,
              providing accurate information, and ensuring that their activities
              on the platform comply with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. Prohibited Activities
            </h2>

            <p className="text-gray-400 leading-8">
              Harassment, abusive behavior, fake profiles, spam, fraudulent
              activity, unauthorized advertising, and misuse of the platform are
              strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              4. Account Suspension or Removal
            </h2>

            <p className="text-gray-400 leading-8">
              VibeMatch reserves the right to suspend or terminate accounts that
              violate platform policies or create safety concerns for other
              users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              5. Intellectual Property
            </h2>

            <p className="text-gray-400 leading-8">
              All branding, logos, platform design, and related content are the
              property of VibeMatch and may not be copied or redistributed
              without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              6. Limitation of Liability
            </h2>

            <p className="text-gray-400 leading-8">
              VibeMatch is provided on an "as-is" basis. We are not responsible
              for user-generated content, personal interactions, or outcomes
              resulting from connections made through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Changes to Terms</h2>

            <p className="text-gray-400 leading-8">
              These Terms & Conditions may be updated periodically. Continued
              use of the platform after updates indicates acceptance of the
              revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              8. Contact Information
            </h2>

            <p className="text-gray-400 leading-8">
              For questions related to these Terms & Conditions, users may reach
              out through the VibeMatch contact page.
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

export default TermsConditions;
