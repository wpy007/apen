import * as types from './mutations-type'

export default {
  [types.SET_TOKEN_ID](state, val) {
    state.tokenId = val
  },
}
