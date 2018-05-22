import { SOME_MUTATION } from './mutation-types'

export default {
    incrementAsync ({ commit },payload) {
        commit(SOME_MUTATION,payload)
    }
}