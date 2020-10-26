import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function ListTask() {
  //get projects from initialState
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  //get tasks
  const tasksContext = useContext(taskContext);
  const { tasksproject } = tasksContext;

  //if no project is selected
  if (!project) return null;

  //Extract current project
  const [currentProject] = project;

  //Delete a project
  const onClickDelete = () => {
    deleteProject(currentProject._id);
  };
  return (
    <Fragment>
      <h2>Proyect: {currentProject.name}</h2>

      <ul className="listado-tareas">
        {tasksproject.length === 0 ? (
          <li className="task">
            <p>There aren't tasks</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasksproject.map((task) => (
              <CSSTransition key={task._id} timeout={200} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <div className="delete-div">
        <button
          type="button"
          className="btn btn-delete"
          onClick={onClickDelete}
        >
          Delete Proyect <FontAwesomeIcon icon={faTrash} style={{marginLeft: "5px"}}/>
        </button>
      </div>
    </Fragment>
  );
}

export default ListTask;
