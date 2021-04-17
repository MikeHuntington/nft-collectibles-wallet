import { combineReducers } from 'redux'
import { keyringReducer } from './keyring.reducer'
import { apiReducer } from './api.reducer'
import { authReducer } from './auth.reducer'

export default combineReducers({
    apiReducer,
    authReducer,
    keyringReducer,
})