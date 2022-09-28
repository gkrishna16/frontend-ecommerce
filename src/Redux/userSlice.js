import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: `user`,
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },

  reducers: {
    loginStart: (state, action) => {
      state.fetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.fetching = true;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.actions;
