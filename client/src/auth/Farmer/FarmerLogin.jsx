import React from "react";
import FarmerLoginBg from "../../assets/Background-images/young-asian-farmer-with-smartphone 1.png";

const FarmerLogin = () => {
  const formData = {
    email: "",
    password: "",
  };
  const [form, setForm] = React.useState(formData);
  const [error, setError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function Handlechange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Please Enter a valid email address");
    }
  }

  function HandleSubmit(e) {
    e.preventDefault();
    if (form.email === "" && form.password === "") {
      alert("Please Enter the Credentials");
      return;
    }
    if (!form.email || !form.password) {
      setError("Please enter both email and password");
      return;
    }

    // try {
    //   //const response = await fetch("http://...", form)

    //   if (
    //     form.email === dummyData.email &&
    //     form.password === dummyData.password
    //   ) {
    //     alert("Admin Login Successful");
    //     window.location.href = "/farmer/dashboard";
    //   } else {
    //     setError("Wrong Credentials");
    //   }
    // } catch (error) {
    //   setError("Something went wrong");
    // }

    console.log(form);
  }
  return (
    <div
      className="flex justify-center items-center lg:justify-start h-screen bg-cover lg:bg-auto bg-no-repeat lg:bg-right"
      style={{ backgroundImage: `url(${FarmerLoginBg})` }}
    >
      <div
        className="flex flex-col h-4/6 lg:h-full items-center w-5/6 md:w-3/4 lg:w-1/2 bg-white bg-opacity-85 md:bg-opacity-100 p-8 py-12 md:py-8 lg:py-32 md:p-20 lg:px-24 border border-green-400 rounded-3xl md:rounded-3xl lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-l-none"
      >
        <h1 className="text-green-600 text-3xl lg:text-4xl font-bold">FARMER SIGN IN</h1>
        <h2 className="text-xl font-semibold lg:mt-4">Welcome Back</h2>
        <p className="text-gray-500 mt-2">Sign in to continue</p>
        <form onSubmit={HandleSubmit} action="" className="mt-8 space-y-4 lg:space-y-5">
          <input
            type="email"
            placeholder="Email or Phone"
            name="email"
            value={form.email}
            onChange={Handlechange}
            className="w-full p-3 border border-gray-400 focus:outline-none focus:border-green-500 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={Handlechange}
            className="w-full p-3 border border-gray-400 focus:outline-none focus:border-green-500 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700"
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-4 text-sm text-gray-500">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/farmer/signup")}
            className="text-green-600 cursor-pointer"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default FarmerLogin;