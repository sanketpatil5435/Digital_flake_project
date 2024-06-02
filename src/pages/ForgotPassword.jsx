import React, { useState } from "react";
import backgroundImage from "../assets/images/1.png"; 
import { useDispatch } from "react-redux";
import { getPasswordResetToken } from "../services/operations/authAPI";
function ForgotPassword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email));
  };
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat pl-10 w-[1550px] h-[300px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay to dull the background image */}
      <div className="absolute inset-0 bg-purple-600 opacity-20"></div>

      {/* Form container */}
      <div className="ml-[-800px] relative z-10 bg-white p-8 rounded-lg shadow-md w-full max-w-md bg-opacity-100 backdrop-blur-md ml-20">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Did you forget password?
        </h2>
        <p className="text-center mb-6 text-gray-600">
          Enter your email address and we’ll send you a link to restore password
        </p>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded mb-4"
          >
            Request reset link
          </button>
          <div className="text-center">
            <a href="/" className="text-purple-600 hover:underline">
              Back to log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
