
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';
import getters from './getters';
import moduleA from './modules/cart';


Vue.use(Vuex);


const state = {
	count: 0
}

export default new Vuex.Store({
    modules:{
        cart: moduleA,
    },
    state,
    mutations,
    actions,
    getters
})























































