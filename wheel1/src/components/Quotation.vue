<template>
    <div>
        <p>页面</p>
        <button @click="showCity(true)" >城市:{{currentCity?currentCity:city.name+city.id}}</button>
        <CitySelect :class="isShowCity?'active':''"></CitySelect>
        <div>
            <input type="text" placeholder="请输入你的手机号" ref="phone">
            <button @click="click" :class="isSendSMS?'disable':''">{{isSendSMS?timer:"获取验证码"}}</button>
        </div>
    </div>
</template>

<script>
import CitySelect from './common/CitySelect'
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    computed: {
            ...mapState({
                isShowCity: state=>state.quotation.isShowCity,
                currentCity: state=>state.quotation.currentCity,
                city: state=>state.quotation.city,
                isSendSMS:state=>state.quotation.isSendSMS,
                timer:state=>state.quotation.timer,
                quotionList:state=>state.quotation.quotionList
            })
        },
    methods: {
        ...mapMutations({
            showCity: 'quotation/showCity'
        }),
        ...mapActions({
            getQuotation:'quotation/getQuotation',
            getCapture:'quotation/getCapture'
        }),
        click(){
            if(this.isSendSMS){
                return;
            }
            let phone=this.$refs.phone.value;
            if(!/^1[3,4,5,7,8,9]\d{9}$/.test(phone)){
                alert('请输入正确的手机号码');
                return;
            }
            this.getCapture(phone);
        },
        getQuotation(){
            
        }
    },
    mounted(){
        this.getQuotation(this.$route.query.id)
    },
    components:{
        CitySelect
    }
}
</script>

<style>

</style>
