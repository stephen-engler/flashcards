import { call, put } from "redux-saga/effects";
import { push } from "react-router-redux";
import axios from "axios";
//config for axios requests
//axios doesn't send cookies by default
//we want it to
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true
};
//'UPDATE_CARD'
//action.payload is an object {card: card to update, deck: the deck object}
export function* updateCardSaga(action){
    try{
        yield call(
            axios.put,
            `http://localhost:5000/api/deck/card/${action.payload.card.id}`,
            action.payload.card,
            config,
        )
        //gets the updated deck list from the user
        //why we need to send the deck
        yield put({
            type: 'USER_SELECTED_DECK',
            payload: action.payload.deck
        })
    }catch(error){
        yield console.log('an error in update card ', error)
    }
}

//DELETE_CARD
///action.payload is an object {card: card to delete, deck: the deck object}
export function* deleteCardSaga(action){
    try{
        yield call(
            axios.delete,
            `http://localhost:5000/api/deck/card/${action.payload.card.id}`,
            config,
        )
        yield put({
            type: 'USER_SELECTED_DECK',
            payload: action.payload.deck
        })
    }catch(error){
        yield console.log('an error in delete card saga ', error);
    }
}