import { takeEvery } from "redux-saga/effects";
import {
  loginUserSaga,
  registerUserSaga,
  getUserInfoSaga,
  
} from "./user.saga";
import { getDecksSaga, getCardsSaga, addDeckSaga, addCardSaga } from "./deck.saga";
import {updateCardSaga, deleteCardSaga} from './updateDelete.saga'
export default function* rootSaga() {
  yield takeEvery("LOGIN_USER", loginUserSaga);
  yield takeEvery("REGISTER_USER", registerUserSaga);
  yield takeEvery('GET_USER_INFO', getUserInfoSaga);
  yield takeEvery('GET_USER_DECKS', getDecksSaga);
  yield takeEvery('USER_SELECTED_DECK', getCardsSaga);
  yield takeEvery('ADD_DECK_NAME', addDeckSaga);
  yield takeEvery('ADD_CARD', addCardSaga);
  yield takeEvery('UPDATE_CARD', updateCardSaga);
  yield takeEvery('DELETE_CARD', deleteCardSaga);
}
