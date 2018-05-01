const initialState = {
  user: {id: '', username: ''},
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {...state, user: {id: action.payload.id, username: action.payload.username}}
    default:
      return state;
  }
};
export default userInfo;
