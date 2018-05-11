import { call, put } from "redux-saga/effects";
import { push } from "react-router-redux";
import axios from "axios";
import {LOADING} from '../actions/loadingActions';
import {DECKS} from '../actions/deckActions'
//config for axios requests
//axios doesn't send cookies by default
//we want it to

const host = "http://localhost:5000/";
// const host = "https://lit-hamlet-45219.herokuapp.com/";
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
            `${host}api/card/${action.payload.card.id}`,
            action.payload.card,
            config,
        )
        //gets the updated deck list from the user
        //why we need to send the deck
        yield put({
            type: DECKS.SELECTED,
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
            `${host}api/card/${action.payload.card.id}`,
            config,
        )
        yield put({
            type: DECKS.SELECTED,
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
        `${host}api/deck/${action.payload.id}`,
        config,
        )
        yield put({
            type: DECKS.GET,
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
            `${host}api/deck/${action.payload.id}`,
            action.payload,
            config
        )
        yield put({
            type: DECKS.GET
        })
        yield put({type: LOADING.DONE})
    }catch(error){
        yield console.log('error in update deck saga ', error);
    }
}