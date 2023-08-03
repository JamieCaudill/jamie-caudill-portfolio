// Intro.js
import './Intro.css'

export default function Intro({bounceElement}) {
  return (
    <div className="intro" id="intro">
      <div className="intro__container" onClick={() => {bounceElement()}}>
        <h1 className="intro__text">Hi. I'm Jamie.</h1>
        <h1>A Creative.</h1>
        <p>I am also a software developer who crafts captivating UIs. I blend my love for photography and the wilderness to inspire innovative designs.</p>
        <button className="intro__button">View My Work</button>
      </div>
    </div>
  )
}