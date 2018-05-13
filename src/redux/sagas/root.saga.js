import { all } from "redux-saga/effects";
import userSaga from './user.saga';
import deckSaga from './deck.saga';
import cardSaga from './card.saga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    deckSaga(),
    cardSaga()
  ])
}
