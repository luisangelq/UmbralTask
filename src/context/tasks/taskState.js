import React, { useReducer } from "react";

import taskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import { ADD_TASK, TASKS_PROJECT, VALIDATE_TASK, DELETE_TASK, CURRENT_TASK, UPDATE_TASK, CLEAN_TASK } from "../../types";
import clientAxios from "../../config/axios";

const TaskState = (props) => {
  const initialState = {
    tasksproject: [],
    errortask: false,
    selectedtask: null
  };

  //Dispatch to execute actions
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //functions

  //get tasks from a specific project
  const getTasks = async (belongsProject) => {
    console.log(belongsProject);
    try {
      const response = await clientAxios.get('/api/tasks', {params: {belongsProject}})
      console.log(response);
      dispatch({
        type: TASKS_PROJECT,
        payload: response.data.tasks,
      })
    } catch (error) {
      console.log(error);
    }
    return;
  };

  //add task to project selected
  const addTask = async (task) => {
    try {
      const response = await clientAxios.post('/api/tasks', task);
        console.log(response);
      dispatch({
        type: ADD_TASK,
        payload: task,
      });
    } catch (error) {
      console.log(error);
    }
    
  };

  //validate and show an error if neccesary
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  }

  //Delete task by id
  const deleteTask = async (taskId, belongsProject) => {
    try {
      await clientAxios.delete(`/api/tasks/${taskId}`, { params: {belongsProject}})
      dispatch({
        type: DELETE_TASK,
        payload: taskId
      })
    } catch (error) {
      console.log(error);
    }
  } 

  //Edit task
  const updateTask = async (task) => {
    try {
      const response = await clientAxios.put(`/api/tasks/${task._id}`, task);
      console.log(response);
      dispatch({
        type: UPDATE_TASK,
        payload: response.data.task
      })
    } catch (error) {
      console.log(error);
    }
  }

  //Extract data task for edition
  const saveCurrentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }

  

  //Delete Task selected
  const cleanTask = () => {
    dispatch({
      type: CLEAN_TASK,
    })
  }

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksproject: state.tasksproject,
        errortask: state.errortask,
        selectedtask: state.selectedtask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        saveCurrentTask,
        updateTask,
        cleanTask
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};
export default TaskState;
