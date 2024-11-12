import React, { useState } from "react";
// Add any custom styles here if needed

const CustomerSignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setOtpSent(true); // SIMULATE OTP SENT
      alert("OTP sent for email verification");
      // Implement OTP or email verification here
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/src/assets/bg-img.jpg')" }}
    >
      <div className=" pr-12 flex justify-end items-center h-screen w-full bg-black bg-opacity-50">
        <div className=" text-5xl font-extrabold text-white text-lg pl-12 md:mx-6 md:p-12 items-center justify-center">
          <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">
            We are more than just a company
          </h4>
          <p className="font-sans text-2xl font-semibold  list-none text-justify mt-6 ">
            At CropCircle, we believe in empowering communities through
            sustainable agriculture and fresh produce. We’re more than just a
            company; we’re a community of farmers, food enthusiasts, and
            innovators who are passionate about creating a greener, healthier
            future. Join us today, and be part of a movement that values the
            earth, nurtures growth, and brings farm-fresh food right to your
            doorstep.
            {/* <li>Lorem ipsum dolor sit amet consectetur</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum dolor sit amet</li> */}
          </p>
        </div>
        <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-l -3xl form-container  md:mx-6 md:p-12">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
            CUSTOMER SIGN UP!
          </h2>
          <p className="text-center text-lg my-2 font-semibold">
            Welcome to CropCircle
          </p>
          <p className="text-center text-sm text-gray-600 mb-8">
            Join thousands of users who have already signed up
          </p>

          {/* FORM SECTION */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div> */}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Sign Up
            </button>
          </form>

          {/* Footer Links  */}
          <p className="mt-4 text-center text-gray-600">
            Already have an Account?{" "}
            <a href="/customer/login" className="text-green-600 ">
              Log In
            </a>
          </p>

          {otpSent && (
            <div className="text-center text-green-500 mt-4">
              Please check your email to verify your account.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerSignUp;
