import React, { useReducer } from "react";
import AuthReducer from "./authReducer";
import authContext from "./authContext";
import clientAxios from "../../config/axios";
import tokenAuth from "../../config/token";

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
    message: null,
    loading: true
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async (dataUser) => {
    try {
      const response = await clientAxios.post("/api/users", dataUser);
      console.log(response.data);

      dispatch({
        type: SUCCESSFUL_REGISTER,
        payload: response.data,
      });

      userAuth();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      };
      dispatch({
        type: ERROR_REGISTER,
        payload: alert,
      });
    }
  };

  const userAuth = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      //send token via headers
      tokenAuth(token);
    }

    try {
      const response = await clientAxios.get("/api/auth");

      dispatch({
        type: GET_USER,
        payload: response.data.user,
      });
    } catch (error) {
      
      dispatch({
        type: ERROR_LOGIN,
      });
    }
  };

  const logIn = async (dataUser) => {
    try {
        const response = await clientAxios.post("/api/auth", dataUser)
        
        dispatch({
            type: SUCCESSFUL_LOGIN,
            payload: response.data
        });
        
        userAuth();

    } catch (error) {
      

      const alert = {
        msg: error.response.data.msg,
        category: "alerta-error",
      }
      dispatch({
        type: ERROR_LOGIN,
        payload: alert,
      });
    }
  };

  const logOut = () => {
    dispatch({
      type: LOG_OUT
    })
  }

  return (
    <authContext.Provider
      value={{
        token: state.token,
        authUser: state.authUser,
        user: state.user,
        message: state.message,
        loading: state.loading,
        registerUser,
        userAuth,
        logIn,
        logOut
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
