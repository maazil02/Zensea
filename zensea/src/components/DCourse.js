import React from "react";
import { Link } from "react-router-dom";

const DCourse = () => {
  return (
    <nav className="sub-nav">
      <Link to="/course/DeepSpecialty">Deep Specialty</Link>
      <Link to="/course/NauiFirstAid">Naui First Aid</Link>
      <Link to="/course/NauiDivingMaster">Naui Diving Master</Link>
      <Link to="/course/NauiRescueDiver">Naui Rescue Diver</Link>
    </nav>
  );
};

export default DCourse;
