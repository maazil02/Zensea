import React from "react";
import axios from "axios";
import loginImg from "../images/zs/login.gif";
import "../css/Sign.css";
import { Link } from "react-router-dom";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = () => {
    const { fullName, username, email, password, phoneNumber, address } =
      this.state;

    axios
      .post("http://localhost:9898/signup", {
        fullName,
        username,
        email,
        password,
        phoneNumber,
        address,
      })
      .then((response) => {
        // Handle success and redirecting
        alert("User registered successfully", response.data);
      })
      .catch((error) => {
        // Handle error
        alert("Error registering user", error);
      });
  };

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="Error" className="img" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="fullName" className="label">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username" className="label">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber" className="label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address" className="label">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
        <Link to="/login" className="sign">
          Already registered, click here to login
        </Link>
        <div className="regbtn">
          <Link className="btn" onClick={this.handleRegister}>
            Register
          </Link>
        </div>
      </div>
    );
  }
}
