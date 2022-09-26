import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: `user`,
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },

    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;
