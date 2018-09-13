

let state = {
    isShowCity: false,
    currentCity: '',
    quotionList:{},
    city: {}
}

let mutations = {
    showCity(state, payload){
        state.isShowCity = payload;
    },
    updateCity(state, payload){
        state.city = payload;
        state.isShowCity = false;
    },
    getquotionList(state,payload){
      state.quotionList=payload
    }
}
let actions={
    getQuotation:({commit},payload)=>{
        console.log(payload,state.city.id)
        getQuotation(payload,state.city.id).then(body=>{
            commit('getquotionList',body.data)
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}