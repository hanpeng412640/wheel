import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'
import detail from './modules/detail'
import quotation from './modules/quotation'
import img from './modules/img'
import color from './modules/color'
import city from './modules/city'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        index,
        detail,
        quotation,
        img,
        color,
        city
    }
})