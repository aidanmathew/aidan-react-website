import React from 'react'
import ProjectItem from "../components/ProjectItem"
import "../styles/Projects.css"
import { ProjectList } from '../dataHelpers/ProjectList'

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div classname="projectList">
        {ProjectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image} />
        })}
      </div>
    </div>
  )
}

export default Projects;