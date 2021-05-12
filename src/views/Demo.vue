<template>
    <div>
        <MyHeader />
        <MyFooter></MyFooter>
        <FixedTool></FixedTool>
    </div>
</template>

<script>
    import MyHeader from "@/components/MyHeader/MyHeader.vue";
    import MyFooter from "@/components/MyFooter/MyFooter.vue";
    import FixedTool from "@/components/FixedTool/FixedTool.vue";
    export default{
        components: {  MyHeader,MyFooter,FixedTool}, //Recom,
        name:"detail",
        data(){
            return{


            }
        },
        created(){

        },
        mounted(){

        },
        methods:{
            // 去评论
            goComm(){
                this.navTabInit = 1;
                this.$nextTick(() => {
                    let commTop = this.$refs.comm.offsetTop + 80;
                    // 实现滚动效果
                    const timeTop = setInterval(() => {
                        document.body.scrollTop = document.documentElement.scrollTop = commTop -= 10;
                        if (commTop == document.documentElement.scrollTop) {
                            clearInterval(timeTop);
                        }
                    }, 10);
                })

            },
            // 数量减
            numReduce(){
                if(this.number <= 1){
                    this.number = 1;
                    return
                }
                this.number--;
            },
            // 购买
            handleBuy(){
                this.$router.push('/order')
            }
        },
    }
</script>


