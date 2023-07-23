// Navbar.js

import Main from "../Main/Main"
import Intro from "../Intro/Intro"
import ScrollNavigation from "../ScrollNavigation/ScrollNavigation"
import { Element } from "react-scroll"


export default function Navbar() {
  return (
    <div className="navbar">
  <ScrollNavigation />
  <Element name="/home">
    <Intro />
  </Element>
  <Element name="/main">
    <Main />
  </Element>
  </div>
  )
}