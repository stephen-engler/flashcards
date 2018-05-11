import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import axios from "axios";
import {LOADING} from '../actions/loadingActions';
import {DECKS} from '../actions/deckActions';
//config for axios requests
//axios doesn't send cookies by default
//we want it to
// const host = "https://lit-hamlet-45219.herokuapp.com/";
const host = "http://localhost:5000/";

const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true
};
//GET_USER_DECKS  DECKS.GET
function* getDecksSaga(action){
    try{
        yield put({type: LOADING.START})
        //gets all decks from server
        const decks = yield call(
            axios.get,
            `${host}api/deck`,
            config
        )
        //sends them to redux store deckList Reducer
        yield put({
            type: DECKS.ALL,
            payload: decks.data
        })
        yield put({type: LOADING.DONE})

    }catch(error){
        yield console.log('an error getting')
    }
}

//ADD_DECK_NAME
function* addDeckSaga(action){
    try{
        yield put({type: LOADING.START})
        //post route to server to add deck, server expects an object {deck_name: 'name of deck'}
        const addedDeck = yield call(
            axios.post,
            `${host}api/deck/`,
            {deck_name: action.payload},
            config
        )
        //Server sends back the row of the newly inserted deck so we have access to it 
        //for adding cards to it.
        yield put({
            type: DECKS.CHOOSEN,
            payload: addedDeck.data[0],
        })
        yield put({type: DECKS.CARDS})
            
        yield put({type: LOADING.DONE})
        //navigates the user to the card manage screen
        yield put(push('/cards'))
    }catch(error){
        yield console.log('an error adding deck ', error);
    }
}
//UPDATE_DECK
function* updateDeckSaga(action){
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
//DELETE_DECK 
function* deleteDeckSaga(action){
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


function* deckSaga(){
    yield takeLatest('GET_USER_DECKS', getDecksSaga);
    yield takeLatest('ADD_DECK_NAME', addDeckSaga);
    yield takeLatest('UPDATE_DECK', updateDeckSaga);
    yield takeLatest('DELETE_DECK', deleteDeckSaga);
}

export default deckSaga;