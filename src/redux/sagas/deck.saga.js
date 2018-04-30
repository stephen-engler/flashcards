import { call, put } from "redux-saga/effects";
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