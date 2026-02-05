import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";
import DiveActivities from "./DiveActivities";
import DCourse from "./DCourse";
import logo from "../images/zs/zsLogo.png";
import log from "../images/zs/zensea.png";
import AfterLog from "./AfterLog.js";

const Header = () => {
  const { user, logoutUser } = useUser();

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <header className="headr">
      <div className="header">
        <div className="logo-container">
          <Link to="/">
            <img
              src={logo}
              alt="Scuba Diving Adventures Logo"
              className="logo"
            />
          </Link>
          <div className="logo-text">
            <img src={log} alt="Not found" className="log" />
          </div>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <div className="nav-item">
            <Link to="/activity">Activity</Link>
            <DiveActivities />{" "}
          </div>
          {/* <div className="nav-item">
          <Link to="/sites">Dive Sites</Link>
          <DiveLoc />
        </div> */}
          <div className="nav-item">
            <Link to="/course">Dive Courses</Link>
            <DCourse />
          </div>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About Us</Link>
          <div className="nav-item">
            <Link to="/connect">Connect</Link>
          </div>
          {user ? (
            // Displaying username and logout button if user is logged in
            <>
              <div className="nav-item">
                <Link>{user}</Link>
                <AfterLog />
              </div>
            </>
          ) : (
            // Displaying login if user is not logged in
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
