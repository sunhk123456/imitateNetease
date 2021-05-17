<template>
  <div>
    <MyHeader />
      <div class="form">
          <h1 align="center">留言小屋 </h1>
          <form action="aaa">
              <lable >
                  <input type="text">

              </lable>
              <input type="submit" value="提交">
          </form>
          <a-form :form="form" @submit="handleSubmit" style="width: 70%;margin-left: 15%">
              <a-form-item label="紧急程度">
                  <a-select
                          v-decorator="[
          'gender',
          { rules: [{ required: true, message: 'Please select your emergency degree !' }] },
        ]"
                          placeholder="选择你的紧急程度"
                          @change="handleSelectChange"
                  >
                      <a-select-option value="urgency">
                          紧急
                      </a-select-option>
                      <a-select-option value="medium">
                          中等
                      </a-select-option>
                      <a-select-option value="noUrgency">
                          不紧急
                      </a-select-option>
                  </a-select>
              </a-form-item>
              <a-form-item label="留言信息">
                  <a-input
                          v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
                  />
              </a-form-item>

              <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                  <a-button type="primary" html-type="submit">
                      Submit
                  </a-button>
              </a-form-item>
          </a-form>
      </div>


    <MyFooter />
  </div> 
</template>

<script>
import MyHeader from "@/components/MyHeader/MyHeader.vue";
import MyFooter from "@/components/MyFooter/MyFooter.vue";
import {getCategoryList} from '@/http/categoryList';
import { Form } from 'ant-design-vue';
export default{
  components: {  MyHeader, MyFooter },
    name:"categoryList",
    data(){
        return{
            formLayout: 'horizontal',
            form: this.$form.createForm(this, { name: 'coordinated' }),
        }
    },
    created(){
        this.getCategoryList();

    },
    methods:{
        getCategoryList(){

            const id=this.$route.query.id;
            getCategoryList(id).then(res => {
                if (res.data) {
                    console.log(res)
                    this.manufacturerList=res.data.manufacturerList;
                }
            })
        },
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        },
        handleSelectChange(value) {
            console.log(value);
            // this.form.setFieldsValue({
            //     note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
            // });
        },
    },
}
</script>

<style lang="scss" scoped>
  .form{
      padding: 20px;
  }
</style>

