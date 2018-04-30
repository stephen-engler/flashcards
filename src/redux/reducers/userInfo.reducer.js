const initialState = {
  user: {id: '', username: ''},
  view: ""
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIEW":
      return { ...state, view: action.payload };
    case "SET_USER":
      return {...state, user: {id: action.payload.id, username: action.payload.username}}
    default:
      return state;
  }
};
export default userInfo;
