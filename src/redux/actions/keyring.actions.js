import { UPDATE_FEED, LIKE_POST, GENERATE_PHRASE } from '../types';
import { keyringService } from '../../services';
import { request, failure } from './common.actions';

const generatePhraseSuccess = (phrase) => {
  return { type: GENERATE_PHRASE, payload: phrase };
}

const updateStoredFeedSuccess = (posts) => {
  return { type: UPDATE_FEED, payload: posts };
}

const likePostSuccess = (posts) => {
  return { type: LIKE_POST, payload: posts };
}

export function generatePhrase() {
  return (dispatch) => { // async action: uses Redux-Thunk middleware to return a function instead of an action creator
    dispatch(request());
    return keyringService.generatePhrase()
      .then(
        response => {
          dispatch(generatePhraseSuccess(response))
        },
        (error) => {
          dispatch(failure('Server error.'))
        })
  }
}