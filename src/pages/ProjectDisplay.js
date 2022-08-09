import React from 'react'
import { useParams } from 'react-router-dom'
import OpenInNew from '@material-ui/icons/OpenInNew';
import { ProjectList } from '../dataHelpers/ProjectList'
import "../styles/ProjectDisplay.css"


function ProjectDisplay() {
    
    const { id } = useParams();

    const project = ProjectList[id]

    return (
    <div className="project">
        <h1> {project.name} </h1>
        <img src={project.image} alt="" />
        <p>
            <b>Skills: </b> {project.skills}
        </p>
        <OpenInNew />
    </div>
  )
}

export default ProjectDisplay;