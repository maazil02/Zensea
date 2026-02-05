import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/ProfileDisplay.css"

const ProfileDisplay = ({ loggedInUser }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile based on the logged-in user
    if (loggedInUser) {
      axios
        .get(`http://localhost:9898/profile/${loggedInUser.username}`)
        .then((response) => {
          setUserProfile(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user profile", error);
        });
    }
  }, [loggedInUser]);

  return (
    <div className="user-profile-container">
      {userProfile ? (
        <div>
          <h2>User Profile</h2>
          <p>Full Name: {userProfile.fullName}</p>
          <p>Username: {userProfile.username}</p>
          <p>Email: {userProfile.email}</p>
          {/* Add more */}
        </div>
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default ProfileDisplay;
