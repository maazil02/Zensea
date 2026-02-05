import React from "react";
import ns from "../../images/dive/d6.jpg";
import sd20 from "../../images/dive/sd20.jpg";
import "../../css/NightDivingInfo.css";
import { Link } from "react-router-dom";

const NightDivingInfo = () => {
  return (
    <div>
      <div className="overlaycontainer">
        <div className="imageoverlay">
          <img src={sd20} alt="Overlay" className="overlayimage" />

          <div className="textoverlay">
            NIGHT DIVING <br />
            <br />
            <div className="textoverlaysmall">
              Weekly night dives every Tuesday evening from our dive center
            </div>
          </div>
        </div>
      </div>
      <div className="nsinfo">
        <p className="nspp">
          <h4 className="nsh4">Night Diving Experience</h4>
          As the sun sets over the Arabian Sea, Zensea transforms into a magical
          realm where the ocean comes alive with bioluminescent wonders. Night
          diving at Zensea allows divers to witness the underwater world in a
          completely different light. Underwater LED lights strategically placed
          along the coral formations enhance the beauty of marine life, creating
          an ethereal and surreal ambiance.
          <h4 className="nsh4">Key Features: </h4>
          <ol type="1" className="nsol">
            <li>Bioluminescent Marvels:</li>Dive into a world illuminated by the
            natural glow of bioluminescent organisms, creating an otherworldly
            spectacle.
            <br />
            <br />
            <li>Exclusive Dive Sites:</li>
            Zensea boasts exclusive dive sites teeming with vibrant coral reefs,
            diverse marine species, and unique underwater formations.
            <br />
            <br />
            <li>Experienced Dive Guides:</li>Our team of certified and
            experienced dive guides ensure a safe and unforgettable night diving
            experience, catering to divers of all skill levels.
            <br />
            <br />
            <li>State-of-the-Art Night Diving Gear:</li>Equipped with
            specialized night diving gear, including underwater flashlights and
            glow-in-the-dark diving suits, Zensea ensures a comfortable and
            immersive experience.
            <br />
            <br />
          </ol>
        </p>
      </div>
      <div className="nsmain">
        <div className="night-diving-info">
          <div className="info-container">
            <img src={ns} alt="Night Diving" className="night-diving-image" />
            <h2 className="nsh2">Night Dive with Tanks & Weights</h2>
            <p className="nsp">
              Explore the mysteries of the underwater world after dark, equipped
              with tanks and weights, as you immerse yourself in the nocturnal
              beauty of the ocean.
            </p>
          </div>

          <div className="amenities-card">
            <h3>Amenities & Prices</h3>
            <ul className="nsul" style={{ listStyleType: "circle" }}>
              <li>Underwater Flashlights</li>
              <li>Dive Tanks</li>
              <li>Weight Belts</li>
              <li>Night Dive Guide</li>
              <li>Signal Whistle</li>
            </ul>
            <p className="price">Price: ₹1000 per person</p>
            <div className="nsbd">
              <Link to="/booktanks" type="button" className="nsb">
                Book
              </Link>
            </div>
          </div>
        </div>
        <div className="night-diving-info">
          <div className="info-container">
            <img src={ns} alt="Night Diving" className="night-diving-image" />
            <h2 className="nsh2">Night Dive with Full Equipment</h2>
            <p className="nsp">
              Dive into the enchanting darkness fully prepared with specialized
              gear, illuminating the underwater realm and revealing a magical
              world beneath the moonlit waves.
            </p>
          </div>
          <div className="amenities-card">
            <h3>Amenities & Prices</h3>
            <ul className="nsul" style={{ listStyleType: "circle" }}>
              <li>Underwater Flashlights</li>
              <li>Dive Tanks</li>
              <li>Weight Belts</li>
              <li>Full Scuba Gear</li>
              <li>Wetsuit</li>
              <li>Diving Mask</li>
              <li>Fins</li>
            </ul>
            <p className="price">Price: ₹1500 per person</p>
            <div className="nsbd">
              <Link to="/bookfull" type="button" className="nsb">
                Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightDivingInfo;
