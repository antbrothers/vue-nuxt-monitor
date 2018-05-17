import * as types  from './mutationType'
import * as actions from './actions'

const state = ()=> ({
    data: {}
})

const mutations = {
    [types.HOT] (state, result) {
        data = result
    }
}
export default {
    actions, state, mutations
}