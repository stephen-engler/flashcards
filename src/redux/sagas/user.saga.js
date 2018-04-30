import { call, put } from "redux-saga/effects";
import axios from "axios";
//config for axios requests
//axios doesn't send cookies by default
//we want it to
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true
};
//api/user/login router
//changes the view to Study if successfully logged in
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
    yield put({
      type: 'GET_USER_INFO'
    })
  } catch (error) {
    yield console.log("an error logging in user ", error);
  }
}
//api/user/register route to register user
//changes the view to login
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

export function* getUserInfoSaga(action){
  try{
    const userInfo = yield call(
      axios.get,
      'http://localhost:5000/api/user/',
      config
    );
    yield console.log('in get user info saga ', userInfo);
    yield put({
      type: 'SET_USER',
      payload: {id: userInfo.data.id, username: userInfo.data.username}
    })

  }catch(error){
    yield console.log('an error getting the user info ', error);
    yield put({
      type: 'SET_VIEW',
      payload: 'Login',
    })
  }
}
