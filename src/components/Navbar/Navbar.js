// Navbar.js

import './Navbar.scss';

import { Link } from 'react-scroll';

const Navbar = () => {

  const openResume = () => {
    window.open('./Jamie_Caudill.pdf', '_blank');
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img className="navbar__logo-image" src={require('../../images/logo3.png')} alt="logo" />
        </div>
        <nav className="navbar__items__container">
          <ul className="navbar__items">
            {/* <li className="navbar__item">
              <Link to="intro" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
            </li> */}
            <li className="navbar__item">
              <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link>
            </li>
            <li className="navbar__item">
              <Link to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
            </li>
            <li className="navbar__item">
              <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
            </li>
            <li className="navbar__item">
              <button onClick={openResume}>Resume</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;
