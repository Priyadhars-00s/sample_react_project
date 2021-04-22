import { combineReducers } from "redux";

import photo from "./photo";
import React from "react";
import { render } from "react-dom";
// import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";
// import reducer from "./reducers/index";
import configStore from "./store/configStore";

import Redux from "../containers/Redux";
const rootReducer = combineReducers({
  photo
});

export default rootReducer;


// const middleware = [thunk];
// if (process.env.NODE_ENV !== "production") {
//   middleware.push(createLogger());
// }

// const store = createStore(reducer, applyMiddleware(...middleware));

const store = configStore();

render(
  <Provider store={store}>
    <Redux />
  </Provider>,
  document.getElementById("root")
);
