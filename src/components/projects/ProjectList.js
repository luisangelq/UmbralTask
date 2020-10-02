import React, { useContext, useEffect } from 'react'
import Project from "./Project"
import projectContext from "../../context/projects/projectContext";

const ProjectList = () => {
    //get projects from initialState 
    const projectsContext = useContext(projectContext); 
    const { projects, getProjects } = projectsContext;

    useEffect(() => {
        getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Check if projects have content
    if(projects.length === 0) return null;

    

    return (
        
        <ul className="listado-proyectos">
            {projects.map(project => (
                <Project 
                    key={project.id}
                    project={project}
                />
            ))}
        </ul>
    )
}

export default ProjectList
