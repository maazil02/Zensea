import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";


const AfterLog = () => {
    const { logoutUser } = useUser();
    const handleLogout = () => {
        logoutUser();
    };
  return (
    <nav className="sub-nav">
      <Link to="/profile">Profile</Link>
      <Link onClick={handleLogout}>Logout</Link>
    </nav>
  );
};

export default AfterLog;