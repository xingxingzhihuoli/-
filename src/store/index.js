import Vue from 'vue'
import Vuex from 'vuex'
import {getUserData} from '../api/getData'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        data:[]
    },
    mutations:{
        getDatas(state,data){
            state.data = data
        }
    },
    actions:{
        async getData({commit}){
            const {data} =await getUserData();
            commit('getDatas',data)
        }
    }

})
