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
        //gets all decks from server
        const decks = yield call(
            axios.get,
            'http://localhost:5000/api/deck',
            config
        )
        //sends them to redux store deckList Reducer
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
        //sets cardList reducer deck object to chosen deck--action.payload is the deck object
        yield put({
            type: 'CHOOSEN_DECK',
            payload: action.payload
        })
        //gets all cards from the server, action.payload.id is the id of the deck
        const cards = yield call(
            axios.get,
            `http://localhost:5000/api/deck/cards/${action.payload.id}`,
            config
        )
        //Sets teh cardList reducer card array to the response data
        yield put({
            type: 'ALL_CARDS',
            payload: cards.data
        })
        //navigates the user to the card manager screen
        yield put(push('/cards'))
    }catch(error){
        yield console.log('an error getting the cards ', error);
    }
}

export function* addDeckSaga(action){
    try{
        //post route to server to add deck, server expects an object {deck_name: 'name of deck'}
        const addedDeck = yield call(
            axios.post,
            'http://localhost:5000/api/deck/',
            {deck_name: action.payload},
            config
        )
        //Server sends back the row of the newly inserted deck so we have access to it 
        //for adding cards to it.
        yield put({
            type: 'CHOOSEN_DECK',
            payload: addedDeck.data[0],
        })
        //navigates the user to the card manage screen
        yield put(push('/cards'))
    }catch(error){
        yield console.log('an error adding deck ', error);
    }
}

export function* addCardSaga(action){
    try{
        //post route to the server to add card
        //action.payload is an object with keys of {answer: 'the answer', prompt: 'the prompt', deck: {the deck object}}
        yield call(
            axios.post,
            "http://localhost:5000/api/deck/card",
            action.payload,
            config
        )
        //Changes the selected deck which updates the decklist
        //this is why we send the entire deck object
        yield put({
            type: 'USER_SELECTED_DECK',
            payload: action.payload.deck
        })
    }catch(error){
        yield console.log('an error adding the card ', error)
    }
}