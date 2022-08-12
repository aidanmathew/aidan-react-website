import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import TypeIt from 'typeit-react'
import "../styles/Home.css"
import Aidan from "../media/IMG_0194.jpeg"
import { Link } from '@material-ui/core'
function Home() {
  return (
    <div className="home">

      <div className="about">

        <img
          className="aidanImage"
          src={Aidan}
          alt=""
        />
        
        
        <h2> Hello! I'm <span className="gradient">Aidan</span>! </h2>

        <div className="prompt">
          <p>I am <TypeIt
          options={{
            speed: 90,
            waitUntilVisible: true,
            loop: true,
          }}
          getBeforeInit={(instance) => {
            instance.type("a Computer Engineer.")
            .pause(1000)
            .delete()
            .type("a Web Developer.")
            .pause(1000)
            .delete()
            .type("an Athlete.")
            .pause(1000)
            .delete()
            .type("a Software Developer.")
            .pause(1000)
            .delete()
            .type("a Problem Solver.")
            .pause(1000)
            .delete()
            .type("an Analytical Thinker.")
            .pause(1000)
            .delete()
            // Remember to return it!
            return instance;

          }}></TypeIt></p>
          
          <Link href="http://www.linkedin.com/in/aidan-mathew" target='_blank' rel='noopener'>
            <LinkedInIcon />
          </Link>

          <Link href="mailto:mathea40@mcmaster.ca">
            <EmailIcon />
          </Link>

          <Link href="https://github.com/aidanmathew">
            <GitHubIcon />
          </Link>

        </div>
      </div>

      <div className="skills">
        <h1> About Me </h1>
        <ol className="list">
          <li className="item">
            <span>
              I am a 3rd year Computer Engineering and Management student at McMaster University.
              With a passion for technology,
              I have already completed 8-months of co-op and I am looking to gain experience in my next co-op term (May 2023).
              I created this website to practice my programming skills, and display my projects and experiences.
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home