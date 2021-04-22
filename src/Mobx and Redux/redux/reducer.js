

import { combineReducers } from 'redux';

let initialState= 0;

export const reducer = (state = initialState, action) => {
 
    switch (action.type) {
      case 'ADD':
        return state + 1;
        case 'SUBTRACT':
          return state - 1 ;
         default:
        return state;
    }
};
