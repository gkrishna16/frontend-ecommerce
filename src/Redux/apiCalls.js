import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";

export async function login(dispatch, user) {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post(`/user/login`, user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    console.log(error);
    dispatch(loginFailure);
  }
}
