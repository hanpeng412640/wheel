<template>
     <div class="car-detail">
          <div class="top">
         <img :src="info.CoverPhoto" alt="" @click="goImg(info.SerialID)">
         <em>{{info.pic_group_count}}张照片</em>
         </div>
         <div class="info">
             <div class="left">
               <p>{{info.market_attribute&&info.market_attribute.dealer_price}}</p>
               <p>指导价{{info.market_attribute&&info.market_attribute.official_refer_price}}</p>
             </div>
             <div class="action">
                 <button>{{info.BottomEntranceTitle}}</button>
             </div>
         </div>
         <div class="car-list">
             <div class="c-type">
                  <span v-for="(item,index) in years" :key="index" @click="changeyear(item)" :class="item==currentyear?'active':''">
                      {{item}}
                  </span>
             </div> 
             <div class="car-cont" v-for="(val,key) in list" :key="key">
                 <p>{{key}}</p>
                 <ul>
                     <li v-for="(value,ind) in val" :key="ind">
                        <h3>{{value.market_attribute.year+'款 '+value.car_name}}</h3>
                        <h6>{{value.horse_power+'马力'+value.gear_num+'档'+value.trans_type}}</h6>
                        <h5>
                            <span>{{'指导价'+value.market_attribute.official_refer_price}}</span>
                            <span>{{value.market_attribute.dealer_price_min+'起'}}</span>
                        </h5>
                        <button @click="goQuotation(value.car_id)">询问底价</button>
                     </li>
                 </ul>
                 
             </div>
         </div>
         <div class="bottom">
             <p>询问底价</p>
             <p>本地经销商为你报价</p>
         </div>
     </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
     computed:{
        ...mapState({
            info:state=>state.detail.info,
            currentyear:state=>state.detail.currentyear
        }),
        ...mapGetters({
            years:'detail/years',
            list:'detail/list'
        })
     },
     methods:{
        ...mapActions({
            getDetail:"detail/getDetail"
        }),
        ...mapMutations({
            changeyear:'detail/changeyear'
        }),
        goQuotation(id){
            this.$router.push({path:'/quotation',query:{id}})
        },
        goImg(id){
            this.$router.push({path:'/img',query:{id}})
        }
     },
     mounted(){
         this.getDetail(this.$route.query.id)
     },
     beforeRouteEnter (to, from, next) {
            // ...
            next();
            console.log(1);
        },
        beforeRouteLeave (to, from, next) {
            // ...
            console.log(3);
            next();
        },
        beforeDestroy() {
            console.log(4);
        },
}
</script>

<style scoped lang="scss">
.car-detail{
    overflow-x: hidden;
}
.top{
    position: relative;
    height: 3.29rem;
    overflow: hidden;
    img{
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
    }
    em{
        position: absolute;
        bottom: .3rem;
        right: .3rem;
        color: #fff;
        padding: 1px .1rem;
        border-radius: .2rem;
        background: rgba(0,0,0,.6);
        font-size: .24rem;
    }
}
.info {
    height: .8rem;
    padding: .36rem .2rem .3rem;
    background: #fff;
    position: relative;
    display: flex;
}
.info p:first-child {
    font-size: .36rem;
    color: red;
    font-weight: 500;
}
.info p:nth-child(2) {
    font-size: .26rem;
    color: silver;
}
.info p {
    max-width: 3.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
}
.info .action {
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 50%;
    position: absolute;
    right: .1rem;
    top: -.23rem;
}
.info .action button {
    border-radius: .1rem;
    font-size: .32rem;
    height: .7rem;
    width: 3.45rem;
    border: none;
    box-sizing: border-box;
}
.info .action button:last-child {
    background: #00afff;
    color: #fff;
}
.car-list{
    width: 100%;
    margin-top: .2rem;
.c-type{
    border-top: .15rem solid #f4f4f4;
    padding: 0 .3rem;
    font-size: .32rem;
    height: .77rem;
    line-height: .77rem;
    background: #fff;
    span{
        padding-right: .2rem;
    }
    .active{
        color: #3aacff;
    }
}
}
.car-cont{
    p{
        height:.4rem;
        line-height: .4rem;
        font-size: .26rem;
        color: #999;
        background: #f4f4f4;
        padding-left: .2rem;
    }
    li{
        padding-left: .2rem;
        border-bottom: .18rem solid #f4f4f4;
        h3{
            font-size: .3rem;
            color: #3d3d3d;
            padding-top: .2rem;  
        }
        h6{
            color: #bdbdbd;
            font-size: .26rem;
            padding-top: .2rem;
        }
        h5{
            font-size: .24rem;
            color: #818181;
            text-align: right;
            padding-top: .2rem;
            padding-right: .2rem;
            span:nth-child(1){
                font-size: .24rem;
                color: #818181;
            }
            span:nth-child(2){
                font-size: .3rem;
                color: #ff2336;
            }
        }
        button{
        border: none;
        border-top: 1px solid #eee;
        width: 110%;
        height: .8rem;
        font-size: .32rem;
        color: #00afff;
        background: #fff;
        font-weight: 500;
        margin-left: -.3rem;
    }
    }
   
}
.bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height:1rem;
    z-index: 99;
    background: #3aacff;
    text-align: center;  
    color: #fff;
    p:nth-child(1){
        font-size: .3rem; 
        margin-top: .12rem;   
    }
     p:nth-child(2){
        font-size: .25rem;
    }
}
</style>
