import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {push} from 'react-router-redux';
import {LOADING } from '../actions/loadingActions';
import {DECKS} from '../actions/deckActions';
import {USER} from '../actions/userActions';
//config for axios requests
//axios doesn't send cookies by default
//we want it to
const host = "http://localhost:5000/";
// const host = "https://lit-hamlet-45219.herokuapp.com/";
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true
};
//api/user/login router
//changes the view to Study if successfully logged in
function* loginUserSaga(action) {
  try {
    yield put({
      type: LOADING.START
    })
    yield call(
      axios.post,
      `${host}api/user/login`,
      action.payload,
      config
    );
    yield put({
      type: 'GET_USER_INFO'
    })
    yield put({
      type: DECKS.GET
    })
    yield put({type: LOADING.DONE})
    yield put(push('/manage'));

  } catch (error) {
    yield console.log("an error logging in user ", error);
  }
}
//api/user/register route to register user
//changes the view to login
function* registerUserSaga(action){
  try{
    yield put({type: LOADING.START})
    yield call(
      axios.post,
      `${host}api/user/register`,
      action.payload,
      config
    );
    yield put({type: LOADING.DONE})
    yield put(push('/login'));

  }catch(error){
    yield console.log('an error registering the user ', error)
    yield put({type: 'ERROR_REGISTERING_USER'})
  }
}

function* getUserInfoSaga(action){
  try{
    yield put({type: LOADING.START})
    const userInfo = yield call(
      axios.get,
      `${host}api/user/`,
      config
    );
    yield console.log('in get user info saga ', userInfo);
    yield put({
      type: 'SET_USER',
      payload: {id: userInfo.data.id, username: userInfo.data.username}
    })
    yield put(push('/manage'))
    yield put({type: LOADING.DONE})

  }catch(error){
    yield console.log('an error getting the user info ', error);
    yield put(push('/login'))
  }
}

//LOGOUT_USER
function* logoutUserSaga(action){
  try{
    yield call(
      axios.get,
      `${host}api/user/logout`,
      config
    )
    yield put(push('/login'))
  }catch(error){
    yield console.log('an error logginh out the user')
  }
}

function* userSaga(){
  yield takeLatest(USER.LOGIN, loginUserSaga);
  yield takeLatest(USER.REGISTER, registerUserSaga);
  yield takeLatest(USER.INFO, getUserInfoSaga);
  yield takeLatest(USER.LOGOUT, logoutUserSaga);
}

export default userSaga;
