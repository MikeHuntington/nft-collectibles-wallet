import { UPDATE_FEED, LIKE_POST, GENERATE_PHRASE, KeyringActionTypes, PostInterface, PhraseInterface } from '../types';
import { keyringService } from '../../services';
import { request, failure } from './common.actions';
import { ActionCreator, Dispatch } from 'redux';

const generatePhraseSuccess: ActionCreator<KeyringActionTypes> = (phrase: PhraseInterface) => {
  return { type: GENERATE_PHRASE, payload: phrase };
}

const updateStoredFeedSuccess: ActionCreator<KeyringActionTypes> = (posts: PostInterface[]) => {
  return { type: UPDATE_FEED, payload: posts };
}

const likePostSuccess: ActionCreator<KeyringActionTypes> = (posts: PostInterface[]) => {
  return { type: LIKE_POST, payload: posts };
}

export function generatePhrase() {
  return (dispatch: Dispatch) => { // async action: uses Redux-Thunk middleware to return a function instead of an action creator
    dispatch(request());
    return keyringService.generatePhrase()
      .then(
        response => {
          dispatch(generatePhraseSuccess(response))
        },
        (error:Error) => {
          dispatch(failure('Server error.'))
        })
  }
}