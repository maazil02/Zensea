import React from 'react';
import { Link } from 'react-router-dom';

const DiveLoc = () => {
  return (
    <nav className="sub-nav">
      <Link to="/dives/category1">Mumbai</Link>
      <Link to="/dives/category2">Bhatkal</Link>
      <Link to="/dives/category3">Kerala</Link>
    </nav>
  );
};
export default DiveLoc;
