import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/AdminPage.css"

const BookingPage = () => {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:9898/bookings");
        setBookingData(response.data);
      } catch (error) {
        console.error("Error fetching booking data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Booking Data Page</h2>
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
            bookingData.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.activityType}</td>
                <td>{booking.bookingType}</td>
                <td>{booking.fullName}</td>
                <td>{booking.username}</td>
                <td>{booking.email}</td>
                <td>{booking.nops}</td>
                <td>{booking.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No booking data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingPage;
