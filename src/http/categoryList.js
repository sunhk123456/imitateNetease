import instance from '@/http/http.js'


function getCategoryList(data){
    // return  new Promise(function (resolve,reject) {
    //     instance.get('api/detail/'+sid).then(res=>{
    //         resolve(res);
    //     }).catch(error=>{
    //         reject(error);
    //     })
    // })

    return new Promise((resolve)=>{

        const resData ={
            data:{
                manufacturerList:[
                    {title:'秋季美食',list:[
                            {id:1,name:'儿童漆',type:'新品',price:'9.9元起',img:'http://localhost/oilPaint/public/assets/img/homeManu/儿童漆.jpg'},
                            {id:23,name:'刷新服务',type:'',price:'29.9元起',img:'http://localhost/oilPaint/public/assets/img/homeManu/刷新服务.jpg'},
                            {id:24,name:'原生植萃系列',type:'',price:'29.9元起',img:'http://localhost/oilPaint/public/assets/img/homeManu/原生植萃系列.jpg'},
                            {id:25,name:'厨房底材',type:'',price:'29.9元起',img:'http://localhost/oilPaint/public/assets/img/homeManu/厨房底材.jpg'},
                        ]},
                    {title:'新品首发',list:[
                            {id:1,name:'海外制造商',type:'新品',price:'9.9元起',img:'http://localhost/oilPaint/public/assets/img/homeManu/儿童漆.jpg'},
                            {id:23,name:'CK制造商',type:'',price:'29.9元起',img:'http://localhost/oilPaint/public/assets/img/homeManu/刷新服务.jpg'},
                            {id:24,name:'CK制造商',type:'',price:'29.9元起',img:'http://localhost/oilPaint/public/assets/img/homeManu/原生植萃系列.jpg'},
                            {id:25,name:'CK制造商',type:'',price:'29.9元起',img:'http://localhost/oilPaint/public/assets/img/homeManu/厨房底材.jpg'},
                        ]},

                ]
            },
            code:"200"
        };
        resolve(resData)
    })
}

export {getCategoryList}