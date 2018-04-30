import { takeEvery } from "redux-saga/effects";
import { loginUserSaga, registerUserSaga, getUserInfoSaga } from "./user.saga";
import { getDecksSaga } from './deck.saga';
export default function* rootSaga() {
  yield takeEvery("LOGIN_USER", loginUserSaga);
  yield takeEvery("REGISTER_USER", registerUserSaga);
  yield takeEvery('GET_USER_INFO', getUserInfoSaga);
  yield takeEvery('GET_USER_DECKS', getDecksSaga);
}
