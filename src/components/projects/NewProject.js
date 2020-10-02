import React, { Fragment, useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  //get state from form
  const projectsContext = useContext(projectContext);
  const { form, errorform, showForm, addProject, showError} = projectsContext;

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

  //extract project name
  const { name } = project;
  //When the user send a project
  const onSubmitProject = (e) => {
    e.preventDefault();

    //validate project
    if(name === "") {
      showError();
      console.log("nada");
      return;
    }

    //Add State
    addProject(project);

    //restart form
    saveProject({
      name: ""
    })

  };

  

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

      { errorform ? <p className="mensaje error">the name of the project is forced</p> : null}
    </Fragment>
  );
};

export default NewProject;
