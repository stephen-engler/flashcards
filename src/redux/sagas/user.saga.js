import { call, put } from "redux-saga/effects";
import axios from "axios";
import {push} from 'react-router-redux';
import {LOADING } from '../actions/loadingActions'
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
    yield put({
      type: LOADING.START
    })
    yield call(
      axios.post,
      "http://localhost:5000/api/user/login",
      action.payload,
      config
    );
    yield put({
      type: 'GET_USER_INFO'
    })
    yield put({type: LOADING.DONE})
    yield put(push('/manage'));

  } catch (error) {
    yield console.log("an error logging in user ", error);
  }
}
//api/user/register route to register user
//changes the view to login
export function* registerUserSaga(action){
  try{
    yield put({type: LOADING.START})
    yield call(
      axios.post,
      "http://localhost:5000/api/user/register",
      action.payload,
      config
    );
    yield put({type: LOADING.DONE})
    yield put(push('/login'));

  }catch(error){
    yield console.log('an error registering the user ', error)
  }
}

export function* getUserInfoSaga(action){
  try{
    yield put({type: LOADING.START})
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
    yield put({type: LOADING.DONE})

  }catch(error){
    yield console.log('an error getting the user info ', error);
    yield put(push('/login'))
  }
}

//LOGOUT_USER
export function* logoutUserSaga(action){
  try{
    yield call(
      axios.get,
      'http://localhost:5000/api/user/logout',
      config
    )
    yield put(push('/login'))
  }catch(error){
    yield console.log('an error logginh out the user')
  }
}
