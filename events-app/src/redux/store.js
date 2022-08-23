import { legacy_createStore as createStore } from "redux";

import comboReducers from "./comboReducers";

const store = createStore(
  comboReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
