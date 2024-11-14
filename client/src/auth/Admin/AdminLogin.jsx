import React from "react";
import AdminBg from "../../assets/Background-images/side-view-women-shaking-hands.jpeg";

const AdminLogin = () => {
  const formData = {
    email: "",
    password: "",
  }
  
  const [error, setError] = React.useState("");
  const [form, setForm] = React.useState(formData);
  const [emailError, setEmailError] = React.useState(""); 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function HandleChange(e){
    setForm({...form,[e.target.name]:e.target.value})
      if (!emailRegex.test(e.target.value)) {
        setEmailError("Please Enter a valid email address");
      }
    
    console.log(form);
  }

  function HandleSubmit(e){
    e.preventDefault();
    if(form.email === "" || form.password === ""){
      alert("Please fill the form")
      return;
    }
    // try{
    //    const response = fetch("http://localhost:8000/api/admin/login", form)
    //    if(response.status === 200){
    //      alert("Login Successful")
    //      window.location.href = "/admin/dashboard"
    //      return;
    //    }
    //    else{
    //      alert("Invalid Credentials")
    //      return;
    //    }
    // }
    // catch(error){
    //   setError(error);
    // }
  
    console.log("Results",form);
  }
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover"
      style={{ backgroundImage: `url(${AdminBg})` }}
    >
      <div className="w-5/6 md:w-full max-w-lg p-10 md:p-20 bg-gray-300 bg-opacity-85 md:bg-opacity-100 rounded-3xl shadow-lg">
      <h1 className="mb-4 text-3xl font-bold text-center text-green-600">CROPCIRCLE</h1>
      <h2 className="text-xl font-semibold text-center">Welcome Back, Admin</h2>
      <p className="mb-6 text-center">Sign In to continue</p>

        <form onSubmit={HandleSubmit} action="" className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={HandleChange}
            className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-green-500"
          />
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition bg-green-600 rounded-md hover:bg-green-700"
          >
            Sign In
          </button>
          <p className="mt-4 text-sm text-center">
            <a href="" className="text-gray-600 hover:underline">
              Forgot Password?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
