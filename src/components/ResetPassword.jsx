import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useNavigate, useSearchParams } from "react-router";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!token) {
      setToast({
        type: "error",
        message: "Invalid or missing reset token",
      });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    if (!newPassword) {
      setToast({
        type: "error",
        message: "Please enter a new password",
      });
      setTimeout(() => setToast(null), 3000);
      return;
    }

    try {
      setLoading(true);

      const res = await axios.patch(BASE_URL + "/auth/reset-password", {
        token,
        newPassword,
      });

      setToast({
        type: "success",
        message: res.data.message || "Password reset successful",
      });

      setNewPassword("");

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setToast({
        type: "error",
        message: err?.response?.data?.message || "Reset failed. Try again.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="text-xl text-center font-semibold">Reset Password</h2>

          <input
            type="password"
            placeholder="Enter new password"
            className="input mt-4"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button
            className="btn btn-primary mt-4"
            onClick={handleResetPassword}
            disabled={loading}
          >
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </div>
      </div>

      {toast && (
        <div className="toast toast-top toast-center">
          <div
            className={`alert ${
              toast.type === "success" ? "alert-success" : "alert-error"
            }`}
          >
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
