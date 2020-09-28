import React, { useReducer } from 'react'

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT } from "../../types"

const ProjectState = (props) => {
    const initialState = {
        form: false
    }

    //Dispatch to execute actions
    const [state, dispatch] = useReducer(projectReducer, initialState)

    //functions for CRUD
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    return(
        <projectContext.Provider
            value={{
                form: state.form,
                showForm
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;