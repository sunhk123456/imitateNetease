<template>
    <div>
        <MyHeader />
        <div class="detailBox">
            <div class="row">
                <!-- 面包屑 -->
                <div class="crumbs">
                    <router-link  to="/">首页</router-link>
                    <div class="icon icon-right_s"></div>
                    <span class="">{{$route.query.keyword}}</span>
                </div>
                <!-- content -->
                <div class="content clearfixs">
                    <!-- 主信息 -->
                    <div class="detailHd">
                        <div class="slide">
                            <div class="picsWrap">
                                <div class="view">
                                    <div class="smallPic">
                                        <img class="thumbImg" :src="imgs[imgInit]" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="list">
                                <ul>
                                    <li @click="imgInit = index" :class="index == imgInit? 'active' : ''" v-for="(item,index) in imgs" :key='index'>
                                        <a href="javascript:;">
                                            <img :src="item" alt="">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="info">
                            <div class="intro">
                                <div class="nameInfo">
                                    <div class="name">{{name}}</div>
                                    <div class="desc">无甲醛无添加</div>
                                </div>
                                <div class="comm">
                                    <div class="num">99.7%</div>
                                    <a class="text">
                                        <span @click="goComm">好评率</span>
                                        <span class="icon icon-right_s"></span>    
                                    </a>
                                </div>
                            </div>
                            <div class="price">
                                <div class="field">
                                    <span class="label">价格</span>
                                    <div class="data">
                                        <span class="text">￥</span>
                                        <span class="num">{{price*number}}</span>
                                    </div>
                                </div>
                                <div class="field">
                                    <span class="label">限制</span>
                                    <div class="pointCt">该商品不可使用优惠券</div>
                                </div>
                                <hr />
                                <div class="field">
                                    <span class="label">服务</span>
                                    <div class="policyBox">
                                        ･ 支持30天无忧退换货    ･ 48小时快速退款    ･ 满88元免邮费    ･ 立邦自营品牌
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="parampicker">
                                    <div class="specProp">
                                        <span class="type">颜色</span>
                                        <div class="cont">
                                            <ul class="tabs">
                                                <li @click="colorInit = index" class="tab-con tab tab-pic" v-for="(item,index) in colors" :key='index'>
                                                    <a :class="index == colorInit ? 'tab-sel' : ''"  class="tab-pic" href="javascript:;">
                                                        <img :src="item.img" alt="">
                                                        <i class="icon-normal"></i>   
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="specProp">
                                        <span class="type">型号</span>
                                        <div class="cont">
                                            <ul class="tabs">
                                                <li @click="cmInit = index" class="tab  tab-con" v-for="(item,index) in cms" :key='index'>
                                                    <a :class="index == cmInit ? 'tab-sel' : ''"  class=' tab-txt ' href="javascript:;">
                                                        <span>{{item.text}}</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="specProp">
                                        <span class="type">数量</span>
                                        <div class="number cont">
                                            <span :class="number <= 1? 'noActive' :''" @click="numReduce" class="jian icon icon-reduce"></span>
                                            <span class="number">{{number}}</span>
                                            <span @click="number++" class="jia icon icon-add"></span> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="btns">
                                <a @click="handleOrders" href="javascript:;" class="button ghost">立即购买</a>
                                <a href="javascript:;" class="button addCart"><span class="icon icon-gouwuche"></span> 加入购物车</a>
                                <div class="addSc">
                                    <div class="icon icon-star"></div>
                                    <div class="text">收藏</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 详情 -->
                    <div class="detailBd">
                        <!-- 左侧 -->
                        <div class="leftInfo">
                            <!-- navTab -->
                            <div class="detailNavTab">
                                <ul>
                                    <li @click="navTabInit = index" :class="navTabInit == index ? 'active' : ''" class="item" v-for="(item,index) in detailNavTab" :key="index">
                                        {{item}}
                                    </li>
                                </ul>
                            </div>
                            <!-- tabContent -->
                            <div class="tabContent">
                                <div v-if="navTabInit == 0">
                                    <img v-for="(item,index) in desc" :key='index' class="descImg" :src="item" alt="">
                                </div>
                                <div class="commentList" ref="comm" v-if="navTabInit == 1">
                                    <div class="navWrap">
                                        <div class="goodRates">
                                            <div class="label">好评率</div>
                                            <div class="goodRate">99.7%</div>
                                        </div>
                                        <div class="commentNav">
                                            <div class="title">大家都在说：</div>
                                            <div class="labelList">
                                                <span v-for="(item,index) in comments" :key="index">{{item.text}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="commons">
                                        <div class="item" v-for="(item,index) in userCommons" :key='index'>
                                            <div class="commentUser">
                                                <div class="avatarWarp">
                                                    <img :src="item.img" :alt="item.name">
                                                </div>
                                                <div class="username">
                                                    {{item.name}}
                                                </div>
                                            </div>
                                            <div class="commentItem">
                                                <div class="skuInfo">{{item.type}}</div>
                                                <div class="content">{{item.content}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <boot-page ></boot-page>
                                </div>
                            </div>
                        </div>
                        <!-- 右侧热销 -->
                        <div class="rightInfo">
                            
                        </div>
                    </div>
                </div>
                <!-- 推荐 -->
                <!-- <Recom /> -->
            </div>
        </div>
        <MyFooter />
    </div> 
</template>

<script>
import MyHeader from "@/components/MyHeader/MyHeader.vue";
// import Recom from "@/components/Recom/Recom.vue";
import MyFooter from "@/components/MyFooter/MyFooter.vue";
import bootPage from '@/components/BootPage/BootPage.vue';
import {apiRead, apiCollection} from "@/http/api"
import {getDetail} from '@/http/detail'
import { message } from 'ant-design-vue';

export default{
  components: {  MyHeader,  MyFooter ,bootPage}, //Recom,
    name:"detail",
    data(){
        return{
            imgInit:0,
            name:"",
            price:"",
            imgs:[
           ],
            // 颜色
            colorInit:0,
            colors:[
               ],
            // 尺码
            cmInit:0,
            cms:[
              ],
            // 数量
            number:1,
            // navTab
            navTabInit:0,
            detailNavTab:[
                ],
            desc:[
                    ],

            comments:[
               ],

            userCommons:[
               ]

        }
    },
    created(){
    },
    mounted(){
        // console.log(  "22222",     this.$route.query.sid)
        this.getDetail();

        // this.$store.dispatch('settoken',"123123")

    },
    methods:{
      //获取细节数据
        getDetail(){

            getDetail(this.$route.query.sid).then(res => {
                if (res.data) {

                    console.log(res)
                    console.log(res.data.detailNavTab)
                    this.name=res.data.name
                    this.price=res.data.price
                    this.imgs=res.data.imgs&&res.data.imgs.map(ele=>ele.img)
                    this.colors=res.data.colors
                    this.cms=res.data.cms
                    this.detailNavTab=res.data.detailNavTab&&res.data.detailNavTab.map(ele=>ele.text)
                    this.desc=res.data.desc&&res.data.desc.map(ele=>ele.img)
                    this.comments=res.data.comments
                    this.userCommons=res.data.userCommons
                    console.log("res.data.imgs",res.data.imgs)
                }
            })
        },
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
        },

        //提交订单
        handleOrders() {
            let token=this.$store.state.token;

            let sid =this.$route.query.sid;

            // let query={
            //     sid,price:this.price,cm:this.cms[this.cmInit],img:this.imgs[this.imgInit],num:this.number,name:this.name
            // }
            // this.$router.push({path:'Order',query:query});
            console.log(sid);
            let query={
                redirect:'detail',
                sid:sid
            };
            if (!token){

                // debugger
                this.$router.push({path:'Login',query:query});
            }else {

                let query={
                    sid,price:this.price,cm:this.cms[this.cmInit],img:this.imgs[this.imgInit],num:this.number,name:this.name
                }
                this.$router.push({path:'Order',query});
            }

        }
        ,
        // initstaydetail() {
        //     apiRead(this.sid).then(res => {
        //         // console.log(res);
        //         let stayhome = res.data.stayhome;
        //         let sbanner = stayhome.sbanner.split(/,/);
        //         sbanner = sbanner.map(ele => {
        //             ele = IMGURL + ele;
        //             return ele;
        //         })
        //         stayhome.sbanner = sbanner;
        //         this.stayhome = stayhome;
        //         let recommend = res.data.recommend;
        //         recommend.map(ele => {
        //             ele.sthumb = IMGURL + ele.sthumb;
        //         });
        //         this.recommend = recommend;
        //     }).catch(() => {
        //     })
        // },
    },
}
</script>

<style lang="scss">
    .detailBox{
        .content{
            padding: 0 0 80px;
            .detailHd{
                display: flex;
                justify-content: space-between;
                .slide{
                    width: 430px;
                    .picsWrap{
                        height: 430px;
                    }
                    .view {
                        position: relative;
                        height: 430px;
                        border: 1px solid #e8e8e8;
                        margin-right: 16px;
                        .thumbImg {
                            display: block;
                            width: 100%;
                            height: 428px;
                            background-color: #f4f4f4;
                        }
                    }
                    .list{
                        overflow: hidden;
                        margin-top: 14px;
                        ul{
                            position: relative;
                            li{
                                position: relative;
                                zoom: 1;
                                width: 78px;
                                height: 78px;
                                overflow: hidden;
                                margin-left: 10px;
                                vertical-align: top;
                                float: left;     
                                &:first-child {
                                    margin-left: 0;
                                }
                                &.active a {
                                    margin: 0;
                                    border: 2px solid #b4a078;
                                }
                                a{
                                    box-sizing: border-box;
                                    display: block;
                                    width: 78px;
                                    height: 78px;
                                    border: 1px solid #e8e8e8;
                                    img{
                                        display: inline-block;
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                            }
                        }
                    }
                }
                .info{
                    width: 620px;
                    word-break: break-all;
                    word-wrap: break-word;
                    position: relative;
                    hr{
                        margin: 10px 20px 10px 10px;
                        overflow: hidden;
                        border: none;
                        height: 1px;
                        border-bottom: 1px dashed #d2d2d2;
                    }
                    .comment{
                        display: inline-block;
                        position: absolute;
                        top: 0;
                        right: 0;
                        line-height: 1.2;
                        text-align: right;
                        z-index: 1;
                        font-weight: 400;
                    }
                    .intro{
                        overflow: hidden;
                        margin: 20px 0;
                        display: flex;
                        justify-content: space-between;
                        .nameInfo{
                            .name{
                                font-size: 20px;
                                font-weight: 700;
                                line-height: 20px;
                                margin-bottom: 7px;
                                position: relative;
                                padding-right: 65px;
                            }
                            .desc{
                                width: 520px;
                                font-size: 14px;
                                line-height: 20px;
                                color: #999;
                            }
                        }
                        .comm{
                            .num{
                                color: #E36844;
                                font-size: 20px;
                            }
                            .text{
                                cursor: pointer;
                                font-size: 13px;
                            }
                        }
                    }
                    .price{
                        background-color: #f5f3ef;
                        border-top: 1px dotted #dedede;
                        border-bottom: 1px dotted #dedede;
                        padding: 0 0 13px;
                        line-height: 24px;
                        font-size: 13px;
                        position: relative;
                        .field{
                            display: flex;
                            &:first-child .label{
                                line-height: 30px;
                                margin-top: 16px;
                            }
                            .label{
                                width: 55px;
                                font-size: 13px;
                                float: left;
                                color: #666;
                                margin-left: 10px;
                            }
                            .data{
                                font-size: 18px;
                                font-weight: 700;
                                margin-right: 1px;
                                margin-top: 13px;
                                margin-left: 0;
                                height: 30px;
                                .text{
                                    margin-left: 0;
                                    line-height: 30px;
                                    color: #d7282d;
                                    font-size: 18px;
                                }
                                .num {
                                    font-size: 28px;
                                    line-height: 30px;
                                    margin-left: 2px;
                                    color: #d7282d;
                                }
                            }
                            .pointCt{
                                color: #666;
                            }
                            .policyBox{
                                margin-left: 0px;
                                padding-top: 2px;
                                line-height: 20px;
                                color: #666;
                            }
                        }
                    }
                    .parampicker{
                        margin-left: 10px;
                        margin-top: 20px;
                        .specProp{
                            margin-top: 10px;
                            position: relative;
                            line-height: 1;
                            display: flex;
                            .type{
                                float: left;
                                font-size: 12px;
                                color: #666;
                                width: 54px;
                                line-height: 50px;
                            }
                            .cont{
                                position: relative;
                                width: 550px;
                                .tabs{
                                    .tab-txt {
                                        padding: 0 16px;
                                        line-height: 28px;
                                        height: 28px;
                                        font-size: 12px;
                                        color: #333;
                                        overflow: hidden;
                                    }
                                    .tab-con {
                                        float: left;
                                        position: relative;
                                        margin-right: 10px;
                                        margin-bottom: 15px;
                                        vertical-align: middle;
                                        padding: 1px;
                                    }
                                    .tab-pic {
                                        width: 50px;
                                        height: 50px;
                                        img{
                                            display: block;
                                            width: 100%;
                                            height: 100%;
                                        }
                                    }
                                    .tab-sel {
                                        line-height: 26px;
                                        border: 2px solid #b4a078;
                                        color: #333;
                                        margin-left: -1px;
                                        margin-right: -1px;
                                        display: block;
                                        box-sizing: border-box;
                                    }
                                    .tab {
                                        border: 1px solid #ddd;
                                        float: left;
                                        cursor: pointer;
                                        position: relative;
                                    }
                                }
                            }
                            div.number{
                                display: flex;
                                span{
                                    border: 1px solid #ddd;
                                    text-align: center;
                                    font-weight: bold;
                                    color: #999;
                                    cursor: pointer;
                                    display: block;
                                    position: relative;
                                    float: left;
                                    width: 36px;
                                    height: 30px;
                                    line-height: 28px;
                                    background: #fff;
                                }
                                span.number{
                                    width: 50px;
                                }
                                .noActive{
                                    color: #ddd;
                                }
                            }
                        }
                    }
                    .btns{
                        margin-left: 12px;
                        margin-top: 30px;
                        font-size: 0;
                        display: flex;
                        .button{
                            display: inline-block;
                            margin-right: 10px;
                            width: 168px;
                            height: 50px;
                            line-height: 50px;
                            font-size: 18px;
                            text-align: center;
                        }
                        .ghost {
                            color: #b4a078;
                            border: 1px solid #b4a078;
                            background-color: #f5f3ef;
                        }
                        .addCart{
                            color: #fff;
                            border: 1px solid #b4a078;
                            background-color: #b4a078;
                            .icon{
                                margin: 12px 8px 0 0;
                                font-size: 20px;
                            }
                        }
                        .addSc{
                            position: relative;
                            display: inline-block;
                            height: 49px;
                            width: 50px;
                            border: 1px solid #CCC;
                            overflow: hidden;
                            text-align: center;
                            cursor: pointer;
                            .icon{
                                position: relative;
                                overflow: hidden;
                                height: 24px;
                                font-size: 20px;
                            }
                            .text{
                                height: 23px;
                                font-size: 13px;
                                line-height: 23px;
                                color: #999;
                            }
                        }
                    }
                }
            }
            .detailBd{
                margin-top: 30px;
                display: flex;
                .leftInfo{
                    width: 750px;
                    margin-right: 40px;
                    background-color: #f5f5f5;
                    .detailNavTab{
                        border-top: 1px solid #e8e8e8;
                        border-bottom: 1px solid #e8e8e8;
                        ul{
                            display: flex;
                        }
                        .item{
                            width: 124px;
                            border-top: none;
                            border-bottom: none;
                            border: 1px solid #e8e8e8;
                            border-left: none;
                            background-color: #f5f5f5;
                            height: 42px;
                            box-sizing: border-box;
                            line-height: 40px;
                            font-size: 14px;
                            position: relative;
                            text-align: center;
                            cursor: pointer;
                            &.active {
                                border-top: 3px solid #b4a078;
                                background-color: #fff;
                                border-bottom: 1px solid #fff;
                                color: #b4a078;
                            }
                        }
                    }
                    .tabContent{
                        .descImg{
                            width: 100%;
                            display: block;
                            margin-bottom: 30px;
                        }
                    }
                    .tabContent{
                        .commentList{
                            margin: 0 0 16px;
                            border-top: none;
                            background-color: #fff;
                            padding-top: 27px;
                            .navWrap{
                                display: flex;
                                padding-bottom: 20px;
                                border-bottom: 1px dashed #dedede;
                                .goodRates{
                                    border-right: 1px solid #eaeaea;
                                    width: 126px;
                                    text-align: center;
                                    padding-top: 4px;
                                    margin-right: 20px;
                                    .label{
                                        font-size: 14px;
                                        color: #666;
                                        line-height: 14px;
                                        margin-bottom: 15px;
                                    }
                                    .goodRate{
                                        font-size: 36px;
                                        color: #E36844;
                                        line-height: 36px;
                                        margin-bottom: 8px;
                                    }
                                }
                                .commentNav{
                                    margin: 0 20px;
                                    padding: 4px 0 6px;
                                    overflow: hidden;
                                    font-size: 14px;
                                    .title{
                                       overflow: hidden;
                                        line-height: 1;
                                        padding-bottom: 14px; 
                                    }
                                    .labelList{
                                        span{
                                            display: inline-block;
                                            margin: 0 10px 10px 0;
                                            padding: 0 7px 0 16px;
                                            line-height: 26px;
                                            border-radius: 100px;
                                            background-color: #F5F3EF;
                                            cursor: pointer;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .commons{
                        .item{
                            padding: 27px 0 30px;
                            margin-left: 30px;
                            margin-right: 23px;
                            border-bottom: 1px dashed #e8e8e8;
                            display: flex;
                            &:last-child {
                                border: none;
                            }
                            .commentUser{
                              min-height: 10px;
                              width: 70px;
                              .avatarWarp{
                                position: relative;
                                width: 50px;
                                height: 50px;
                                margin: 0 auto;
                                img{
                                  display: block;
                                  width: 100%;
                                  height: 100%;
                                }
                              }
                              .username{
                                margin-top: 12px;
                                width: 100%;
                                height: 18px;
                                line-height: 18px;
                                text-align: center;
                              }
                            }
                            .commentItem{
                              margin-left: 20px;
                              font-size: 14px;
                              width: 603px;
                              .skuInfo{
                                color: #999;
                                line-height: 1;
                                padding-bottom: 10px;
                              }
                              .content{
                                line-height: 20px;
                                font-size: 14px;
                                color: #333;
                                margin-bottom: 10px;
                                word-break: break-word;
                                padding: 0;
                              }
                            }
                        }
                    }
                }
            }
        }
    }
</style>

