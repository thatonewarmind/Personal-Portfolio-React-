import './HeroContent.css'
import profilePicture from '../../assets/PFP.jpg'

export function HeroContent() {
  return (
    <div className="hero__content">
      <img className="hero__avatar" src={profilePicture} alt="Aadit Bhatia" />
      <h1>Hi, I'm Aadit Bhatia!
      </h1>
      <p>
        I'm a sophomore at The Ohio State University studying Computer Engineering with a minor
        in mathematics.
      </p>
      <p>I'm currently working at Treevah as a Frontend SWE Intern, but in my free time I enjoy photography, cooking, and learning more about the software and hardware behind computers.</p>
    </div>
  )
}
