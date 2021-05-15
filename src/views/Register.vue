<template>
    <div>
        <MyHeader />
        <div class="bg">
            <Register />
        </div>
        <MyFooter />
    </div> 
</template>

<script>
import MyHeader from "@/components/MyHeader/MyHeader.vue";
import Register from "@/components/Login/Register.vue";
import MyFooter from "@/components/MyFooter/MyFooter.vue";
export default{
  components: {  MyHeader,Register, MyFooter },
    name:"login",
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss">
    .bg{
        width: 100%;
        height: 410px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-image: url(../assets/img/loginBg.jpg);
        .loginFormWrap{
            margin: 0 100px 0 auto;
            .content .headerWrap .loginHeader{
                padding: 50px 0 10px;
            }
        }
    }
</style>

