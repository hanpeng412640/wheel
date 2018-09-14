<template>
    <div>
        <input type="text" ref="user">
        <input type="password" ref="pass">
        <button @click="login">登录</button>
    </div>
</template>

<script>
 export default {
    methods:{
        login(){
           _hmt.push(['_trackEvent',' 汽车报价', 'tap', '登录按钮点击']);
           let username=this.$refs.user.value 
           let password=this.$refs.pass.value 
           console.log(username)
           console.log(password)
           if(username=="hanpeng"&&password=="1234"){
               window.localStorage.setItem('login','true')
               window.history.back();
           }
        }
    }
 }
</script>

<style>

</style>
