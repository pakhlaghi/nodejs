import { AUTHENTICATE, LOGOUT } from "./type";

export default (state = { isAuthenticated: false }, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return authenticate(state, action);
    case LOGOUT:
      return logout(state, action);
  }
  return state;
};

const authenticate = (state, action) => {
  return { isAuthenticated: !!sessionStorage.getItem("token"), ...state };
};

const logout = (state, action) => {
  return { isAuthenticated: false, ...state };
};
