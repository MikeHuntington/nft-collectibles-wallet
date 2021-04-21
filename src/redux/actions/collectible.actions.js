import {
  FETCH_COLLECTIBLES, 
  FETCH_COLLECTIBLES_FAILURE, 
  FETCH_COLLECTIBLES_SUCCESS, 
  FETCH_SERIES, 
  FETCH_SERIES_SUCCESS, 
  FETCH_SERIES_FAILURE 
} from "../types"

// Collectibles
export const fetchCollectibles = () => {
    return { type: FETCH_COLLECTIBLES };
}
export const fetchCollectiblesSuccess = (results) => {
  return { type: FETCH_COLLECTIBLES_SUCCESS, payload: results };
}
export const fetchCollectiblesFailure = (error) => {
    return { type: FETCH_COLLECTIBLES_FAILURE, payload: error };
}

// Series
export const fetchSeries = () => {
  return { type: FETCH_SERIES };
}
export const fetchSeriesSuccess = (results) => {
return { type: FETCH_SERIES_SUCCESS, payload: results };
}
export const fetchSeriesFailure = (error) => {
  return { type: FETCH_SERIES_FAILURE, payload: error };
}