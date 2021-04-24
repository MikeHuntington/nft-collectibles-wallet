import * as types from "../types"
import * as actions from "../actions"
import { CLAIM_NFT } from "../types";

const claimNFTFlow = ({api}) => ({getState, dispatch}) => next => async (action) => {

  next(action);

  if (action.type === types.CLAIM_NFT) {
      try {
        // Parse claim data
        const claim = api.nft.getClaimData(action.payload)

        // Add pending NFT
        // api.nft.addPendingClaim(claim)
        getState().nftReducer.pendingClaims.push(claim) //temp

        // Connect to provider if it currently isn't active
        // check if we have an active connection to the provider
        const { provider } = getState().providerReducer.connection;
        if(claim.provider.id === provider.id) {
          dispatch(actions.apiRequest({type: CLAIM_NFT, payload: claim}))
        } else {
          dispatch(actions.connectProvider(claim.provider))
        }
      } catch (error) {
        console.log(error)
      }
  }
}

const fetchCollectiblesFlow = ({api}) => ({getState, dispatch}) => next => async (action) => {

    next(action);

    if (action.type === types.FETCH_COLLECTIBLES) {
        try {
          const results = await api.nft.getCollectibles();
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
        const results = await api.nft.getSeries();
        dispatch(actions.fetchSeriesSuccess(results))
      } catch (error) {
        console.log(error)
      }
  }
}

export default [
    claimNFTFlow,
    fetchCollectiblesFlow,
    fetchSeriesFlow
]