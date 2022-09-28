import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export async function login(dispatch, user) {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(`/auth/login`, user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(loginFailure());
  }
}
