import React from "react";

import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const initialState = 0;

const reducer = (state = initialState, action) => {
  if (action.type === "ADD") return state + 1;
  else if (action.type === "SUBTRACT") return state - 1;
  return state;
};

export const store = createStore(reducer);

const ReduxApp = ({ count, inc, dec }) => (
  <div className="container">
    <h1 className="is-size-1 has-text-warning has-text-centered has-background-info">
      Redux
    </h1>
    <h2 className="is-size-2 has-text-centered">Counter: {count}</h2>
    <div className="has-text-centered">
      <button className="button is-large is-primary" onClick={() => inc()}>
        Increment
      </button>

      <button className="button is-large is-danger" onClick={() => dec()}>
        Decrement
      </button>
    </div>
  </div>
);

const mapStateToProps = state => ({ count: state });
const mapDispatchToProps = dispatch => ({
  inc: () => dispatch({ type: "ADD" }),
  dec: () => dispatch({ type: "SUBTRACT" })
});

const ConnectReduxApp = connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
console.log("check", store)
export default () => (
  <Provider store={store}>
    <ConnectReduxApp />
  </Provider>
);
