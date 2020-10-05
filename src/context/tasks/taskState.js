import React, { useReducer } from "react";

import taskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import { TASKS_PROJECT } from "../../types";


const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "Choose platform", state: true, projectId: 1 },
      { name: "Choose color", state: false, projectId: 4},
      { name: "Choose payment platform", state: true, projectId: 3},
      { name: "Choose platform", state: true, projectId: 2 },
      { name: "Choose color", state: false, projectId: 2},
      { name: "Choose payment platform", state: true, projectId: 1},
      { name: "Choose platform", state: true, projectId: 3 },
      { name: "Choose color", state: false, projectId: 1},
      { name: "Choose payment platform", state: true, projectId: 3},
      { name: "Choose platform", state: true, projectId: 2 },
      { name: "Choose color", state: false, projectId: 1},
      { name: "Choose payment platform", state: true, projectId: 3},
    ],
    tasksproject: null
  };

  //Dispatch to execute actions
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //functions

  //get tasks from a specific project
  const getTasks = (projectId) => {
      dispatch({
          type: TASKS_PROJECT,
          payload: projectId
      })
  }

  return (
  <taskContext.Provider
    value={{
        tasks: state.tasks,
        tasksproject: state.tasksproject,
        getTasks,
    }}  
    >
        {props.children}
    </taskContext.Provider>
  )
};
export default TaskState;
