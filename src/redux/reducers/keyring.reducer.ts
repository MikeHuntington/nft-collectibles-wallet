import { GENERATE_PHRASE, LIKE_POST, UPDATE_FEED, PostInterface, PhraseInterface, KeyringActionTypes } from '../types';

interface KeyringState {
  posts: PostInterface[],
  phrase?: PhraseInterface
}

const initialState: KeyringState = {
  posts: [],
  phrase: undefined
};

export function keyringReducer(state: KeyringState = initialState, action: KeyringActionTypes): KeyringState {
  switch (action.type) {
    case GENERATE_PHRASE: {
      return {
        ...state,
        phrase: action.payload
      }
    }
    case UPDATE_FEED: {
      return {
        ...state,
        posts: action.payload
      }
    }
    case LIKE_POST: {
      return {
        ...state,
        posts: action.payload
      }
    }
    default:
      return state
  }
};