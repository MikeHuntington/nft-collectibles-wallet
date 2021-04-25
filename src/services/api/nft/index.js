import { testData } from '../../../extra/testData.extra'

export default {
  claimNFT: async () => {
    return testData.nftData
  },

  getClaimData: () => {
    return testData.scanData
  },

  getCollectibles: async () => {
    return testData.collectibleData
  },

  getSeries: async () => {
    return testData.seriesData
  }
}