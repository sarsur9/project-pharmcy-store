import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";

export const login = async (dispatch, user) => {
  console.log(user);
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};

export const logoutUser = async (dispatch, user) => {
  dispatch(logout());
};

export const getUsers = async (dispatch) => {
  try {
    const res = await userRequest.get("/users");
    alert("open your log to see the list");
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const addProduct = async (dispatch, product) => {
  try {
    const res = await userRequest.post("/products", product);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};