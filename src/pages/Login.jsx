import React from "react";
import backgroundImage from "../assets/images/1.png"; // Adjust the path according to your project structure
import logoImage from "../assets/images/2.png"; // Adjust the path according to your project structure
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../services/operations/authAPI";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    console.log("submitted", email);
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };
  return (
    <div
      className="relative flex items-center justify-start min-h-screen bg-cover-fit bg-center bg-no-repeat pl-10 w-1440 h-1440"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay to dull the background image */}
      <div className="absolute inset-0 bg-purple-600 opacity-20"></div>

      {/* Form container */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-md  max-w-md bg-opacity-100 backdrop-blur-md ml-16 w-[450px] h-[550px] items-center">
        <div className="flex justify-center">
          <img src={logoImage} alt="Digitalflake Logo" className="w-55 h-24" />
        </div>
        <h2 className="text-xl  text-center mb-5 text-[#868686]">
          Welcome to Digitalflake admin
        </h2>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email-id</label>
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4 text-right">
            <a
              href="/forgot-password"
              className="text-purple-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
