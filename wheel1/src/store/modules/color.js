import {getColorList} from '../../api/index'
let state={
    ColorList:{},
    isShow:true
}

let mutations={
    changeColor:(state,payload)=>{
        state.ColorList=payload
        Obejct.keys(payload)
        console.log(Obejct.keys(payload))
    }
}

let actions={
    getColorList:({commit},payload)=>{        
        getColorList(payload).then(body=>{
            console.log(body.data)
            commit('changeColor',body.data)
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}