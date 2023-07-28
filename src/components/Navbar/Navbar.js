// Navbar.js

import Main from "../Main/Main"
import Intro from "../Intro/Intro"
import ScrollNavigation from "../ScrollNavigation/ScrollNavigation"
import { Element, Link } from "react-scroll"


export default function Navbar() {
  return (
    <div className="navbar">
      <li className="navbar__item">
        <Link to="intro" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
      </li>
      <li className="navbar__item">
        <Link to="main" spy={true} smooth={true} offset={50} duration={500}>Main</Link>
      </li>
    </div>
  )
}