import { call, put } from "redux-saga/effects";
import { NavigationActions } from "react-navigation";
import axios from "axios";

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true
};

export function* loginUserSaga(action) {
  try {
    yield call(
      axios.post,
      "http://localhost:5000/api/user/login",
      action.payload,
      config
    );
    yield put({
      type: "SET_VIEW",
      payload: "Study"
    });
  } catch (error) {
    yield console.log("an error logging in user ", error);
  }
}

export function* registerUserSaga(action){
  try{
    yield call(
      axios.post,
      "http://localhost:5000/api/user/register",
      action.payload,
      config
    );
    yield put({
      type: "SET_VIEW",
      payload: 'Login'
    })

  }catch(error){
    yield console.log('an error registering the user ', error)
  }
}
