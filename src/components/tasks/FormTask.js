import React, { useContext, useState, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  //get projects if active
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  //get function from taskContext
  const tasksContext = useContext(taskContext);
  const {
    selectedtask,
    errortask,
    addTask,
    validateTask,
    getTasks,
    updateTask,
    cleanTask,
  } = tasksContext;

  useEffect(() => {
    if (selectedtask !== null) {
      saveTask(selectedtask);
    } else {
      saveTask({
        name: "",
      });
    }
  }, [selectedtask]);

  //form State
  const [task, saveTask] = useState({
    name: "",
  });

  //extract project name
  const { name } = task;

  //if no project is selected
  if (!project)
    return (
      <h1 className="formulario" style={{ color: "white" }}>
        Select a project..
      </h1>
    );

  //Extract current project
  const [currentProject] = project;

  //Read form values
  const handleChange = (e) => {
    saveTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validate
    if (name.trim() === "") {
      validateTask();
      return;
    }

    //if its edition
    if (selectedtask === null) {
      //add new task to taskState
      task.belongsProject = currentProject._id;
      addTask(task);
    } else {
      updateTask(task);

      cleanTask();
    }

    //get and filter tasks in the current project
    getTasks(currentProject.id);

    //Restart form
    saveTask({
      name: "",
    });
  };
  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name.."
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="contenedor-input">
          <button
            type="submit"
            className="btn btn-primario btn-submit btn-block"
          >
            {selectedtask ? "Edit Task" : "Add.."}
          </button>
        </div>
      </form>
      {errortask ? (
        <p className="mensaje error">The name of the task is required</p>
      ) : null}
    </div>
  );
};

export default FormTask;
