import { combineReducers } from "redux";
import deckList from "./deckList.reducer";
import userInfo from "./userInfo.reducer";
import cardList from './cardList.reducer';
import {routerReducer} from 'react-router-redux'


export default combineReducers({
  deckList,
  userInfo,
  cardList,
  routerReducer

});
