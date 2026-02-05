import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { UserProvider } from "./components/UserContext.js";
import Home from "./Home.js";
import Activity from "./main/Activity.js";
import Course from "./main/Course.js";
import Sites from "./main/Sites.js";
import Login from "./main/Login.js";
import { Register } from "./main/Register.js";
import Aboutus from "./main/Aboutus.js";
import Gallery from "./main/Gallery.js";
import SMConnect from "./main/SMConnect.js";
import NightDivingInfo from "./main/activitiesandcourse/NightDivingInfo.js";
import NauiFirstAid from "./main/activitiesandcourse/NauiFirstAid.js";
import AdminPage from "./main/AdminPage.js";
import BookTanks from "./main/activitiesandcourse/BookTanks.js";
import UserDataPage from "./components/UserDataPage.js";
import BookingPage from "./components/BookingPage.js";
import BookFull from "./main/activitiesandcourse/BookFull.js";
import BookFirstAid from "./main/activitiesandcourse/BookFirstAid.js";
const App = () => {
  return (
    <UserProvider>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/course" element={<Course />} />
            <Route path="/sites" element={<Sites />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/connect" element={<SMConnect />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/booktanks" element={<BookTanks />} />
            <Route path="/bookfull" element={<BookFull />} />
            <Route path="/bookfa" element={<BookFirstAid />} />
            <Route path="/users" element={<UserDataPage />} />
            <Route path="/bookings" element={<BookingPage />} />
            <Route path="/activity/nightdives" element={<NightDivingInfo />} />
            <Route path="/course/NauiFirstAid" element={<NauiFirstAid />} />
            <Route
              path="*"
              element={
                <h1
                  style={{
                    fontSize: 40,
                    display: "flex",
                    justifyContent: "center",
                    color: "#C1DBFF",
                    padding: 50,
                    paddingBottom: 300,
                  }}
                >
                  {" "}
                  404: Under Construction
                </h1>
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </UserProvider>
  );
};

export default App;
