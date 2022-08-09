import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import HouseIcon from '@material-ui/icons/House';


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor={ 'black' }>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> McMaster University, B.Eng.Mgt</h3>
          <h4 className="vertical-timeline-element-subtitle"> Hamilton, Ontario </h4>
          <h5 className="vertical-timeline-element-subtitle"> Sept 2020 - April 2025 </h5>
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
          <h3 className="vertical-timeline-element-title"> St. Thomas Aquinas Catholic Secondary School</h3>
          <h4 className="vertical-timeline-element-subtitle"> Oakville, Ontario </h4>
          <h5 className="vertical-timeline-element-subtitle"> Sept 2016 - June 2020 </h5>
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