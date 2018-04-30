const initialState = {
  user: {},
  view: ""
};

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIEW":
      return { ...state, view: action.payload };
    default:
      return state;
  }
};
export default userInfo;
