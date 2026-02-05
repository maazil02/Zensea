import React, { useState } from "react";
import "../css/Gallery.css";
import zslogo from "../images/zs/zsSlogan.png";
import d1 from "../images/dive/sd1.jpg";
import d2 from "../images/dive/sd2.jpg";
import d3 from "../images/dive/sd3.jpg";
import d4 from "../images/dive/sd4.jpg";
import d5 from "../images/dive/sd5.jpg";
import d6 from "../images/dive/sd6.jpg";
import d7 from "../images/dive/sd7.jpg";
import d8 from "../images/dive/sd8.jpg";
import d9 from "../images/dive/sd9.jpg";
import d10 from "../images/dive/sd10.jpeg";
import d11 from "../images/dive/sd11.jpg";
import d12 from "../images/dive/sd12.jpg";
import d13 from "../images/dive/sd13.jpg";
import d14 from "../images/dive/sd14.jpg";
import d15 from "../images/dive/sd15.jpg";
import d16 from "../images/dive/sd16.jpg";
import d17 from "../images/dive/sd17.jpg";
import d18 from "../images/dive/sd18.jpg";

const Gallery = () => {
  const images = [
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    d8,
    d9,
    d10,
    d11,
    d12,
    d13,
    d14,
    d15,
    d16,
    d17,
    d18,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mainwrap">
      <img src={zslogo} alt="Zensea Logo" className="zsx" />
      <h1 className="h1">Gallery</h1>
      <div className="image-gallery-container">
        <div className="gallery">
          <div className="gallery-item" onClick={() => handleImageClick(0)}>
            <img src={images[0]} alt="Image 1" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(1)}>
            <img src={images[1]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(2)}>
            <img src={images[2]} alt="Image 3" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(3)}>
            <img src={images[3]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(4)}>
            <img src={images[4]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(5)}>
            <img src={images[5]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(6)}>
            <img src={images[6]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(7)}>
            <img src={images[7]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(8)}>
            <img src={images[8]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(9)}>
            <img src={images[9]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(10)}>
            <img src={images[10]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(11)}>
            <img src={images[11]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(12)}>
            <img src={images[12]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(13)}>
            <img src={images[13]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(14)}>
            <img src={images[14]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(15)}>
            <img src={images[15]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(16)}>
            <img src={images[16]} alt="Image 2" />
          </div>
          <div className="gallery-item" onClick={() => handleImageClick(17)}>
            <img src={images[17]} alt="Image 2" />
          </div>
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal">
              <img src={selectedImage} alt="Selected Image" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
