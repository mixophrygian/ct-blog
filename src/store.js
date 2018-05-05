import { createStore, applyMiddleware, compose } from "redux";
import createBrowserHistory from "history/createBrowserHistory";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";
import { reducers } from "./reducers/index";
import { sagas } from "./sagas/index";
import ApiEntries from "./api/entries";
import appState from "./api/appState";

// add the middlewares
const middlewares = [];
const browserHistory = createBrowserHistory();

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// add the freeze dev middleware
if (process.env.NODE_ENV !== "production") {
  middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== "production" && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

const persistedState = {
  entries: ApiEntries.getEntries(),
  onboarded: appState.checkIfOnboarded(),
};
// create the store
const store = createStore(reducers, persistedState, middleware);
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);

// export
export { store, history };
