import { takeEvery } from "redux-saga/effects";
import { loginUserSaga } from "./user.saga";

export default function* rootSaga() {
  yield takeEvery("LOGIN_USER", loginUserSaga);
}
