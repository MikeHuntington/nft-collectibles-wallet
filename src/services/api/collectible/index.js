import { testData } from '../../../extra/testData.extra'

export default {
  getCollectibles: async () => {
      return testData.collectibleData
  },
  getSeries: async () => {
    return testData.seriesData
}
}