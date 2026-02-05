import React from "react";
import slogan from "../images/zs/zs.png";
import zslogo from "../images/zs/zsLogo.png";

const Aboutus = () => {
  return (
    <div className="wrapperabout">
      <div className="imgslogan">
        {/* <img src={zslogo} alt="Zensea Logo" className="zslogo" /> */}
        <img src={slogan} alt="Zensea Slogan" className="slogan" />
      </div>
      <h1 className="mainhead">
        <u>About Us</u>
      </h1>
      <div className="sub1">
        <p className="mainpara">
          "At Zensea, we're more than just a destination for underwater
          enthusiasts; we're a community united by a shared passion for
          exploration beneath the surface. Founded by avid divers, our mission
          is to inspire, educate, and connect fellow adventurers to the wonders
          of the ocean. With a deep commitment to safety, sustainability, and
          the pure joy of diving, we curate a hub where novices and seasoned
          divers alike can find valuable resources, expert tips, and a platform
          to share their own underwater stories. Our team of experienced divers
          and marine enthusiasts brings a wealth of knowledge, ensuring that
          every piece of content is a dive into discovery. Join us in
          celebrating the beauty of the ocean, the thrill of exploration, and
          the camaraderie that comes with being part of the global scuba diving
          community. Whether you're just starting your diving journey or seeking
          new depths to conquer, Zensea is your trusted companion in the
          fascinating realm beneath the waves."
        </p>
      </div>

      <div className="sub2">
        <h3 className="subhead">
          Discover the Depths with Us: Tailored Diving Solutions
        </h3>
        <p className="subpara">
          At Zensea, we pride ourselves on offering tailored solutions to make
          your underwater adventure truly unforgettable. For divers seeking a
          5-day diving extravaganza, we recommend a meticulously curated program
          that showcases the diverse beauty of India's aquatic wonders.
        </p>
      </div>

      <div className="sub2">
        <h3 className="subhead"> Accommodation Packages: </h3>
        <p className="subpara">
          Our diving packages include accommodation, ensuring a seamless and
          comfortable experience. With our central location, we facilitate easy
          access to a range of hotels, catering to diverse budgets. Whether it's
          a cozy two-star retreat or a luxurious five-star oasis, we've got your
          stay covered.{" "}
        </p>
      </div>

      <div className="sub2">
        <h3 className="subhead"> Convenience at Your Fingertips:</h3>

        <p className="subpara">
          Benefit from our centralized location with most hotels just a
          30-minute drive away. Upon request, we can arrange client pickups
          (service charges applicable) for added convenience.{" "}
        </p>
      </div>

      <div className="sub2">
        <h3 className="subhead"> A Kaleidoscope of Marine Life:</h3>
        <p className="subpara">
          Dive into a mesmerizing world teeming with life. From delicate sea
          horses and colorful nudibranches to majestic whale sharks and elusive
          guitar sharks, our waters host a spectacular array of sea creatures.
          Encounter mushroom corals, rays, lobsters, and an impressive variety
          of fish that make every dive an enchanting experience.{" "}
        </p>
      </div>

      <div className="sub3">
        <h3 className="subhead"> Multilingual Support</h3>
        <p className="subpara">
          Our dedicated team speaks English, Hindi, Malayalam, Kannada, Marathi,
          Arabic, and French, ensuring clear communication and a personalized
          experience for every diver.
        </p>
      </div>

      <div className="sub2">
        <h3 className="subhead"> Safety First: </h3>
        <p className="subpara">
          Rest easy knowing that the nearest decompression chamber is just 1
          hour and 15 minutes away from our dive center, prioritizing your
          safety and peace of mind. Embark on a journey with Zensea where every
          dive is a bespoke adventure into the wonders beneath the waves.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
