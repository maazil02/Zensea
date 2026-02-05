import React from "react";
import "../css/Glow.css";
import InstagramIcon from "../images/zs/instagram.png";
import FacebookIcon from "../images/zs/facebook.png";
import SnapchatIcon from "../images/zs/snap.png";

const GlowCard = () => {
  return (
    <div className="mainbody">
      <>
        <title>Card Effect</title>
        <div className="container">
          <div className="card">
            <div className="face face1">
              <div className="content">
                <i className="fab fa-windows" />
                <img src={InstagramIcon} alt="Instagram" className="img11" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h2 className="h2h">Instagram</h2>
                <a href="/connect/Instagram" type="button">
                  Connect
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <i className="fab fa-android" />
                <img src={FacebookIcon} alt="Facebook" className="img11" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h2 className="h2h">Facebook</h2>
                <a href="/connect/FaceBook" type="button">
                  Connect
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <i className="fab fa-apple" />
                <img src={SnapchatIcon} alt="Snapchat" className="img11" />
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h2 className="h2h">Snapchat</h2>
                <a href="/connect/SnapChat" type="button">
                  Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default GlowCard;
