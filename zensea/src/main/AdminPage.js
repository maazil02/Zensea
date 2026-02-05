import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/admin.css";

const AdminPage = () => {
  return (
    <div className="mainad">
      <div className="adpage">
        <nav className="adnav">
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/bookings">Booking Page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

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
    <div>
      <h2>Admin Page - User Data</h2>
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
            renderTableRows()
          ) : (
            <tr>
              <td colSpan="5">No user data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  function renderTableRows() {
    const rows = [];

    for (let i = 0; i < userData.length; i++) {
      const user = userData[i];
      rows.push(
        <tr key={user._id}>
          <td>{user.fullName}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phoneNumber}</td>
          <td>{user.address}</td>
        </tr>
      );
    }

    return rows;
  }
};

const BookingPage = () => {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9898/api/bookings");
        setBookingData(response.data);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Booking Page - Booking Data</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Activity Type</th>
            <th>Booking Type</th>
            <th>Full Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Number of Persons</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.length > 0 ? (
            renderTableRows()
          ) : (
            <tr>
              <td colSpan="7">No booking data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  function renderTableRows() {
    const rows = [];

    for (let i = 0; i < bookingData.length; i++) {
      const booking = bookingData[i];
      rows.push(
        <tr key={booking._id}>
          <td>{booking.activityType}</td>
          <td>{booking.bookingType}</td>
          <td>{booking.fullName}</td>
          <td>{booking.username}</td>
          <td>{booking.email}</td>
          <td>{booking.nops}</td>
          <td>{booking.price}</td>
        </tr>
      );
    }

    return rows;
  }
};

export default AdminPage;
