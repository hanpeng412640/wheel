<template>
    <div :class="isShowList?'car-type active':'car-type '" v-show="flag" 
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
    ref='section'
    >
        <div class="typelist">  
        <ul v-for="(item, index) in makelist" :key="index">
            <p @click="back">{{item.GroupName}}</p>
            <li  v-for="(value, key) in item.GroupList" :key="key" @click="goDetail(value.SerialID)">
                  <img v-lazy="value.Picture">
                <div>
                    <p>{{value.AliasName}}</p>
                    <p>{{value.DealerPrice}}</p>
                </div>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
     computed:{
         ...mapState({
              makelist:state=>state.index.makelist,
              flag:state=>state.index.flag,
              isShowList:state=>state.index.isShowList
         })
     },
     methods:{
        ...mapMutations({
            back:'index/back',
            hideMakeList:'index/hideMakeList'
        }),
        goDetail(id){
             this.$router.push({path:'/detail', query:{id:id}})
        },
        touchstart(e){
            this.pagex=0;
            this.touch=e.touches[0].pageX
        },
        touchmove(e){
            this.pagex=e.touches[0].pageX-this.touch
            if(this.pagex>0){
               this.$refs.section.style=`transform:translate3d(${this.pagex}px,0,0)`
            }  
        },
        touchend(){
            this.$refs.section.style=''
            if(this.pagex>100){
               this.hideMakeList()
            }
        }
     }
} 
</script>

<style>
.car-type{
    position: fixed;
    top: 0;
    right: 0;
    width:75%;
    transform: translate3d(100%, 0, 0);
    background: #fff;
    z-index: 100;
    height: 100%;
    box-shadow: 0 0 0.5rem #eee;
}
.typelist{
    height: 100%;
    overflow:auto;
}
.typelist ul>p{
    margin-left: 1px;
    font-size: .28rem;
    line-height: .48rem;
    background: #f2f2f2;
    padding-left: .3rem;
    color: #717171;
}
.car-type li {
    display: flex;
    height: 1.4rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ddd;
}
.car-type li img {
    margin: 0 .1rem 0 .2rem;
    width: 1.8rem;
    height: 1.2rem;
}
.car-type li div p:first-child {
    font-size: .34rem;
    color: #5f687a;
}
.car-type li div p:nth-child(2) {
    margin-top: .1rem;
    font-size: .28rem;
    color: red;
}
.car-type.active{
    transform: translate3d(0,0,0);
    transition: transform .3s linear;
}
</style>
