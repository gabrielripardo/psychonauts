import axios from "axios";
import * as actions from "../actions";

const api =
  ({ dispatch }) =>
  next =>
  async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL: "https://psychonauts-api.herokuapp.com/api/",
        url,
        method,
      });

      const list = response.data.length > 0 ? response.data : [response.data];

      // General
      dispatch(actions.apiCallSucess(list));
      console.log(`## Response data`);
      console.log(response.data);
      console.log(typeof list);
      console.log(response.data.length);
      // Specific
      if (onSuccess)
        dispatch({
          type: onSuccess,
          payload: list,
        });
    } catch (error) {
      // General
      dispatch(actions.apiCallFailed(error.message));
      // Specific
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
