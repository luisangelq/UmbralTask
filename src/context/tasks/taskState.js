import React, { useReducer } from "react";

import taskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import { v4 as uuidv4 } from 'uuid';
import { ADD_TASK, TASKS_PROJECT, VALIDATE_TASK, DELETE_TASK, STATE_TASK, CURRENT_TASK, UPDATE_TASK, CLEAN_TASK } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: "Choose platform", state: true, projectId: 1 },
      { id: 2, name: "Choose color", state: false, projectId: 4 },
      { id: 3, name: "Choose payment platform", state: true, projectId: 3 },
      { id: 4, name: "Choose platform", state: true, projectId: 2 },
      { id: 5, name: "Choose color", state: false, projectId: 2 },
      { id: 6, name: "Choose payment platform", state: true, projectId: 1 },
      { id: 7, name: "Choose platform", state: true, projectId: 3 },
      { id: 8, name: "Choose color", state: false, projectId: 1 },
      { id: 9, name: "Choose payment platform", state: true, projectId: 3 },
      { id: 10, name: "Choose platform", state: true, projectId: 2 },
      { id: 11, name: "Choose color", state: false, projectId: 1 },
      { id: 12, name: "Choose payment platform", state: true, projectId: 3 },
    ],
    tasksproject: null,
    errortask: false,
    selectedtask: null
  };

  //Dispatch to execute actions
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //functions

  //get tasks from a specific project
  const getTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  //add task to project selected
  const addTask = (task) => {
    task.id = uuidv4();
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  //validate and show an error if neccesary
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK
    })
  }

  //Delete task by id
  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId
    })
  } 

  //Change state of each task
  const changeTaskState = (task) => {
    dispatch({
      type: STATE_TASK,
      payload: task
    })
  }

  //Extract data task for edition
  const saveCurrentTask = (task) => {
    dispatch({
      type: CURRENT_TASK,
      payload: task
    })
  }

  //Edit task
  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
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
        changeTaskState,
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
