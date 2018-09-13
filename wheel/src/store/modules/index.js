import {getBrandList,getMakeList} from '../../api/index'
let state={
    letters:[],
    brand:{},
    brandId:'',
    makelist:'',
    flag:false,
    isShowList:false
}

let mutations={
    initState:(state,payload)=>{  
        let letters = [];
        let brand = {};      
        payload.forEach(item=>{
           
            //取出首字母
            let Spell=item.Spelling[0]
            //如果letters里存在Spell
            if(letters.indexOf(Spell)!=-1){
                //brand
                brand[Spell].push(item) 
            }else{
                //如果letters里不存在Spell添加到数组
                letters.push(Spell)
                brand[Spell]=[item]
            }
        })
        state.letters=letters
        state.brand=brand
    },
    changeMakeList:(state,payload)=>{
         state.brandId=payload.id
         state.makelist=payload.list
         state.flag=true
         state.isShowList=true
    },
    back:(state)=>{
        state.flag=false
    },
    hideMakeList:(state)=>{
        state.isShowList=false;
    }
}


let actions={
    initState:({commit})=>{
        getBrandList().then(body=>{
            commit('initState',body.data)
        })
    },
    getMakeList:({commit,state},payload)=>{
        if(payload!=state.brandId){
            getMakeList(payload).then(body=>{
                commit('changeMakeList',{
                     id:payload,
                     list:body.data
                })
                
            })
        }else{
            state.isShowList=true;
        }
        
    },
  
}


export default {
    namespaced:true,
    state,
    mutations,
    actions
}