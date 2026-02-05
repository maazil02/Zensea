import React, { useState } from "react";
import "../css/ActivityCard.css";
import d1 from "../images/dive/d1.jpg";
import d20 from "../images/dive/sd20.jpg";
import d19 from "../images/dive/sd19.jpg";
import d9 from "../images/dive/sd9.jpg";
import { Link } from "react-router-dom";

const activitiesData = [
  {
    title: "Night Dives",
    description:
      "Embark on an otherworldly adventure as you delve into the mysteries of the ocean's nocturnal realm with our exhilarating night dives. Step into a world where darkness transforms the underwater landscape, revealing a mesmerizing display of marine life that comes alive under the glow of your dive light.",
    image: d20,
    linkk: "/activity/nightdives",
  },
  {
    title: "Camping",
    description:
      "Embark on a unique adventure that combines the thrill of scuba diving with the tranquility of camping. Dive into the unknown, explore vibrant marine life, and create memories that will last a lifetime. Join us in celebrating the harmony of land and sea in this one-of-a-kind camping for scuba diving experience.",
    image: d19,
    linkk: "/activity/camping",
  },
  {
    title: "Scuba Diving",
    description:
      "Dive into the extraordinary world of scuba diving, where every descent is a journey into the unknown, and every ascent brings a new perspective on the beauty and fragility of our oceans. Join us in preserving and appreciating the underwater wonders that make scuba diving a truly unparalleled adventure.",
    image: d1,
    linkk: "/activity/diving",
  },
  {
    title: "Wreck Diving Expedition",
    description:
      "Discover sunken shipwrecks and their hidden treasures on this exciting dive.",
    image: d9,
    linkk: "/activity/wreckexpedition",
  },
];

const ActivityCard = ({ activity }) => {
  return (
    <div className="activity-card">
      <img src={activity.image} alt={activity.title} className="card-image" />
      <div className="card-content">
        <h2 className="h2">{activity.title}</h2>
        <p className="p">{activity.description}</p>
        <Link to={activity.linkk} className="learn-more-button">
          Learn More
        </Link>
      </div>
    </div>
  );
};

const ScubaDivingPage = () => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);

  const handleNext = () => {
    setCurrentActivityIndex(
      (prevIndex) => (prevIndex + 1) % activitiesData.length
    );
  };

  return (
    <div className="scuba-page">
      <div className="activity-card-container">
        {activitiesData.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ScubaDivingPage;
