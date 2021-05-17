import instance from '@/http/http.js'


function getSwipetInfo(data){
    // return new Promise(function (resolve, reject) {
    //     instance.put('api/orders/'+id).then(res=>{
    //         resolve(res)
    //     }).catch(error=>{
    //         reject(error)
    //     })
    //
    // })
    return new Promise((resolve)=>{
      const resData ={"code":"200",
      'data': {
          'swipetInfo':[
              // {url:'/user',img:`${IMGURL}img/homeSwipe/n05.png`},
              {url:'',img:'http://localhost:9004/img/homeSwipe/n05.png'},
              {url:'',img:'http://localhost:9004/img/homeSwipe/pc03.jpg'},
              {url:'',img:'http://localhost:9004/img/homeSwipe/pc06.jpg'},
              {url:'',img:'http://localhost:9004/img/homeSwipe/pc08.jpg'},
          ],
          'manufacturerList':[
              {id:1,name:'',type:'',price:'',img:'http://localhost:9004/img/homeManu/儿童漆.jpg'},
              {id:1,name:'',type:'',price:'',img:'http://localhost:9004/img/homeManu/刷新服务.jpg'},
              {id:1,name:'',type:'',price:'',img:'http://localhost:9004/img/homeManu/原生植萃系列.jpg'},
              {id:1,name:'',type:'',price:'',img:'http://localhost:9004/img/homeManu/艺术漆.jpg'},
          ],
          'manufacturerList2':[
              {id:1,name:'内墙乳胶漆',type:'新品尝鲜',price:'15.8',img:'http://localhost:9004/img/我要产品/内墙乳胶漆.jpg'},
              {id:1,name:'厨卫底材',type:'新品尝鲜',price:'15.8',img:'http://localhost:9004/img/我要产品/厨卫底材.jpg'},
              {id:1,name:'基础材料',type:'新品尝鲜',price:'15.8',img:'http://localhost:9004/img/我要产品/基础材料.jpg'},
              {id:1,name:'外墙乳胶漆',type:'新品尝鲜',price:'15.8',img:'http://localhost:9004/img/我要产品/外墙乳胶漆.jpg'},
          ]
      },
          "message":"保存成功"};
      resolve(resData)
    })
}

export {getSwipetInfo}