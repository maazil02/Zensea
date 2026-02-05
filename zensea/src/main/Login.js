import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../images/zs/login.gif";
import "../css/Sign.css";
import { useUser } from "../components/UserContext";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { loginUser } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:9898/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Call loginUser directly from the hook
        loginUser(formData.username);

        navigate("/"); // home direction
      } else {
        // Handling login error
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="Error" className="img" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username" className="label">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <Link to="/signup" className="sign">
        If not registered, click here to sign up
      </Link>
      <div className="regbtn">
        <Link className="btn" onClick={handleLogin}>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Login;
