import instance from '@/http/http.js'


function getDetail(sid){
    return  new Promise(function (resolve,reject) {
        instance.get('api/detail/'+sid).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })

    // return new Promise((resolve)=>{
    //
    //     const resData ={
    //         "code":"200",
    //         'data': {
    //             // imgInit:0,
    //             name:"立邦铜离子儿童漆",
    //             price:"99",
    //             imgs:[
    //                 'http://localhost/oilPaint/public/assets/img/homeManu/儿童漆.jpg',
    //                 'http://localhost/oilPaint/public/assets/img/homeManu/儿童漆2.jpg',
    //                 'http://localhost/oilPaint/public/assets/img/homeManu/儿童漆3.jpg',
    //                 'http://localhost/oilPaint/public/assets/img/homeManu/儿童漆4.jpg',
    //                 'http://localhost/oilPaint/public/assets/img/homeManu/儿童漆5.jpg',
    //             ],
    //             // 颜色
    //             // colorInit:0,
    //             colors:[
    //                 {id:0,img:'http://localhost/oilPaint/public/assets/img/homeManu/儿童漆.jpg',},
    //                 {id:1,img:'http://localhost/oilPaint/public/assets/img/homeManu/儿童漆.jpg',},
    //                 {id:2,img:'http://localhost/oilPaint/public/assets/img/homeManu/儿童漆.jpg',},
    //                 {id:3,img:'http://localhost/oilPaint/public/assets/img/homeManu/儿童漆.jpg',},
    //             ],
    //             // 尺码
    //             // cmInit:0,
    //             cms:[
    //                 {id:0,text:'小'},
    //                 {id:1,text:'中'},
    //                 {id:2,text:'大'},
    //             ],
    //             // 数量
    //             // number:1,
    //             // navTab
    //             // navTabInit:0,
    //             detailNavTab:[
    //                 '详情','评价（100）',
    //             ],
    //             desc:[
    //                 'http://localhost/oilPaint/public/assets/img/儿童漆详情.jpg',
    //             ],
    //
    //             comments:[
    //                 {text:'质量上乘',},
    //                 {text:'性价比高'},
    //                 {text:'很舒服'}
    //             ],
    //
    //             userCommons:[
    //                 {name:'1****9',img:'//yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png',content:'用了这款油漆，非常nice，不用担心甲醛超标，自测甲醛很低！',type:'型号:中 颜色:红色油漆',time:'2019-10-16 07:57'},
    //                 {name:'1****9',img:'//yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png',content:'用了这款油漆，非常nice，不用担心甲醛超标，自测甲醛很低！',type:'型号:中 颜色:红色油漆',time:'2019-10-16 07:57'},
    //             ]
    //
    //         },
    //         "message":"保存成功"};
    //     resolve(resData)
    // })
}

export {getDetail}