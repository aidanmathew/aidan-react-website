import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GitHubIcon from '@material-ui/icons/GitHub'
import TypeIt from 'typeit-react'
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">

      <div className="about">
        <h2> Hello! My name is <span className="gradient">Aidan</span>! </h2>

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
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>

      <div className="skills">
        <h1> My Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Languages </h2>
            <span>
              Java, Python, C/C++, Javascript, Swift, R, SQL
            </span>
          </li>
          <li className="item">
            <h2> Web Development </h2>
            <span>
              ReactJS, HTML, CSS, Bootstrap, Material-UI, react-router-dom, npm, yarn, NodeJS
            </span>
          </li>
          <li className="item">
            <h2> Tools </h2>
            <span>
              VS Code, Git, MS Office, G-suite, XCode, Jira, Confluence, Slack
            </span>
          </li>

        </ol>
      </div>
    </div>
  )
}

export default Home