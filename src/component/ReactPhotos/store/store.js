import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// import middleware
import logger from "redux-logger";
import thunk from "redux-thunk";

// import reducer
import reducer from "../reducers";

function configureStore(preLoadedState) {
  // middleware
  const middleware = [logger, thunk];
  // the logger need to be put at the last place in the middleware chaining.

  const middlewareEnhancer = applyMiddleware(...middleware);

  const enhancers = [middlewareEnhancer];

  const composedEnhancers = composeWithDevTools(...enhancers);

  return createStore(reducer, preLoadedState, composedEnhancers);
}

export default configureStore;

