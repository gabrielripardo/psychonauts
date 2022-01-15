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

export const loadPsychonauts = () => dispatch => {
  return dispatch(
    apiCallBegan({
      url: `characters?limit=5`,
      data: [],
      onStart: psychonautsRequested.type,
      onSuccess: psychonautsReceived.type,
      onError: psychonautsRequestFailed.type,
    })
  );
};
