function add() {
    var a=1;
    this.a++;
    console.log(this.a);
}
var a=5;
// add();
console.log(a);
var obj={
    a:3,
    add
}
// obj.add();
var obj2={
    a:10,
    add
}
// var bar=function () {
//     add.call(obj)
// }
// // bar();
function funcAdd() {
    return a=>{
        this.a++;
        console.log(this);
    }

}
var obj1={
    a:10
};
var obj2={
    a:20
}
var bar=funcAdd.call(obj1)
bar.call(obj2);