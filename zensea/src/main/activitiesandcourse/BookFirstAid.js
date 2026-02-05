import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/Booking.css";
import { Link, useNavigate } from "react-router-dom";

const BookFirstAid = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    activityType: "Cousre",
    bookingType: "Naui First Aid",
    fullName: "",
    username: "",
    email: "",
    nops: null,
    price: 5000,
  });

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9898/profile/${email}",
          "http://localhost:9898/profile/${username}"
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      fullName: setUserData.fullName,
      email: setUserData.email,
    }));
  }, [userData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "nops") {
      const numberOfPersons = parseInt(value, 10);
      const newPrice = numberOfPersons * 5000; // ₹5000 per person
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        price: newPrice,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleBooking = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9898/api/book",
        formData
      );
      alert("Booked");
      navigate("/");
    } catch (error) {
      console.error("Error booking activity:", error);
    }
  };

  return (
    <div className="book-div">
      <div className="booking-form">
        <h3>Enroll Your Course</h3>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={setFormData.fullName}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          UserName:
          <input
            type="text"
            name="username"
            value={setFormData.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Number of Persons:
          <input
            type="number"
            name="nops"
            value={formData.nops}
            onChange={handleInputChange}
            required
          />
        </label>
        <p>Price: ₹{formData.price}</p>
        <Link href="#" onClick={handleBooking} className="book-now-link">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default BookFirstAid;
