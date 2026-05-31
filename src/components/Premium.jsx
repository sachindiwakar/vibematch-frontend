import React, { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL } from "../utils/constants";

const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    verifyPremiumUser();
  }, []);

  const verifyPremiumUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/payment/verify", {
        withCredentials: true,
      });

      if (res.data.isPremium) {
        setIsUserPremium(true);
      }
    } catch (err) {
      console.error(err?.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBuyClick = async (type) => {
    try {
      const order = await axios.post(
        BASE_URL + "/payment/create",
        {
          membershipType: type,
        },
        {
          withCredentials: true,
        },
      );

      const { payment, keyId, firstName, lastName, email } = order.data;

      const { amount, currency, orderId } = payment;

      const options = {
        key: keyId,

        amount,

        currency,

        name: "VibeMatch",

        description: "Premium Membership",

        order_id: orderId,

        prefill: {
          name: firstName + " " + lastName,

          email,

          contact: "9999999999",
        },

        theme: {
          color: "#ec4899",
        },

        handler: verifyPremiumUser,
      };

      const rzp = new window.Razorpay(options);

      rzp.open();
    } catch (err) {
      console.error(err?.response?.data?.message || "Payment failed");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center my-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (isUserPremium) {
    return (
      <div className="flex justify-center my-20">
        <div className="alert alert-success max-w-md">
          <span>🎉 You are already a Premium Member.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="m-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Upgrade To Premium 💎
      </h1>

      <div className="flex flex-col lg:flex-row w-full gap-6">
        <div className="card bg-base-300 shadow-xl grow">
          <div className="card-body items-center text-center">
            <h1 className="font-bold text-3xl">Silver Membership</h1>

            <h2 className="text-2xl font-bold text-primary">₹300</h2>

            <ul className="space-y-2">
              <li>✓ Chat with connections</li>

              <li>✓ 100 connection requests/day</li>

              <li>✓ Premium Badge</li>

              <li>✓ 3 Months Access</li>
            </ul>

            <button
              onClick={() => handleBuyClick("silver")}
              className="btn btn-secondary mt-4"
            >
              Buy Silver
            </button>
          </div>
        </div>

        <div className="divider lg:divider-horizontal">OR</div>

        <div className="card bg-base-300 shadow-xl grow">
          <div className="card-body items-center text-center">
            <h1 className="font-bold text-3xl">Gold Membership</h1>

            <h2 className="text-2xl font-bold text-warning">₹700</h2>

            <ul className="space-y-2">
              <li>✓ Chat with connections</li>

              <li>✓ Unlimited requests</li>

              <li>✓ Premium Badge</li>

              <li>✓ 6 Months Access</li>
            </ul>

            <button
              onClick={() => handleBuyClick("gold")}
              className="btn btn-primary mt-4"
            >
              Buy Gold
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
