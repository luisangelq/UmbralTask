import React, { Fragment } from "react";
import Task from "./Task";

function ListTask() {
  const projectTasks = [
    { name: "Choose platform", state: true },
    { name: "Choose color", state: false },
    { name: "Choose payment platform", state: true },
    { name: "Choose hosting", state: false },
  ];

  return (
    <Fragment>
      <h2>Proyect: </h2>

      <ul className="listado-tareas">
        {projectTasks.length === 0 ? (
          <li className="task">
            <p>There aren't tasks</p>
          </li>
        ) : (
          projectTasks.map((task) => <Task task={task} />)
        )}
      </ul>
      <div className="btn-eliminar">
        <button type="button" className="btn btn-eliminar btn-delete">
          Delete Proyect &times;
        </button>
      </div>
    </Fragment>
  );
}

export default ListTask;
