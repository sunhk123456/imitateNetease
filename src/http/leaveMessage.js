import instance from '@/http/http.js'


function getLeaveMessage(uid){
    return  new Promise(function (resolve,reject) {
        instance.get('api/leaveMessage/'+uid).then(res=>{
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })


}
function setLeaveMessage(params){
    return  new Promise(function (resolve,reject) {
        instance.post('api/leaveMessage', params).then(res=>{
            resolve(res);
            if (res.code===200){
                this.$router.push('/myMessage')
            }else {
                alert("导入失败")
            }
        }).catch(error=>{
            reject(error);
        })
    })


}
export {getLeaveMessage,setLeaveMessage}