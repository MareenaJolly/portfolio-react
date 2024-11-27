import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profss.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a MERN stack developer from Kerala with experience building dynamic, scalable web applications. My background as a Product Support Engineer at Zoho Corporation has sharpened my troubleshooting skills, allowing me to create seamless, user-friendly solutions. 
                        Combining development expertise with support experience, I deliver efficient and tailored digital solutions.</p>
                    <p>My passion for MERN stack development is rooted in the art of bringing ideas to life through code, With MongoDB, Express, React, and Node.js as my tools</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"65%"}}/></div>
                    <div className="about-skill"><p>JavaScript </p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>MongoDB</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Express JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>MySQL</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Node JS</p><hr style={{width:"65%"}}/></div>
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>6</h1>
                <p>MONTHS OF INTERNSHIP EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>40+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>8</h1>
                <p>MONTHS OF EXPERIENCE  IN PRODUCT SUPPORT</p>

            </div>
        </div>
    </div>
  )
}

export default About