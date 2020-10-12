import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ProjectList = () => {
  //get projects from initialState
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
    getProjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Check if projects have content
  if (projects.length === 0)
    return (
      <p style={{ color: "white" }}>
        There aren't any project, let's start creating one
      </p>
    );

  return (
    <ul className="listado-proyectos">
      <TransitionGroup >
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={200} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
