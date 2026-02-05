import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/AdminPage.css"

const UserDataPage = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9898/profile");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mainad">
    <div>
      <h2>User Data Page</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {userData.length > 0 ? (
            userData.map((user) => (
              <tr key={user._id}>
                <td>{user.fullName}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.address}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No user data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default UserDataPage;
