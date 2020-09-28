import React from 'react'
import Project from "./Project"

const ProjectList = () => {

    const projects = [
        {name: "Virtual Shop"},
        {name: "Intranet"},
        {name: "WebSite Design"},
    ]

    return (
        
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project 
                    project={project}
                />
            ))}
        </ul>
    )
}

export default ProjectList