import React from "react";
import { Link } from 'react-router-dom';
import "../css/connect.css"

import InstagramIcon from '../images/zs/instagram.png';
import FacebookIcon from '../images/zs/facebook.png';
import SnapchatIcon from '../images/zs/snap.png';


const ConnNav = () => {
  return (
    <div>
      <nav className="sub-nav">
        <Link to="/connect/Instagram">
          IG
          <img src={InstagramIcon} alt="Instagram" className="imgg1"/>
        </Link>
        <Link to="/connect/FaceBook">
          FB
          <img src={FacebookIcon} alt="Facebook" className="imgg1"/>
        </Link>
        <Link to="/connect/SnapChat">
          SC
          <img src={SnapchatIcon} alt="Snapchat"className="imgg1" />
        </Link>
      </nav>
    </div>
  );
};

export default ConnNav;
