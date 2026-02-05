import React from "react";
import { Link } from "react-router-dom";

const DiveActivities = () => {
  return (
    <div>
      <nav className="sub-nav">
        <Link to="/activity/nightdives">Night Dives</Link>
        <Link to="/activity/camping">Camping</Link>
        <Link to="/activity/scubadiving">Scuba Diving</Link>
      </nav>
    </div>
  );
};

export default DiveActivities;
