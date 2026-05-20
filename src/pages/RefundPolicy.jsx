import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-base-100 px-4 py-10">
      <div className="max-w-5xl mx-auto bg-base-300 rounded-3xl shadow-xl p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Refund Policy 💳
        </h1>

        <p className="text-gray-400 leading-8 mb-8 text-center">
          This Refund Policy explains the terms related to payments,
          subscriptions, and refund eligibility on VibeMatch.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Digital Services</h2>

            <p className="text-gray-400 leading-8">
              VibeMatch provides digital services and membership-based features.
              Once a digital service or membership is activated, it may not be
              eligible for a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              2. Refund Eligibility
            </h2>

            <p className="text-gray-400 leading-8">
              Refunds may be considered in special situations such as duplicate
              payments, accidental charges, or technical issues directly caused
              by the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              3. Non-Refundable Situations
            </h2>

            <p className="text-gray-400 leading-8">
              Refunds may not be provided for dissatisfaction based on personal
              expectations, inactivity, or violations of platform policies and
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">
              4. Requesting a Refund
            </h2>

            <p className="text-gray-400 leading-8">
              Users can contact the VibeMatch support team with payment details
              and the reason for the refund request. Each request is reviewed on
              a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Processing Time</h2>

            <p className="text-gray-400 leading-8">
              Approved refunds may take several business days to reflect in your
              bank account or original payment method depending on the payment
              provider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Policy Updates</h2>

            <p className="text-gray-400 leading-8">
              VibeMatch reserves the right to modify this Refund Policy at any
              time. Continued use of the platform after updates means you agree
              to the revised policy.
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

export default RefundPolicy;
