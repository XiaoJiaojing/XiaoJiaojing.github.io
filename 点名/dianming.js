var arr=["孙策","梦奇","项羽","达摩","廉颇","苏烈","凯","东皇太一","张飞","牛魔","刘邦","关羽"
    ,"程咬金","夏侯惇","钟无艳","吕布","刘禅","白起","庄周","芈月"];

function my$(id) {
    return document.getElementById(id)
}
if(!my$("uu")){
    var ulObj=document.createElement("ul");
    ulObj.id="uu";
    my$("dv1").appendChild(ulObj);
}

//            创建li元素,并追加到ul中
for(i=0;i<arr.length;i++){
    var liObj=document.createElement("li");
    liObj.innerHTML=arr[i];
    ulObj.appendChild(liObj);
}
//          创建子div，并将其追加到父div中
var dvObj=document.createElement("div");
dvObj.id="kongzhi";
dvObj.className="clearfix";
my$("dv1").appendChild(dvObj);
//            创建两个input元素，并将其追加到子div中
if(!dvObj.iObj1){
    var iObj1=document.createElement("input");
    iObj1.id="btn1";
    iObj1.type="button";
    iObj1.value="单人点名";
    dvObj.appendChild(iObj1);
}

var iObj3=document.createElement("input");
var iObj2=document.createElement("input");

iObj3.id="btn3";
iObj3.type="button";
iObj3.value="双人点名";

iObj2.id="btn2";
iObj2.type="button";
iObj2.value="结束"

dvObj.appendChild(iObj3);
dvObj.appendChild(iObj2);

var timeId1,timeId2
my$("btn1").onclick=function () {
    clearInterval(timeId1);
    clearInterval(timeId2);
    timeId1=setInterval(function () {
        var num=parseInt(Math.random()*arr.length);
        for(var j=0;j<arr.length;j++){
            my$("uu").children[j].style.backgroundColor="";
        }
        my$("uu").children[num].style.backgroundColor="red";

    },100)

};
//   注册点击双人点名事件
my$("btn3").onclick=function () {
    clearInterval(timeId1);
    clearInterval(timeId2);
    timeId2=setInterval(function () {
        var num=parseInt(Math.random()*arr.length);
        var num1=parseInt(Math.random()*arr.length);
        for(var j=0;j<arr.length;j++){
            my$("uu").children[j].style.backgroundColor="";
        }
        my$("uu").children[num].style.backgroundColor="red";
        my$("uu").children[num1].style.backgroundColor="red";

    },100)
};
//   注册点击结束点名事件
my$("btn2").onclick=function () {
    clearInterval(timeId1);
    clearInterval(timeId2);
}