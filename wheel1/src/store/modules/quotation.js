import {getCapture} from '../../api/index.js';

let state = {
    isShowCity: false,
    currentCity: '',
    quotionList:{},
    city: {},
    isSendSMS: false,   //是否发送短信验证码
    timer: 0,           //倒计时
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
    },
    updateCapture(state,payload){
         if(payload.code==0){
             state.isSendSMS=true;
             state.timer=60;
             let inter=setInterval(()=>{
                 state.timer--;
                 if(state.timer==0){
                    clearInterval(inter)
                    state.isSendSMS=false
                 }
            },1000);
         }else{
             alert(payload.msg)
         }
    }
}
let actions={
    getQuotation:({commit},payload)=>{
        console.log(payload,state.city.id)
        getQuotation(payload,state.city.id).then(body=>{
            commit('getquotionList',body.data)
        })
    },
    getCapture:({commit},payload)=>{
        getCapture(payload).then(body=>{
            commit('updateCapture',body)
        })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}