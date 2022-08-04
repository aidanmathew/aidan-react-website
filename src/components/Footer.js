import React from 'react'
import { Link } from '@material-ui/core'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GithubIcon from "@material-ui/icons/GitHub"
import InstagramIcon from "@material-ui/icons/Instagram"
import EmailIcon from "@material-ui/icons/Email"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <p> Feel free to connect with me on social media!</p>
        <div className="socialMedia">
            <Link href="https://www.linkedin.com/in/Aidan-Mathew/" target="_blank" >
                <LinkedInIcon />
            </Link>
            
            <Link href="https://github.com/aidanmathew" target="_blank" >
                <GithubIcon />
            </Link>
            <Link href="https://www.instagram.com/aidan.math3w/" target="_blank" >
                <InstagramIcon />
            </Link>
            
            <Link href="mailto:mathea40@mcmaster.ca" target="_blank" >
                <EmailIcon/>
            </Link>
        </div>
        <p> &copy; 2022 Aidan Mathew.</p>
    </div>
    
  )
}

export default Footer