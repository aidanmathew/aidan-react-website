import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School";
import HouseIcon from '@material-ui/icons/House';
import { ExperiencesList } from "../dataHelpers/Experiences";
import STA from "../media/STA.jpg"
import MGT from "../media/MGT.jpg"


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor={ 'black' }>

        {ExperiencesList.map((experience) => {
          return <VerticalTimelineElement 
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#ffab03", color: "#fff" }}
          icon={experience.icon}>
            <img
              style={{
                width: "10rem",
                padding: "0.5rem",
                border: "0.1rem solid black",
                borderRadius: "10px"
              }}
              src={experience.img}
              alt=""
            />
            <h3 className="vertical-timeline-element-title"> {experience.title} </h3>
            <h4 className="vertical-timeline-element-subtitle"
                style={{
                  color: "darkMagenta"
              }}
            > {experience.subtitle} </h4>
            <h5 className="vertical-timeline-element-subtitle"
                style={{
                  color: "gray"
              }}
            > {experience.date} </h5>
            <p className="experience-text">
              {experience.description} 
              <a href={experience.link} target = "_blank" rel="noopener noreferrer">
                {experience.application}
              </a>. 
            </p>
            <p className="experience-text">
              <b>Skills:</b> {experience.skills}
            </p>
          </VerticalTimelineElement>
          
        })}


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <img
            style={{
              width: "10rem",
              padding: "0.5rem",
              border: "0.1rem solid black",
              borderRadius: "10px"
            }}
            src={MGT}
            alt=""
          />
          <h3 className="vertical-timeline-element-title"> McMaster University, B.Eng.Mgt</h3>
          <h4 className="vertical-timeline-element-subtitle"
              style={{
                color: "darkMagenta"
            }}
          > Hamilton, Ontario </h4>
          <h5 className="vertical-timeline-element-subtitle"
              style={{
                color: "gray"
            }}
          > Sept 2020 - April 2025 </h5>
          <p className="experience-text"> <b>Awards:</b> McMaster Honor Award, Dean's Honor List </p>
          <p className="experience-text">
            <b>Relevant Courses:</b> Data Structures and Algorithms,
            Microprocessor Systems,
            Principals of Programming,
            Logic Design,
            Integrated Engineering Design Projects.  </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <img
            style={{
              width: "10rem",
              padding: "0.5rem",
              border: "0.1rem solid black",
              borderRadius: "10px"
            }}
            src={STA}
            alt=""
          />
          <h3 className="vertical-timeline-element-title"> St. Thomas Aquinas Catholic Secondary School</h3>
          <h4 className="vertical-timeline-element-subtitle"
              style={{
                color: "darkMagenta"
            }}
          > Oakville, Ontario </h4>
          <h5 className="vertical-timeline-element-subtitle"
              style={{
                color: "gray"
            }}
          > Sept 2016 - June 2020 </h5>
          <p className="experience-text"> Completed Ontario Secondary School Diploma and International Baccalaureate Diploma. </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<HouseIcon />}
        />

      </VerticalTimeline>
    </div>
  )
}

export default Experience