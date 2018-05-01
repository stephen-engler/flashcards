import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./src/redux/sagas/root.saga";
import reducers from "./src/redux/reducers/index.reducer";

import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import createMemoryHistory from 'history/createMemoryHistory';


import LoginScreen from "./src/components/LoginScreen/LoginScreen";
import SignInScreen from "./src/components/SignInScreen/SignInScreen";
import StudyScreen from "./src/components/StudyScreen/StudyScreen";
import StartScreen from "./src/components/StartScreen/StartScreen";
import ManageScreen from "./src/components/ManageScreen/ManageScreen";
import CardManageScreen from "./src/components/CardManageScreen/CardManageScreen";

const history = createMemoryHistory();

const middleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware, middleware, logger));


sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <View style={{flex:1}}>
            <Route exact path="/" component={StartScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/signin" component={SignInScreen} />
            <Route path="/manage" component={ManageScreen} />
            <Route path="/study" component={StudyScreen} />
            <Route path="/cards" component={CardManageScreen}/>
          </View>
        </ConnectedRouter>
      </Provider>
    )
  }
}
