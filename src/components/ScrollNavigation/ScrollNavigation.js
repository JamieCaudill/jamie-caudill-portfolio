import React from 'react';
import { Link } from 'react-scroll';

const ScrollNavigation = () => {
  return (
    <div>
      <Link to="/home" smooth={true} duration={500}>
        Home
      </Link>
      <Link to="/main" smooth={true} duration={500}>
        Main
      </Link>
    </div>
  );
};

export default ScrollNavigation;