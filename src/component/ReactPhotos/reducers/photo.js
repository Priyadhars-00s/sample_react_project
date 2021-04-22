import {
    FETCH_PHOTO_REQUEST,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE
  } from "../action/photo";
  
  const photo = (
    state = {
      isFetching: false,
      data: ""
    },
    action
  ) => {
    switch (action.type) {
      case FETCH_PHOTO_REQUEST:
        return {
          ...state,
          isFetching: true
        };
      case FETCH_PHOTO_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: "",
          data: action.photo
        };
      case FETCH_PHOTO_FAILURE:
        return {
          ...state,
          error: action.error
        };
      default:
        return state;
    }
  };
  
  export default photo;
  