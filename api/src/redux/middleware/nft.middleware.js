import * as types from "../types"
import * as actions from "../actions"

const claimNFTFlow = ({api}) => ({getState, dispatch}) => next => async (action) => {
    next(action)

    if (action.type === types.CLAIM_NFT) {
        try {
          const connection = await getState().providerReducer.connection

          // call the claim transaction
        } catch (error) {
            //dispatch(actions.connectProviderFailure(error));
        }
    }
}


export default [
    claimNFTFlow
]