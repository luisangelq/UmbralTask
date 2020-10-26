import {
  SUCCESSFUL_REGISTER,
  ERROR_REGISTER,
  GET_USER,
  SUCCESSFUL_LOGIN,
  ERROR_LOGIN,
  LOG_OUT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case SUCCESSFUL_REGISTER:
    case SUCCESSFUL_LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authUser: true,
        message: null,
        loading: false
      };
    case GET_USER:
      return {
        ...state,
        authUser: true,
        user: action.payload,
        loading: false
      };

    case LOG_OUT:
    case ERROR_LOGIN:
    case ERROR_REGISTER:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        authUser: null,
        message: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
