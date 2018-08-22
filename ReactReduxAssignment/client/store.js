import { createStore, compose, applyMiddleware } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import ReduxThunk from "redux-thunk";

//import the root reducer
import rootReducer from "./reducers/index";

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// const defaultState={
//   posts:[],
//   comments:[],
//   repoinfo:[]
// }
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export const history = syncHistoryWithStore(browserHistory, store); //reason we are able to see all the states in app
//keeps track of our app navigation,
//browserhistory is for push state so page is not reloaded as we navigate

if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
