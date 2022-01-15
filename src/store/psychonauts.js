import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./actions";

const slice = createSlice({
  name: "psychonauts",
  initialState: {
    list: [],
    loading: false,
  },

  reducers: {
    psychonautsRequested: (psychonauts, action) => {
      psychonauts.loading = true;
    },

    psychonautsReceived: (psychonauts, action) => {
      psychonauts.list = action.payload;
      console.log("reducer");
      console.log(psychonauts.list);
      psychonauts.loading = false;
    },

    psychonautsRequestFailed: (psychonauts, action) => {
      psychonauts.loading = false;
    },
  },
});

export default slice.reducer;

const { psychonautsRequested, psychonautsReceived, psychonautsRequestFailed } =
  slice.actions;

export const loadPsychonauts = limit => dispatch => {
  return dispatch(
    apiCallBegan({
      url: `characters?limit=${limit}`,
      onStart: psychonautsRequested.type,
      onSuccess: psychonautsReceived.type,
      onError: psychonautsRequestFailed.type,
    })
  );
};

export const searchPsychonaut = keyword => dispatch => {
  return dispatch(
    apiCallBegan({
      url: `characters?name=${keyword}`,
      onStart: psychonautsRequested.type,
      onSuccess: psychonautsReceived.type,
      onError: psychonautsRequestFailed.type,
    })
  );
};
