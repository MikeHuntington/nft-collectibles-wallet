import { combineReducers } from 'redux';
import { keyringReducer } from './keyring.reducer';

export const rootReducer = combineReducers({
  keyring: keyringReducer,
});