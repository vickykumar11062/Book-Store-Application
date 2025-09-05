// import React from "react";
// import "./register.css";
// import { Link } from "react-router-dom";

// const Login = () => {
//   return (
//     <div className="register-login">
//       <h1>Login</h1>
//       <form
//         action=""
//         onClick={(e) => {
//           e.preventDefault();
//         }}>
//         <input type="email" name="email" id="email" placeholder="Email" />
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Password"
//         />
//         <button type="submit">Register</button>
//         <div className="have-account">
//           <p>You don't have an account ?</p>
//           <Link to="/register">Register</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add login validation or API call here
    alert("Login successful!");

    // 🔁 Redirect to Home page
    navigate("/home");
  };

  return (
    <div className="register-login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <div className="have-account">
          <p>You don't have an account?</p>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
