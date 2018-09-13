<template>
    <div>
        <div class="color">
            <p>全部颜色</p>
            <div class="color-cont" >
                <p class="c-type">
                    <span v-for="(item,index) in ColorList" :key="index">{{index}}</span>
                </p>
                <ul  v-for="(item,index) in ColorList" :key="index" v-show="isShow">
                    <li v-for="(val,key) in item" :key="key">
                        <span :style="{background:val.Value}"></span>
                        {{val.Name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
     computed: {
    ...mapState({
       ColorList:state=>state.color.ColorList,
       isShow:state=>state.color.isShow
    })
    },
    methods:{
        ...mapActions({
           getColorList:'color/getColorList'
        })
        
    },
    mounted(){
        this.getColorList(this.$route.query.id)
    }
}
</script>

<style lang="scss" scoped>
.color{
   
    background: #f4f4f4;
}
.color>p{
    margin: .15rem 0;
    font-size: .34rem;
    color: #00afff;
    background: #fff;
    text-align: center;
    line-height: .8rem;
    height: .8rem;
}
.c-type{
    margin-top: .15rem;
    padding-left: .2rem;
    font-size: .3rem;
    line-height: .76rem;
    height: .76rem;
    background: #fff;
    overflow-x: scroll;
    span{
        padding-right: .42rem;
    }
    .active{
        color: #00afff;
    }
}
.color ul{
    margin-top: .15rem;
    padding: 0 .2rem;
    overflow: hidden;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    li{
    float: left;
    width: 3.45rem;
    font-size: .32rem;
    line-height: .68rem;
    border: 1px solid #3aacff;
    box-sizing: border-box;
    margin: .2rem 0;
    border-radius: .05rem;
        span{
            display: inline-block;
            width: .4rem;
            height: .4rem;
            margin-left: .2rem;
            vertical-align: -12%;
            background: #fe9210;
            box-sizing: border-box;
            border: 1px solid #818181;
        }
    }
}
</style>
