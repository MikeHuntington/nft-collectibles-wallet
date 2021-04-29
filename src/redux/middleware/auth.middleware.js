import * as types from "../types"
import * as actions from "../actions"

const facebookLoginFlow = ({api}) => ({getState, dispatch}) => next => async (action) => {

    next(action)

    if (action.type === types.FACEBOOK_LOGIN) {
        try {
          api.auth.fbLogin()
        } catch (error) {
          dispatch(actions.loginFailure(error));
        }
    }
}

const googleLoginFlow = ({api}) => ({getState, dispatch}) => next => async (action) => {

  next(action)

  if (action.type === types.GOOGLE_LOGIN) {
      try {
        const result = await api.auth.googleLogin()
        dispatch(actions.loginSuccess(result));
      } catch (error) {
        dispatch(actions.loginFailure(error));
      }
  }
}

const appleLoginFlow = ({api}) => ({getState, dispatch}) => next => async (action) => {

  next(action)

  if (action.type === types.APPLE_LOGIN) {
      try {
        const result = await api.auth.appleLogin()
        console.log(result);
        dispatch(actions.loginSuccess(result));
      } catch (error) {
        dispatch(actions.loginFailure(error));
      }
  }
}

export default [
    appleLoginFlow,
    facebookLoginFlow,
    googleLoginFlow
]