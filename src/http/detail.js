import instance from '@/http/http.js'


function getDetail(data){
    // return new Promise(function (resolve, reject) {
    //     instance.put('api/orders/'+id).then(res=>{
    //         resolve(res)
    //     }).catch(error=>{
    //         reject(error)
    //     })
    //
    // })

    return new Promise((resolve)=>{

        const resData ={
            "code":"200",
            'data': {
                imgInit:0,
                imgs:[
                    'https://yanxuan-item.nosdn.127.net/68527c3e88af6ae1328fdcf0d1686aff.png?type=webp&imageView&thumbnail=430x430&quality=95',
                    'https://yanxuan-item.nosdn.127.net/768dc17a5f8668d62b64a0649917e1d7.png?type=webp&imageView&thumbnail=430x430&quality=95',
                    'https://yanxuan-item.nosdn.127.net/3eb818149f1eda5ed9f51b0c0ab760c9.png?type=webp&imageView&thumbnail=430x430&quality=95',
                    'https://yanxuan-item.nosdn.127.net/d60b41195a853e65a7dd0b3ac5cc0e8b.png?type=webp&imageView&thumbnail=430x430&quality=95',
                    'https://yanxuan-item.nosdn.127.net/07f63a4df938a91a32268e5340d6ef08.png?type=webp&imageView&thumbnail=430x430&quality=95'
                ],
                // 颜色
                colorInit:0,
                colors:[
                    {id:0,img:'https://yanxuan-item.nosdn.127.net/68527c3e88af6ae1328fdcf0d1686aff.png?type=webp&imageView&thumbnail=430x430&quality=95',},
                    {id:0,img:'https://yanxuan-item.nosdn.127.net/68527c3e88af6ae1328fdcf0d1686aff.png?type=webp&imageView&thumbnail=430x430&quality=95',},
                    {id:0,img:'https://yanxuan-item.nosdn.127.net/68527c3e88af6ae1328fdcf0d1686aff.png?type=webp&imageView&thumbnail=430x430&quality=95',},
                    {id:0,img:'https://yanxuan-item.nosdn.127.net/68527c3e88af6ae1328fdcf0d1686aff.png?type=webp&imageView&thumbnail=430x430&quality=95',},
                    {id:0,img:'https://yanxuan-item.nosdn.127.net/68527c3e88af6ae1328fdcf0d1686aff.png?type=webp&imageView&thumbnail=430x430&quality=95',},
                ],
                // 尺码
                cmInit:0,
                cms:[
                    {id:0,text:'大'},
                    {id:1,text:'中'},
                    {id:2,text:'小'},
                ],
                // 数量
                number:1,
                // navTab
                navTabInit:0,
                detailNavTab:[
                    '详情','评价（100）',
                ],
                desc:[
                    'https://yanxuan-item.nosdn.127.net/9c866dd74ed282a6516a7557aff27cad.jpg',
                    'https://yanxuan-item.nosdn.127.net/ef92646728bad4d1f402a56895b19a81.jpg'
                ],

                comments:[
                    {text:'质量上乘',},
                    {text:'性价比高'},
                    {text:'很舒服'}
                ],

                userCommons:[
                    {name:'1****9',img:'//yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png',content:'此款秋衣秋裤穿着柔软亲肤非常舒服暖和，我家人这两年都喜欢穿，以前买的纯棉的木代尔的都不穿了，现在穿的都是这款面料的是最爱了，好评！',type:'尺码:XL 颜色:藏青保暖套装',time:'2019-10-16 07:57'},
                    {name:'1****9',img:'//yanxuan.nosdn.127.net/485ff1be6912be6ae696b6d360d1b101.png',content:'此款秋衣秋裤穿着柔软亲肤非常舒服暖和，我家人这两年都喜欢穿，以前买的纯棉的木代尔的都不穿了，现在穿的都是这款面料的是最爱了，好评！',type:'尺码:XL 颜色:藏青保暖套装',time:'2019-10-16 07:57'},
                ]

            },
            "message":"保存成功"};
        resolve(resData)
    })
}

export {getDetail}