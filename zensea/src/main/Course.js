import React from "react";
import dres from "../images/dive/sdres.jpg";
import daid from "../images/dive/sdaid.jpg";
import d20 from "../images/dive/sd20.jpg";
import d21 from "../images/dive/sd21.jpg";
import Accordion from "./Accordion";

const cards = [
  {
    links: "/course/DeepSpecialty",
    image: d20,
    content: "Deep Specialty",
  },
  {
    links: "/course/NauiFirstAid",
    image: daid,
    content: "Naui First Aid",
  },
  {
    links: "/course/NauiDivingMaster",
    image: d21,
    content: "Naui Dive Master",
  },
  {
    links: "/course/NauiRescueDiver",
    image: dres,
    content: "Naui Rescue Diver",
  },
];

const Course = () => {
  return (
    <div>
      <Accordion sections={cards} />
    </div>
  );
};

export default Course;
