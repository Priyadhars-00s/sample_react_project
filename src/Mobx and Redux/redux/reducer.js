

import { combineReducers } from 'redux';

let initialState= 0;

export const reducer = (state = initialState, action) => {
 
    switch (action.type) {
      case 'ADD':
        return {...state, count} ;
        case 'SUBTRACT':
          return {...state, count} ;
         default:
        return state;
    }
};
