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

export function* getDecksSaga(action){
    try{
        const decks = yield call(
            axios.get,
            'http://localhost:5000/api/deck',
            config
        )
        yield put({
            type: 'ALL_DECKS',
            payload: decks.data
        })

    }catch(error){
        yield console.log('an error getting')
    }
}

export function* getCardsSaga(action){
    try{
        yield put({
            type: 'CHOOSEN_DECK',
            payload: action.payload
        })
        const cards = yield call(
            axios.get,
            `http://localhost:5000/api/deck/cards/${action.payload.id}`,
            config
        )
        yield put({
            type: 'ALL_CARDS',
            payload: cards.data
        })
        yield put(push('/cards'))
        //this is where we will navigate the user to the next screen
    }catch(error){
        yield console.log('an error getting the cards ', error);
    }
}