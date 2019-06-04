import { FETCH_PHOTOS_START, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_FAIL, FETCH_PHOTOS_STOP } from './actions';

const initialState = {
  photos: [],
  isLoading: false,
  isFail: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTOS_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_PHOTOS_STOP:
      return {
        ...state,
        isLoading: false
      }
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.photos
      }
    case FETCH_PHOTOS_FAIL:
      return {
        ...state,
        isFail: true
      }
    default: return state
  }
}