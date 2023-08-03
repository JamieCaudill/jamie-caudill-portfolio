// Navbar.js

import './Navbar.css';
import Main from "../Main/Main"
import Intro from "../Intro/Intro"
import { Element, Link } from "react-scroll"


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img className="navbar__logo-image" src={require('../../images/logo3.png')} alt="logo" />
      </div>
      <nav className="navbar__items__container">
        <ul className="navbar__items">
          <li className="navbar__item">
            <Link to="intro" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="main" spy={true} smooth={true} offset={50} duration={500}>Main</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
