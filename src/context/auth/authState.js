import React, { useReducer} from "react";
import authReducer from "./authReducer"
import authContext from "./authContext"
import clientAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth"

import {
  SUCCESSFUL_REGISTER,
  ERROR_REGISTER,
  GET_USER,
  SUCCESSFUL_LOGIN,
  ERROR_LOGIN,
  LOG_OUT,
} from "../../types";



const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem("token"),
        authUser: null,
        user: null,
        message: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    const registerUser = async (data) => {
        try {
            const response = await clientAxios.post("/api/users", data);
            console.log(response.data);

            dispatch({
                type: SUCCESSFUL_REGISTER,
                payload: response.data
            });

            userAuth();
        } catch (error) {
            console.log(error.response.data.msg);

            const alert = {
                msg: error.response.data.msg,
                category: "alerta-error"
            }
            dispatch({
                type: ERROR_REGISTER,
                payload: alert
            })
        }
    }

    const userAuth = async () => {
        const token = localStorage.getItem("token");
        if(token) {
            //send token via headers
            tokenAuth(token);
        }

        try {
            const response = await clientAxios.get("/api/auth");
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });

        } catch (error) {
            dispatch({
                type: ERROR_LOGIN
            })
        }
    }


    return (
        <authContext.Provider
            value={{
                token: state.token,
                authUser: state.authUser,
                user: state.user,
                message: state.message,
                registerUser,

            }}
        >
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState;