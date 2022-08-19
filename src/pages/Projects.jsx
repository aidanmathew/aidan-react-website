import React from 'react'
// import ProjectItem from "../components/ProjectItem"
import Card from "@mui/material/Card"
import "../styles/Projects.css"
import { ProjectList } from '../dataHelpers/ProjectList'
import { CardActionArea, CardContent, CardMedia } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Projects() {
  const navigate = useNavigate();
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <Card 
            className="projectItem" 
            id={idx}
            name={project.name} 
            image={project.image}
            key={project}
          >
            <CardActionArea onClick={() => {
              navigate("/projects/" + idx)
            }}>
              <CardMedia
                component="img"
                height="240"
                image={project.image}
              />
              <CardContent style={{backgroundColor: "white"}}>
                <p style={{color: "rgba(57,0,86,1)", fontSize: "1.5rem", margin: "0"}}>{project.name}</p>
              </CardContent>
              

            </CardActionArea>
          </Card>
        })}
      </div>
    </div>
  )
}

export default Projects;