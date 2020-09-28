import React, { Fragment, useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  //get state
  const projectsContext = useContext(projectContext);
  const { form, showForm } = projectsContext;

  //state for project
  const [project, saveProject] = useState({
    name: "",
  });

  //Read input content
  const onChangeProject = (e) => {
    saveProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  //When the user send a project
  const onSubmitProject = (e) => {
    e.preventDefault();
  };

  //extract project name
  const { name } = project;

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario" onClick={() => showForm()}>
        New Project
      </button>

      {form ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            value={name}
            onChange={onChangeProject}
          />

          <button type="submit" className="btn btn-block btn-primario">
            Add Project
          </button>
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
