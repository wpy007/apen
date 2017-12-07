import * as types from './mutations-type'

export default {
  ASYNC_SET_TOKENID({ commit }, val) {
    setTimeout(() => {
      commit(types.SET_TOKEN_ID, val)
    }, 3000)
  },
}
