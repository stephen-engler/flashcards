import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import RootStack from "./src/navigation/RootStack";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./src/redux/sagas/root.saga";
import reducers from "./src/redux/reducers/index.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
