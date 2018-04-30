const deckList = (state = [], action) => {
  switch(action.type){
    case 'ALL_DECKS':
      return action.payload;
    default:
      return state;
  }
};

export default deckList;
