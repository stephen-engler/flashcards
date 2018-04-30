import { takeEvery } from "redux-saga/effects";
import { loginUserSaga, registerUserSaga } from "./user.saga";

export default function* rootSaga() {
  yield takeEvery("LOGIN_USER", loginUserSaga);
  yield takeEvery("REGISTER_USER", registerUserSaga);
}
