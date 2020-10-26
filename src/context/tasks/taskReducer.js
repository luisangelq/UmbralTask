import { ADD_TASK, CLEAN_TASK, CURRENT_TASK, DELETE_TASK, TASKS_PROJECT, UPDATE_TASK, VALIDATE_TASK } from "../../types";

export default (state, action) => {
    switch(action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                tasksproject: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                tasksproject: [action.payload, ...state.tasksproject],
                errortask: false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                errortask: true
            }
        case DELETE_TASK:
            return {
                ...state,
                tasksproject: state.tasksproject.filter(task => task._id !== action.payload)
            }
        case CURRENT_TASK:
            return {
                ...state,
                selectedtask: action.payload
            }
        case UPDATE_TASK:
            return {
                ...state,
                tasksproject: state.tasksproject.map(task => task._id === action.payload._id ? action.payload : task)
            }
        case CLEAN_TASK:
            return {
                ...state,
                selectedtask: null
            }
        default:
            return state;
    }
}