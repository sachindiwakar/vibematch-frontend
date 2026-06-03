import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";

const Premium = () => {
  const dispatch = useDispatch();

  const [isUserPremium, setIsUserPremium] = useState(false);
  const [membershipType, setMembershipType] = useState("");
  const [membershipExpiry, setMembershipExpiry] = useState(null);

  const [loading, setLoading] = useState(true);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

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

        setMembershipType(res.data.membershipType);

        setMembershipExpiry(res.data.membershipExpiry);
      }

      const userRes = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      dispatch(addUser(userRes.data.data));
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

      const options = {
        key: keyId,

        amount: payment.amount,

        currency: payment.currency,

        name: "VibeMatch",

        description: "Premium Membership",

        order_id: payment.orderId,

        prefill: {
          name: firstName + " " + lastName,
          email,
          contact: "9999999999",
        },

        theme: {
          color: "#ec4899",
        },

        handler: async () => {
          await verifyPremiumUser();

          setPaymentSuccess(true);
        },
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
      <div className="flex justify-center items-center m-4 p-4">
        <div className="card bg-base-300 shadow-2xl w-full max-w-2xl">
          <div className="card-body text-center">
            <div className="text-7xl">
              {membershipType === "gold" ? "🥇" : "🥈"}
            </div>

            <h1 className="text-4xl font-bold mt-2">
              {membershipType === "gold"
                ? "Gold Membership"
                : "Silver Membership"}
            </h1>

            <p className="opacity-70">
              Your premium membership is currently active.
            </p>

            <div className="badge badge-success badge-lg mt-2">Active</div>

            <div className="stats shadow bg-base-200 mt-6">
              <div className="stat">
                <div className="stat-title">Membership</div>

                <div className="stat-value text-xl">
                  {membershipType === "gold" ? "Gold" : "Silver"}
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Valid Until</div>

                <div className="stat-value text-xl">
                  {membershipExpiry
                    ? new Date(membershipExpiry).toLocaleDateString()
                    : "-"}
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="text-left mx-auto">
              {membershipType === "gold" ? (
                <ul className="space-y-2">
                  <li>✓ Premium Badge</li>
                  <li>✓ Maximum Profile Visibility</li>
                  <li>✓ Better Match Discovery</li>
                  <li>✓ Featured Profile Placement</li>
                  <li>✓ Fast-Track Customer Support</li>
                  <li>✓ 6 Months Access</li>
                </ul>
              ) : (
                <ul className="space-y-2">
                  <li>✓ Premium Badge</li>
                  <li>✓ Increased Profile Visibility</li>
                  <li>✓ Priority Customer Support</li>
                  <li>✓ 3 Months Access</li>
                </ul>
              )}
            </div>

            <div className="divider"></div>

            <p className="text-success font-semibold">
              🎉 Thank you for supporting VibeMatch.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="m-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Upgrade To Premium 💎
      </h1>

      {paymentSuccess && (
        <div className="alert alert-success max-w-2xl mx-auto mb-6">
          <span>🎉 Premium Membership Activated Successfully!</span>
        </div>
      )}

      <div className="flex flex-col lg:flex-row w-full gap-6">
        <div className="card bg-base-300 shadow-xl grow">
          <div className="card-body items-center text-center">
            <h1 className="font-bold text-3xl">Silver Membership</h1>

            <h2 className="text-2xl font-bold text-primary">₹300</h2>

            <ul className="space-y-2">
              <li>✓ Premium Badge</li>
              <li>✓ Increased Profile Visibility</li>
              <li>✓ Priority Customer Support</li>
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

        <div className="card bg-base-300 shadow-xl grow border border-warning/30">
          <div className="card-body items-center text-center">
            <div className="badge badge-warning badge-lg">MOST POPULAR</div>

            <h1 className="font-bold text-3xl">Gold Membership</h1>

            <h2 className="text-2xl font-bold text-warning">₹700</h2>

            <ul className="space-y-2">
              <li>✓ Premium Badge</li>
              <li>✓ Maximum Profile Visibility</li>
              <li>✓ Better Match Discovery</li>
              <li>✓ Featured Profile Placement</li>
              <li>✓ Fast-Track Customer Support</li>
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
