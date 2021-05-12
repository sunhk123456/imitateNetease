<template>
    <div>
        <MyHeader />
        <MyFooter></MyFooter>
<!--        <TopBar></TopBar>-->
        <FixedTool></FixedTool>
        <FlashSale></FlashSale>
        <GoodsSale></GoodsSale>
        <MenuBanner></MenuBanner>
        <SiteFooter></SiteFooter>
        <SiteInfo></SiteInfo>
        <SubChannel></SubChannel>
        <ToolBar></ToolBar>
        <TopHeader></TopHeader>
        <VideoBox></VideoBox>
    </div>
</template>

<script>
    import MyHeader from "@/components/MyHeader/MyHeader.vue";
    import MyFooter from "@/components/MyFooter/MyFooter.vue";
    import FixedTool from "@/components/FixedTool/FixedTool.vue";
    import TopBar from "@/components/TopBar.vue";
    import FlashSale from "@/components/FlashSale.vue";
    import GoodsSale from "@/components/GoodsSale.vue";
    import MenuBanner from "@/components/MenuBanner.vue";
    import SiteFooter from "@/components/SiteFooter";
    import SiteInfo from "@/components/SiteInfo.vue";
    import SubChannel from "@/components/SubChannel";
    import ToolBar from "@/components/ToolBar";
    import TopHeader from "@/components/TopHeader";
    import VideoBox from "@/components/VideoBox";
    export default{
        components: {  MyHeader,MyFooter,FixedTool,
            FlashSale,
            GoodsSale,
            MenuBanner,
            SiteFooter,
            SiteInfo,
            SubChannel,
            ToolBar,
            TopHeader,
            VideoBox,
        }, //Recom,
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


