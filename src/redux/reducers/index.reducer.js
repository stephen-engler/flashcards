import { combineReducers } from "redux";
import deckList from "./deckList.reducer";
import userInfo from "./userInfo.reducer";


export default combineReducers({
  deckList,
  userInfo,

});
