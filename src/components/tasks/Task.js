import React, { useContext } from "react";

import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  //get projects if active
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  //get function from taskContext
  const tasksContext = useContext(taskContext);
  const { deleteTask, getTasks, changeTaskState, saveCurrentTask } = tasksContext;

  //When user hit deleteTask btn
  const [currentProject] = project;

  const deleteTaskBtn = (taskId) => {
    deleteTask(taskId);
    getTasks(currentProject.id);
  };

  //modify the task state
  const changeState = (task) => {
    task.state = !task.state;
    changeTaskState(task);
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
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={() => selectTask(task)}>
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => deleteTaskBtn(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
