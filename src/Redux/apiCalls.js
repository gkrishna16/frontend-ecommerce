import { publicRequest } from "../requestMethods";
import { loginStart, loginFailure } from "./userSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart);
  try {
    const res = await publicRequest(`/auth/login`, user);
  } catch (error) {
    dispatch(loginFailure());
  }
};
