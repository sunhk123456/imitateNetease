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
                            {id:0,name:'海外制造商',type:'新品',price:'9.9元起',img:'https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?&quality=95&type=webp&imageView'},
                            {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?&quality=95&type=webp&imageView'},
                            {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
                            {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
                        ]},
                    {title:'新品首发',list:[
                            {id:0,name:'海外制造商',type:'新品',price:'9.9元起',img:'https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?&quality=95&type=webp&imageView'},
                            {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?&quality=95&type=webp&imageView'},
                            {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
                            {id:0,name:'CK制造商',type:'',price:'29.9元起',img:'https://yanxuan.nosdn.127.net/2ef40536e86eba997dc17cab62697a44.png?&quality=95&type=webp&imageView'},
                        ]},

                ]
            },
            code:"200"
        };
        resolve(resData)
    })
}

export {getCategoryList}