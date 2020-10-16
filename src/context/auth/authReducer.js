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
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authUser: true,
        message: null,
      };

    case ERROR_LOGIN:
    case ERROR_REGISTER:
        localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        message: action.payload,
      };

    case SUCCESSFUL_LOGIN:
      return {};
    
    case GET_USER:
      return {
          ...state,
          user: action.payload
      };

    case LOG_OUT:
      return {};
    default:
      return state;
  }
};
