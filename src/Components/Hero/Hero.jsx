import React from 'react';
import './Hero.css';
import profile_img from '../../assets/prof.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>I'm Mareena Jolly,</span> MERN stack developer from Kerala</h1>
      <p>
        I am a web developer from Kerala, specializing in the MERN stack. I craft dynamic, 
        user-friendly web applications that blend functionality with design, bringing your vision to life through seamless, scalable solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <a
          className="hero-resume"
          href="https://drive.google.com/drive/folders/1_wiSxzrNS8W1k0HMCFEdgPNQXM3m2ZXs" // Direct download link
          download="Mareena_Jolly_Resume.pdf" // Optional: specify filename for the download
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;