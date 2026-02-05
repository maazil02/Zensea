import React, { useState } from "react";
import "../css/PersonalDetailsForm.css";
import { useAuth } from "./AuthContext"; 

const PersonalDetailsForm = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    address: "", 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (!user || !user.username) {
        console.error("User not logged in or username not available");
        return;
      }
  
      const response = await fetch("/api/updateProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          ...formData,
        }),
      });
  
      if (response.ok) {
        console.log("Profile updated successfully");
      } else {
        const errorData = await response.json();
        console.error("Failed to update profile:", errorData.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="personaldet">
      <div className="personal-details-form">
        <h2>Add Personal Details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="middleName">Middle Name:</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;