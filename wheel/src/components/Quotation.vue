<template>
    <div>
        <p>页面</p>
        <button @click="showCity(true)" >城市:{{currentCity?currentCity:city.name+city.id}}</button>
        <CitySelect :class="isShowCity?'active':''"></CitySelect>
        {{quotionList}}
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
                quotionList:state=>state.quotation.quotionList
            })
        },
    methods: {
        ...mapMutations({
            showCity: 'quotation/showCity'
        }),
        ...mapActions({
            getQuotation:'quotation/getQuotation'
        }),
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
