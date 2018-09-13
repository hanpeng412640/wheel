import {getDetail} from '../../api/index'
let state={
   info:{},
   currentyear:'全部',
   
}

let getters={
     years(state){
         if(!state.info.list){
             return []
         }
         let arr=state.info.list.map(item=>{//遍历数据给arr返回年份
             return item.market_attribute.year
         })
         let set=new Set(arr)
         return ['全部',...set]//用Es6的Set方法去重,用...把类数组转为数组
     },
     list(state){
        if(!state.info.list){
            return []
        }
        function mearg(arr){
           let types=[]
           let obj={}
           arr.forEach(item=>{
               let type=item.exhaust_str+'/'+item.max_power_str+''+item.inhale_type//拼接排量/功率+涡轮
               if(types.indexOf(type)==-1){//如果types里没有type
                   types.push(type)//加入types
                   obj[type]=[item]//键名为type键值为对应的数据
               }else{
                   obj[type].push(item)//如果有直接加入对应数据
               }
              
           })
           return obj
        }
        if(state.currentyear=='全部'){//如果currentyear的值等于全部
            return mearg(state.info.list)//全部渲染
        }else{
            return mearg(state.info.list.filter(item=>{
                return item.market_attribute.year==state.currentyear//只渲染年份于currentyear相同的
            }))
        }
        
     }
}

let mutations={
    changeyear:(state,payload)=>{
        state.currentyear=payload//点击返回对应的年份并给currentyear赋值
    },
    getDetailList:(state,payload)=>{
        payload.list.sort((a,b)=>{
            //排序年份  降序
            if(a.market_attribute.year!=b.market_attribute.year){
                return b.market_attribute.year-a.market_attribute.years
            }else{
                //排序排量 升序
                if(b.exhaust_str>a.exhaust_str){
                    return -1
                }else if(b.exhaust_str<a.exhaust_str){
                    return 1
                }else{
                    //排序功率  升序
                    if(b.max_power_str>a.max_power_str){
                        return -1
                    }else if(b.max_power_str<a.max_power_str){
                        return 1
                    }else{
                        //排序指导价  升序
                            if(b.market_attribute.dealer_price_min>a.market_attribute.dealer_price_min){
                                return -1
                            }else{
                                return 1
                            }
                        }
                    }
                }
        })
        state.info=payload    
    }
}

let actions={
    getDetail:({commit},payload)=>{//根据传过来的id请求对应的数据

        getDetail(payload).then(body=>{
            commit('getDetailList',body.data)
        })
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions 
}