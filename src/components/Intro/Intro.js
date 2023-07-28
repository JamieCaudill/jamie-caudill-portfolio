// Intro.js
import './Intro.css'

export default function Intro({bounceElement}) {
  return (
    <div className="intro" id="intro">
      <div className="intro__container" onClick={() => {bounceElement()}}>
        <h1 className="intro__text">Jamie Caudill</h1>
        <p>Frontend Software Developer</p>
        <p>Photographer</p>
        <p>Jack-of-far-too-many-hobbies</p>
      </div>
    </div>
  )
}