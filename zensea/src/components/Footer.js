import React from 'react';
import '../App.css'; // Import the CSS file for styling
import InstagramIcon from '../images/zs/instagram.png';
import FacebookIcon from '../images/zs/facebook.png';
import SnapchatIcon from '../images/zs/snap.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className='footh'>Contact Us</h2>
          <p>Email: info@zensea.com</p>
          <p>Phone: +911 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h2 className='footh'>Follow Us</h2>
          <Link to="/connect/Instagram">
          <img src={InstagramIcon} alt="Instagram" className="img1"/>
        </Link>
        <Link to="/connect/FaceBook">
          <img src={FacebookIcon} alt="Facebook" className="img1"/>
        </Link>
        <Link to="/connect/SnapChat">
          <img src={SnapchatIcon} alt="Snapchat"className="img1" />
        </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Zensea. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
