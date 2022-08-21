import { legacy_createStore as createStore } from "redux";

import { eventReducer } from "./redux/reducers";

const store = createStore(
  eventReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ /
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
);

export default store;
