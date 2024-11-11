// src/components/SignupWithOtpVerification.jsx
import React, { useState } from "react";
import CustomerSignUp from "./CustomerSignUp";
import OTPForm from "./OTPForm";

const SignupWithOtpVerification = () => {
  const [otpSent, setOtpSent] = useState(false);

  const handleSignupSuccess = () => {
    setOtpSent(true); // Show OTP form after successful signup
  };

  const handleOtpVerify = (otp) => {
    if (otp === "123456") {
      // Example OTP for testing
      window.location.href = "/customer";
      return true;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {otpSent ? (
        <OTPForm onVerify={handleOtpVerify} />
      ) : (
        <CustomerSignUp onSignupSuccess={handleSignupSuccess} />
      )}
    </div>
  );
};

export default SignupWithOtpVerification;
