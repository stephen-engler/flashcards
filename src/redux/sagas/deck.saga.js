import { call, put } from "redux-saga/effects";
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
export function* getDecksSaga(action){
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
//USER_SELECTED_DECK
export function* getCardsSaga(action){
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
//ADD_DECK_NAME
export function* addDeckSaga(action){
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
//ADD_CARD
export function* addCardSaga(action){
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