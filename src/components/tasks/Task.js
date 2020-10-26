import React, { useContext } from "react";

import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Task = ({ task }) => {
  //get projects if active
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  //get function from taskContext
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks,updateTask, saveCurrentTask } = tasksContext;

  //When user hit deleteTask btn
  const [currentProject] = project;

  const deleteTaskBtn = (taskId) => {
    deleteTask(taskId, currentProject._id);
    getTasks(currentProject.id);
  };

  //modify the task state
  const changeState = (task) => {
    task.state = !task.state;
    updateTask(task);
  };

  //Edit task
  const selectTask = (task) => {
    saveCurrentTask(task)
  }
  
  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {task.state ? (
          <button
            type="button"
            className="completo"
            onClick={() => changeState(task)}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => changeState(task)}
          >
            Incomplete
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario" style={{display:"flex", justifyContent:"space-between"}} onClick={() => selectTask(task)}>
          Edit <FontAwesomeIcon icon={faEdit}/>
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          style={{display:"flex", justifyContent:"space-between"}}
          onClick={() => deleteTaskBtn(task._id)}
        >
          Delete <FontAwesomeIcon icon={faTrash}/>
        </button>
      </div>
    </li>
  );
};

export default Task;
