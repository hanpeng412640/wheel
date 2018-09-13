<template>
    <div class="car-img">
         <div class="nav">
            <p @click="gocolor(carID)">
                <span>颜色</span>
            </p>
            <p>
                <span>车款</span>
            </p>
        </div>
           <ul class="img-list" v-for="(item,index) in ImgList" :key="index">
            <li v-for="(val,key) in item.List" :key="key"><img :src="val.Url" alt="" @click="goImgDetailList(item.id)"></li>
             <div class="classify">
                <p>{{item.Name}}</p>
                <p>{{item.Count}}张></p>
            </div>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      ImgList: state => state.img.ImgList,
      carID:state => state.img.carID
    })
  },
  methods: {
    ...mapActions({
      getImg: "img/getImg",
      getImgDetailList:"img/getImgDetailList"
    }),
    gocolor(id){
        this.$router.push({path:'/color',query:{id}})
    }
  },
  mounted() {
    this.getImg(this.$route.query.id);
  }
};
</script>

<style lang="scss" scoped>
.car-img {
  width: 100%;
  .nav {
    height: 0.8rem;
    display: flex;
    position: relative;
    &::after{
        content: "";
        height:.4rem;
        width: .05rem;
        background:#ececec;
        position: absolute;
        left:50%;
        top:50%;
        margin-top: -.2rem;
    }
    p {
      width: 50%;
      height: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      
      span {
        font-size: 0.28rem;
        &::after{
            content: "";
            display: inline-block;
            padding-top: .16rem;
            padding-right: .16rem;
            border-top: 2px solid #ccc;
            border-right: 2px solid #ccc;
            -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
            margin-left: .2rem;
            vertical-align: 5%;
        }
      }
    }
  }
  .img-list{
        width: 100%;
        border-top: .2rem solid #f4f4f4;
        display: flex;
        flex-wrap: wrap;
        position: relative;
       
    li{
        width: 2.46rem;
        height:2.46rem; 
        margin-right: .06rem;
        margin-bottom: .06rem;
        &:nth-child(3n){
         margin-right:0;   
        }
        img{
            width: 100%;
            height:100%;
        }
    }
    .classify{
            top:0;
            left:0;
            position: absolute;
            width: 2.46rem;
            height:2.46rem; 
            background: rgba(56,90,130,.5);
            color: #fff;
            text-align: center;
            p:nth-child(1){
                font-size: .28rem;
                margin-top: .8rem
            }
            p:nth-child(2){
                font-size: .26rem;
            }
    }
  }
}
</style>


