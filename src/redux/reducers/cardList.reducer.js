import {DECKS} from '../actions/deckActions'

const initialState = {
    cardList: [],
    deck: {},
}

const cardList = (state = initialState, action) => {
  switch (action.type) {
    case DECKS.CARDS:
      return {...state, cardList: action.payload};
    case DECKS.CHOOSEN:
        return {...state, deck: action.payload};
    default:
      return state;
  }
};

export default cardList;
