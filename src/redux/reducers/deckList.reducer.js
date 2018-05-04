import {DECKS} from '../actions/deckActions'

const deckList = (state = [], action) => {
  switch(action.type){
    case DECKS.ALL:
      return action.payload;
      
    default:
      return state;
  }
};

export default deckList;
