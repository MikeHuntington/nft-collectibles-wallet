import { 
  ADD_PROVIDER, 
  ADD_PROVIDER_SUCCESS, 
  CONNECT_PROVIDER, 
  CONNECT_PROVIDER_SUCCESS 
} from '../types';


const initialState = {
  providers: [],

  connection: {
    provider: null,
    connection: null
  }
};

export function providerReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PROVIDER_SUCCESS: {
      return {
        ...state,
        providers: [ ...state.providers, action.payload]
      }
    }

    case CONNECT_PROVIDER_SUCCESS: {
      return {
        ...state,
        connection: {
          provider: action.payload.provider,
          connection: action.payload.connection
        }
      }
    }
    default:
      return state
  }
};