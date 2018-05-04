import { call, put } from "redux-saga/effects";
import { push } from "react-router-redux";
import axios from "axios";
import {LOADING} from '../actions/loadingActions';
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
        yield put({type: LOADING.START})
        yield call(
            axios.put,
            `http://localhost:5000/api/card/${action.payload.card.id}`,
            action.payload.card,
            config,
        )
        //gets the updated deck list from the user
        //why we need to send the deck
        yield put({
            type: 'USER_SELECTED_DECK',
            payload: action.payload.deck
        })
        yield put({type: LOADING.DONE})
    }catch(error){
        yield console.log('an error in update card ', error)
    }
}

//DELETE_CARD
///action.payload is an object {card: card to delete, deck: the deck object}
export function* deleteCardSaga(action){
    try{
        yield put({type: LOADING.START})
        yield call(
            axios.delete,
            `http://localhost:5000/api/card/${action.payload.card.id}`,
            config,
        )
        yield put({
            type: 'USER_SELECTED_DECK',
            payload: action.payload.deck
        })
        yield put({type: LOADING.DONE})
    }catch(error){
        yield console.log('an error in delete card saga ', error);
    }
}

//DELETE_DECK 
export function* deleteDeckSaga(action){
    try{
        yield put({type: LOADING.START})
        yield call(axios.delete, 
        `http://localhost:5000/api/deck/${action.payload.id}`,
        config,
        )
        yield put({
            type: 'GET_USER_DECKS',
            payload: action.payload
        })
        yield put({type: LOADING.DONE})
    }catch(error){
        yield console.log('an error in delete card saga ', error);
    }
}

//UPDATE_DECK
export function* updateDeckSaga(action){
    try{
        yield put({type: LOADING.START})
        yield call(
            axios.put,
            `http://localhost:5000/api/deck/${action.payload.id}`,
            action.payload,
            config
        )
        yield put({
            type: 'GET_USER_DECKS'
        })
        yield put({type: LOADING.DONE})
    }catch(error){
        yield console.log('error in update deck saga ', error);
    }
}