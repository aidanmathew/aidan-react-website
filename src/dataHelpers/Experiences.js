import React from "react"
import PCC from "../media/PCC.jpg"
import MGT from "../media/MGT.jpg"
import GEOTAB from "../media/geotab.jpg"
import Work from "@material-ui/icons/Work"
import Apple from "@material-ui/icons/Apple"
import { GrReactjs } from "react-icons/gr"

export const ExperiencesList = [

    {
        title: "Undergraduate Teaching Assistant - ENGINEER 1P13",
        subtitle: "Hamilton, Ontario",
        date: "January 2023 - April 2023",
        description: "Incoming Design Studio Teaching Assistant for Engineer 1P13: ",
        skills: "D2L Brightspace, Communication, Grading, MS Office, Teaching and Mentoring",
        link: "https://www.eng.mcmaster.ca/integrated-cornerstone-design-projects-engineering-1p13",
        application: "Integrated Cornerstone Design Projects in Engineering",
        img: MGT,
        icon: <Work />
    },

    {
        title: "Undergraduate Teaching Assistant - ENGMGT 2AA3",
        subtitle: "Hamilton, Ontario",
        date: "September 2022 - December 2022",
        description: "Teaching Assistant for Engineering and Management: ",
        skills: "D2L Brightspace, Communication, Grading, MS Office",
        link: "https://www.eng.mcmaster.ca/engineering-management-program#Curriculum:~:text=ENGNMGT%202AA3%20%2D%20Communication%20Skills",
        application: "Communication Skills",
        img: MGT,
        icon: <Work />
    },

    {
        title: "Software Engineer Co-op",
        subtitle: "Mississauga, Ontario",
        date: "May 2022 - August 2022",
        description: "iOS Development - Worked with Home Health team X-Men to develop features for ",
        skills: "Swift, XCode, Azure DevOps, Jira, Confluence",
        link: "https://pointclickcare.com/industry-solutions/home-health-care/",
        application: "Care at Home Clinical App",
        img: PCC,
        icon: <Apple />
    },
    
    {
        title: "Web Developer Co-op",
        subtitle: "Oakville, Ontario",
        date: "May 2021 - August 2021",
        description: "Web Development - Worked with WFM team Griffin to create features for ",
        skills: "Javascript, React.js, material-UI, SQL, Jira, G-suite", 
        link: "https://marketplace.geotab.com/",
        application: "Geotab Marketplace",
        img: GEOTAB,
        icon: <GrReactjs />
    }
]