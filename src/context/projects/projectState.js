import React, { useReducer } from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  FORM_PROJECT,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT,
} from "../../types";
import clientAxios from "../../config/axios";

const ProjectState = (props) => {

  const initialState = {
    projects: [],
    form: false,
    errorform: false,
    project: null,
    message: null
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
  const getProjects = async () => {
    try {
      const response = await clientAxios.get("/api/projects");

      dispatch({
        type: GET_PROJECTS,
        payload: response.data.projects
      });
    } catch (error) {
      const alert = {
        msg: "There was an error",
        category: "alerta-error"
      }
      
      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
    
  };

  //Add new project
  const addProject = async (project) => {
    try {
      const response = await clientAxios.post("/api/projects", project);
      console.log(response);
      //insert project into state
      dispatch({
        type: ADD_PROJECT,
        payload: response.data,
      });

    } catch (error) {
      const alert = {
        msg: "There was an error",
        category: "alerta-error"
      }
      
      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
  };

  //Validate Form
  const showError = () => {
    dispatch({
      type: VALIDATE_FORM,
    });
  };

  //Select project that user clicked
  const currentProject = (projectId) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: projectId,
    });
  };

  //Delete a project
  const deleteProject = async (projectId) => {
    try {
      await clientAxios.delete(`/api/projects/${projectId}`)
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      const alert = {
        msg: "There was an error",
        category: "alerta-error"
      }
      
      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })
    }
    
  };

  return (
    <projectContext.Provider
      value={{
        projects: state.projects,
        form: state.form,
        errorform: state.errorform,
        project: state.project,
        message: state.message,
        showForm,
        getProjects,
        addProject,
        showError,
        currentProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
