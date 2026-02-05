import React from "react";
import Carousel from "./components/Carousel";
import d6 from "./images/dive/d6.jpg";
import d7 from "./images/dive/d7.jpg";
import d8 from "./images/dive/d8.jpg";
import d9 from "./images/dive/d9.jpg";
import sd20 from "./images/dive/sd20.jpg";
import zs from "./images/zs/zsSlogan.png";
import ImageOverlayCard from "./components/ImageOverlayCard";
import Review from "./components/Review";
import "./css/Review.css";

const Home = () => {
  const images = [sd20, d6, d7, d8, d9];
  return (
    <div>
      <div>
        <ImageOverlayCard imageUrl={d8} text={zs} />
      </div>
      <div>
        <Carousel images={images} />
      </div>
      <div className="mainHome">
        <div className="welcome">
          <p className="mainwel">
            "Welcome to the breathtaking world beneath the waves! Dive into the
            extraordinary with our scuba diving haven, where every plunge is a
            discovery, and every descent is an adventure. Unveil the mysteries
            of the deep, explore vibrant coral gardens, and encounter
            fascinating marine life. Join us as we redefine the art of
            underwater exploration and make a splash into a realm of wonders.
            Your aquatic odyssey begins here – let's dive in!"
          </p>
        </div>
      </div>
      <>
        <h2 className="rh2">Reviews</h2>
        <div className="revi">
          <Review
            imageUrl={d8}
            text="Zensea Scuba Diving exceeded my expectations! The dive sites were breathtaking, filled with vibrant marine life and stunning coral formations. The instructors were not only experts but also passionate about marine conservation. Highly recommended for both beginners and experienced divers!"
            rating={5} // Set number of stars
            readMoreLink="https://example.com/read-more" // Set the read more link
          />
          <Review
            imageUrl={d8}
            text="An amazing scuba diving experience with Zensea! The team is friendly, and safety is their top priority. The underwater world they introduced me to was magical, and I felt well-guided throughout the entire dive. Can't wait to dive with them again!"
            rating={4.5} // Set number of stars
            readMoreLink="https://example.com/read-more" // Set the read more link
          />
          <Review
            imageUrl={d8}
            text="Had a decent experience with Zensea Scuba Diving. The instructors were knowledgeable, and the equipment was in good condition. However, the overall ambiance could use some improvement. A satisfactory dive, but there's room for enhancement."
            rating={3} // Set number of stars
            readMoreLink="https://example.com/read-more" // Set the read more link
          />
          <Review
            imageUrl={d8}
            text="Zensea Scuba Diving is a hidden gem! The staff is exceptional, making every dive not just an adventure but a learning experience. The attention to detail and personalized guidance create a memorable journey beneath the waves. I've found my go-to dive center, and I highly recommend it to fellow diving enthusiasts!"
            rating={4} // Set number of stars
            readMoreLink="https://example.com/read-more" // Set the read more link
          />
        </div>
      </>
    </div>
  );
};

export default Home;
