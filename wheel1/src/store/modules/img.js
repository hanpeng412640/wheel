import {getImg,getImgDetailList} from '../../api/index'
let state={
    ImgList:{},
    ImgDetailList:{},
    carID:''
}

let mutations={
    changeImg:(state,payload)=>{
        state.ImgList=payload.data
        state.carID=payload.id
        payload.data.forEach(item=>{
            item.List.forEach(item=>{         
              let url=item.Url.replace(/\{0\}/,'3')
              item.Url=url
            })
        })
        console.log(payload)
    },
    ImgDetail:(state,payload)=>{
       
    }
}

let actions={
    getImg:({commit},payload)=>{   
        getImg(payload).then(body=>{
            commit('changeImg',{
                id:payload,
                data:body.data
            })
        })
    },
    getImgDetailList:({commit},payload)=>{
        getImgDetailList(payload).then(body=>{
            commit('ImgDetail',body.data)
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}