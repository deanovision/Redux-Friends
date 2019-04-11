import axios from "axios";

export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOG_IN_START });
  return axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({
        type: LOG_IN_SUCCESS,
        payload: res.data.payload
      });
    })
    .catch(err => {
      console.log(err.response.data.error);
      dispatch({
        type: LOG_IN_FAILURE,
        payload: err.response.data.error
      });
    });
};
