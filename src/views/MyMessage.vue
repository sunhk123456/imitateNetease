<template>
  <div>
    <MyHeader />
      <div class="form">
          <h1 align="center">我的留言 </h1>


          <table class="myTable">
              <tr class="myTitle">
                  <th>留言页面 </th>
                  <th>留言模块</th>
                  <th>留言描述</th>
                  <th>管理员处理</th>
              </tr>

              <tr  :key="index"  v-for="(item,index) in tabData">
                  <td>{{item.title}} </td>
                  <td>{{item.model}}</td>
                  <td>{{item.description}}</td>
                  <td  v-if="item.deal" style="color:red">{{item.deal}}</td>
                  <td  v-else> 暂无</td>
              </tr>
          </table>

      </div>


    <MyFooter />
  </div> 
</template>

<script>
import MyHeader from "@/components/MyHeader/MyHeader.vue";
import MyFooter from "@/components/MyFooter/MyFooter.vue";
import {getLeaveMessage} from '@/http/leaveMessage';
import { Form } from 'ant-design-vue';
export default{
  components: {  MyHeader, MyFooter },
    name:"categoryList",
    data(){
        return{
            formLayout: 'horizontal',
            tabData:[]
        }
    },
    created(){
        // this.getCategoryList();
        const id=this.$store.state.uid;
        if ( !id)
        {
            alert("请登录")
            this.$router.push('/login')
        }else {
            this.getMessage(id);
        }
    },
    methods:{



        getMessage(id){
            getLeaveMessage(id).then(res=>{
                console.log(res)
                this.tabData=res.data;
            }).catch(err=>{
                err
            })
        }

    },
}
</script>

<style lang="scss" scoped>
    .form{
        margin: 40px;
    }
    .myTable {
        margin: 20px auto;

        height: 300px;
        width: 700px;
    }

    .myTitle {
        background-color: #F2F3F5;
    }

    tr:hover {
        background: #edffcf;
    }

    th {
        font-size: 16px;
        font-weight: bold;
        height: 30px;
    }

    td {
        font-size: 14px;
        height: 40px;
    }

    th,td {
        border: solid 1px black;
        text-align: center;
    }
</style>

