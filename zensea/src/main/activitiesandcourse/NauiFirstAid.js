import React from "react";
import sd20 from "../../images/dive/sdaid.jpg";
import ns from "../../images/dive/faid.gif";
import "../../css/NightDivingInfo.css";
import { Link } from "react-router-dom";

const NauiFirstAid = () => {
  return (
    <div>
      <div className="overlaycontainer">
        <div className="imageoverlay">
          <img src={sd20} alt="Overlay" className="overlayimage" />
          <div className="textoverlay">
            NAUI FIRST AID <br />
            <br />
            <div className="textoverlaysmall">
              Enroll in a NAUI Rescue Scuba Diver course to improve your
              capabilities for response to emergency situations both in and out
              of the water.
            </div>
          </div>
        </div>
      </div>
      <div className="nsinfo">
        <p className="nspp">
          <h4 className="nsh4">
            First Aid, CPR, and Oxygen Administration at Zensea:
          </h4>
          First Aid, CPR, and Oxygen Administration at Zensea: At Zensea, we
          prioritize safety and preparedness for all divers and professionals.
          Even with the best planning, unforeseen events can occur underwater.
          Therefore, we offer comprehensive training in First Aid, CPR, AED
          (Automated External Defibrillator), Bloodborne Pathogens, Oxygen
          Administration, and First Aid for Hazardous Marine Life Injuries. Our
          training programs go beyond the basics, aligning with the latest
          International Liaison Committee on Resuscitation (ILCOR) standards.
          This ensures that our divers and professionals are equipped with the
          most up-to-date and effective emergency response techniques.
          <h4 className="nsh4">Key Features: </h4>
          <ol type="1" className="nsol">
            <li>NAUI Certification:</li>
            Our First Aid, CPR, and Oxygen Administration training not only meet
            NAUI (National Association of Underwater Instructors) requirements
            for leadership and dive safety but are also recognized by the US
            Coast Guard. This recognition extends to meeting the requirements
            for a US Captain's Licensing, highlighting the comprehensive and
            high-standard nature of our programs.
            <br />
            <br />
            <li>Professional Rescuer Level Certification:</li>
            For active NAUI leaders, instructors, and rescue divers,
            certification at the professional rescuer level is mandatory. This
            commitment ensures that our team members possess the skills and
            knowledge necessary to handle emergency situations with confidence
            and competence.
            <br />
            <br />
            <li>Why Choose Zensea First Aid Training:</li> World-Class Training:
            Zensea provides some of the best first aid training globally,
            setting our divers apart as among the best trained in the world.
            <br /> Preparedness: In the unlikely event of a diving emergency or
            accident, our divers are not only skilled but also well-prepared to
            respond effectively..
            <br />
            <br />
            <li>Getting Started:</li> There are no minimum age or previous
            certification requirements for our First Aid, CPR, and Oxygen
            Administration training programs. We welcome divers and
            professionals at all levels to enhance their skills and knowledge.
            <br />
            <br />
            <li>What's Next? </li>
            Take the next step in your training journey by enrolling in a NAUI
            Rescue Scuba Diver course. This advanced course will further improve
            your capabilities for responding to emergency situations both in and
            out of the water.
            <br />
            <br />
          </ol>
        </p>
        <div className="nsmain">
          <div className="night-diving-info">
            <div className="info-container">
              <img src={ns} alt="Night Diving" className="night-diving-image" />
              <h2 className="nsh2">Naui First Aid Course</h2>
              <p className="nsp">
                Explore the details of the First Aid, CPR, AED, Bloodborne
                Pathogens, Oxygen Administration, and First Aid for Hazardous
                Marine Life Injuries courses. Ensure that the program covers the
                latest ILCOR standards.
              </p>
            </div>
            <div className="amenities-card">
              <h3>Amenities & Prices</h3>
              <ul className="nsul" style={{ listStyleType: "circle" }}>
                <li>First Aid, CPR, and Oxygen Administration Course</li>
                <li>Equipment Rental</li>
                <li>Experienced and certified instructors.</li>
                <li>Certification Fees</li>
              </ul>
              <p className="price">Price: ₹5000 per person</p>
              <div className="nsbd">
                <Link to="/bookfa" type="button" className="nsb">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NauiFirstAid;
