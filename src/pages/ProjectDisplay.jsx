import React from 'react'
import { useParams } from 'react-router-dom'
import OpenInNew from '@material-ui/icons/OpenInNew'
import { ProjectList } from '../dataHelpers/ProjectList'
import '../styles/ProjectDisplay.css'
import { Link } from '@material-ui/core'

function ProjectDisplay() {
  const { id } = useParams()

  const project = ProjectList[id]

  return (
    <div className="project">
      <h1> {project.name} </h1>
      <img src={project.image} alt="" />
      <p>
        <b>Skills: </b> {project.skills}
      </p>
      <Link href={project.link} target="_blank">
        <OpenInNew />
      </Link>
    </div>
  )
}

export default ProjectDisplay
