<template>
    <div class="index">
    <div class="wrap">
        <section>
            <div v-for="(item,index) in brand" :key="index">
             <ul>
                <p :id="index">{{index}}</p>
                <li v-for="(val,key) in item" :key="key" @click="getMakeList(val.MasterID)">
                    <img v-lazy="val.CoverPhoto">
                    <span>{{val.Name}}</span>
                </li>
             </ul>
            </div>
            <aside
              @touchstart="touchStart"
              @touchmove="touchMove"
              @touchend="touchEnd"
            >
               <span v-for="(item,index) in letters" :key="index" >{{item}}</span>
            </aside> 
            <div class="dialog" v-show="isShow">
                <span ref="sc"></span>
            </div>   
        </section>
       <makelist ></makelist>
    </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import makelist from './common/makelist'
import lazyLoad from '../util/lazyLoad.js';
import '../util/util.js';
export default {
    data(){
       return{
           isShow:false
       }
    },
    computed:{
        ...mapState({
           letters:state=>state.index.letters,
           brand:state=>state.index.brand,
           flag:state=>state.index.flag
        })
    },
    methods:{
        ...mapActions({
            initState:'index/initState',
            getMakeList:'index/getMakeList'
        }),
        touchStart(e){
            this.isShow=true
            this.$refs.sc.innerHTML=e.target.innerHTML
        },
        touchMove(e){
            let pageY=e.touches[0].pageY;
            let index=Math.floor((pageY-this.marginTop)/this.Height)
           
            if (index < 0){
                    index = 0;
            }else if(index > this.letters.length-1){
                index = this.letters.length - 1;
            }
            let ele=document.getElementById(this.letters[index])
            let top=ele.offsetTop
            document.querySelector('.wrap').scrollTop=top
            this.$refs.sc.innerHTML=this.letters[index]
        },
        touchEnd(e){
            this.isShow=false
        }
    },
    mounted(){
        this.initState()
    },
    updated(){
        this.Height=0.4*(window.innerWidth/750*100)
        this.marginTop=(window.innerHeight-(this.Height*this.letters.length))/2
        lazyLoad('.wrap')
    },
    components:{
        makelist
    }
}
</script>

<style scoped lang="scss">
.index{
    height: 100%;
}
.wrap{
    height: 100%;
    overflow: scroll;
}
.dialog{
    width: 2rem;
    height:2rem;
    background: rgba(0,0,0,.7);
    position: absolute;
    top:50%;
    left:50%;
    transform: translate3d(-50%,-50%);
    span{
       display: flex;
       justify-content: center;
       line-height: 2rem;
       color: #fff;
    }
}
aside{
    position: fixed;
    right:.2rem;
    top:50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        font-size: .24rem;
        color: #666;
        font-weight: 500;
        padding: .02rem .1rem;
        height:.4rem;
        box-sizing: border-box;
    }
}
ul{
    p{
        font-size: .28rem;
        line-height: .4rem;
        background: #f4f4f4;
        padding-left: .3rem;
        color: #aaa;
    }
    li{
        margin: 0 .3rem;
        height: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        display: flex;
        align-items: center;
    }
    img{
        height: .8rem;
    }
    span{
        font-size: .32rem;
        margin-left: .4rem;
    }
    }

</style>
