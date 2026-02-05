import React, { useState } from "react";
import "../css/Accordian.css";
import { Link } from "react-router-dom";

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <h1 className="h1">Courses</h1>
      <div className="accordion">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`accordion-section ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordionimg">
              <img src={section.image} />
            </div>
            <div className="accordion-content">
              <Link to={section.links} className="linkd">
                {section.content}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
