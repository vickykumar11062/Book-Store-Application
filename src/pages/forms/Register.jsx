// import React from "react";
// import "./register.css";
// import { Link } from "react-router-dom";

// const Register = () => {
//   return (
//     <div className="register-login">
//       <h1>Create new account</h1>
//       <form
//         action=""
//         onClick={(e) => {
//           e.preventDefault();
//         }}>
//         <input type="email" name="email" id="email" placeholder="Email" />
//         <input
//           type="text"
//           name="username"
//           id="username"
//           placeholder="Username"
//         />
//         <input
//           type="password"
//           name="password"
//           id="password"
//           placeholder="Password"
//         />
//         <button type="submit">Register</button>
//         <div className="have-account">
//           <p>Already have an account ?</p>
//           <Link to="/login">Login</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add your backend POST request here

    // Simulate successful registration
    alert("Registration successful!");
    navigate("/login"); // 🔁 redirect to login
  };

  return (
    <div className="register-login">
      <h1>Create new account</h1>
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
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={formData.username}
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
        <button type="submit">Register</button>
        <div className="have-account">
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
