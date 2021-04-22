const FETCH_PHOTO_REQUEST = 'FETCH_PHOTO_REQUEST';

const fetchPhotoRequest = () => (
  {
    type: FETCH_PHOTO_REQUEST
  }
);

const FETCH_PHOTO_SUCCESS = 'FETCH_PHOTO_SUCCESS';

const fetchPhotoSuccess = (photo) => (
  {
    type: FETCH_PHOTO_SUCCESS,
    photo
  }
);

const FETCH_PHOTO_FAILURE = 'FETCH_PHOTO_FAILURE';

const fetchPhotoFailure = (error) => (
  {
    type: FETCH_PHOTO_FAILURE,
    error
  }
);

const fetchPhoto = () => async (dispatch) => {
  dispatch(fetchPhotoRequest());

  let response = undefined;

  try {
    response = await fetch(`https://picsum.photos/400/300/?random`);

    if (typeof response === "object" && 'url' in response) {
      dispatch(fetchPhotoSuccess(response.url));
    } else {
      dispatch(fetchPhotoFailure('It is Failed to fetch post.'));
    }
  } catch (error) {
    dispatch(fetchPhotoFailure(error));
  }

  return response;
};

export {
  fetchPhoto,
  FETCH_PHOTO_REQUEST,
  FETCH_PHOTO_SUCCESS,
  FETCH_PHOTO_FAILURE
}
