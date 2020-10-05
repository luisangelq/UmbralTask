import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const FormTask = () => {
  //get projects if active
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  //if no project is selected
  if(!project) return <h1 className="formulario" style={{color: "white"}}>Select a project..</h1>;

  //Extract current project
  const [currentProject] = project;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name.."
            name="name"
          />
        </div>

        <div className="contenedor-input">
          <button
            type="submit"
            className="btn btn-primario btn-submit btn-block"
          >
            Add Task..
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTask;
