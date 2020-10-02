import React, { useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT, VALIDATE_FORM, CURRENT_PROJECT } from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Virtual Shop" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "WebSite Design" },
    { id: 4, name: "Mern" },
  ];

  const initialState = {
    projects: [],
    form: false,
    errorform: false,
    project: null
  };

  //Dispatch to execute actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  //functions for CRUD
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  //get projects
  const getProjects = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  //Add new project
  const addProject = project => {
      project.id = uuidv4();
      //insert project into state
      dispatch({
          type: ADD_PROJECT,
          payload: project
      })
  }

  //Validate Form
  const showError = () => {
      dispatch({
          type: VALIDATE_FORM
      })
  }

  //Select project that user clicked
  const currentProject = (projectId) => {
      dispatch({
        type: CURRENT_PROJECT,
        payload: projectId
      })
  }

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorform: state.errorform,
        project: state.project,
        showForm,
        getProjects,
        addProject,
        showError,
        currentProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
