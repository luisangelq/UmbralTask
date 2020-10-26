import React, { useContext } from "react";

import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  //get state from projects
  const projectsContext = useContext(projectContext);
  const { currentProject } = projectsContext;

  //get function from task context
  const tasksContext = useContext(taskContext);
  const { getTasks } = tasksContext;

  //function to add current project
  const selectProject = (id) => {
    currentProject(id); //pin up 
    getTasks(id); //filter tasks
  }

  return (
    <li>
      <button type="button" 
      className="btn btn-blank"
      onClick={() => selectProject(project._id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
