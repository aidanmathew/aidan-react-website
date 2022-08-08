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
          <h3 className="vertical-timeline-element-title"> St. Thomas Aquinas Catholic Secondary School</h3>
          <h4 className="vertical-timeline-element-subtitle"> Oakville, Ontario </h4>
          <h5 className="vertical-timeline-element-subtitle"> Sept 2016 - June 2020 </h5>
          <p> Completed Ontario Secondary School Diploma and International Baccalaureate Diploma. </p>
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