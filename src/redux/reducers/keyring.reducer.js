import { GENERATE_PHRASE, LIKE_POST, UPDATE_FEED } from '../types';


const initialState = {
  posts: [],
  phrase: undefined
};

export function keyringReducer(state = initialState, action) {
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