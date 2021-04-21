import * as types from "../types"
import * as actions from "../actions"

const fetchCollectiblesFlow = ({api}) => ({getState, dispatch}) => next => async (action) => {

    next(action);

    if (action.type === types.FETCH_COLLECTIBLES) {
        try {
          const results = await api.collectible.getCollectibles();
          dispatch(actions.fetchCollectiblesSuccess(results))
        } catch (error) {
          console.log(error)
        }
    }
}

const fetchSeriesFlow = ({api}) => ({getState, dispatch}) => next => async (action) => {

  next(action);

  if (action.type === types.FETCH_SERIES) {
      try {
        const results = await api.collectible.getSeries();
        dispatch(actions.fetchSeriesSuccess(results))
      } catch (error) {
        console.log(error)
      }
  }
}

export default [
    fetchCollectiblesFlow,
    fetchSeriesFlow
]