import { LOG_IN_START, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../actions";
const initialState = {
  error: "",
  friends: [],
  loggingIn: false,
  isLoggedIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_START:
      return {
        ...state,
        loggingIn: true,
        isLoggedIn: false,
        error: ""
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: true,
        error: ""
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        isLoggedIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};
export default reducer;
