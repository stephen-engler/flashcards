import { call, put, takeLatest } from "redux-saga/effects";
import { push } from "react-router-redux";
import axios from "axios";
import {LOADING} from '../actions/loadingActions';
import {DECKS} from '../actions/deckActions';
import {CARDS} from '../actions/cardActions';
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
function* updateCardSaga(action){
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
function* deleteCardSaga(action){
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

//ADD_CARD
function* addCardSaga(action){
    try{
        yield put({type: LOADING.START})
        //post route to the server to add card
        //action.payload is an object with keys of {answer: 'the answer', prompt: 'the prompt', deck: {the deck object}}
        yield call(
            axios.post,
            `${host}api/card`,
            action.payload,
            config
        )
        //Changes the selected deck which updates the decklist
        //this is why we send the entire deck object
        yield put({
            type: DECKS.SELECTED,
            payload: action.payload.deck
        })
        yield put({type: LOADING.DONE})
    }catch(error){
        yield console.log('an error adding the card ', error)
    }
}

//USER_SELECTED_DECK
function* getCardsSaga(action){
    try{
        yield put({type: LOADING.START})
        //navigates the user to the card manager screen
        yield put(push('/cards'))
        //sets cardList reducer deck object to chosen deck--action.payload is the deck object
        yield put({
            type: DECKS.CHOOSEN,
            payload: action.payload
        })
        //gets all cards from the server, action.payload.id is the id of the deck
        const cards = yield call(
            axios.get,
            `${host}api/card/${action.payload.id}`,
            config
        )
        //Sets the cardList reducer card array to the response data
        yield put({
            type: DECKS.CARDS,
            payload: cards.data
        })
        yield put({type: LOADING.DONE})
    }catch(error){
        yield console.log('an error getting the cards ', error);
    }
}

function* cardSaga(){
    yield takeLatest(DECKS.SELECTED, getCardsSaga);
    yield takeLatest(CARDS.ADD, addCardSaga);
    yield takeLatest(CARDS.UPDATE, updateCardSaga);
    yield takeLatest(CARDS.DELETE, deleteCardSaga);
}

export default cardSaga;

