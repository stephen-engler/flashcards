const initialState = {
    cardList: [],
    deck: {},
}

const cardList = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_CARDS":
      return {...state, cardList: action.payload};
    case "CHOOSEN_DECK":
        return {...state, deck: action.payload};
    default:
      return state;
  }
};

export default cardList;
