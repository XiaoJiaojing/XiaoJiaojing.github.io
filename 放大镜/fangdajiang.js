// 首先获取所有所需要的元素
var box = document.getElementById('box');
// 获取小图的div
var small = box.children[0];

// 获取遮挡层
var mask = small.children[0];

// 获取所有的小图
var smallImgList = small.getElementsByTagName('img')


// 获取大图的div
var big = box.children[1];
// 获取大图的集合
var bigImgList = big.children

// 鼠标进入，显示遮挡层和大图
box.onmouseover = function () {
    mask.style.display = "block";
    big.style.display = "block";
}
// 鼠标离开，隐藏遮挡层和大图
box.onmouseout = function () {
    mask.style.display = "none";
    big.style.display = "none";
}

// 鼠标点击下面小图的时候，进行切换
var superSmallImg = document.getElementById('superSmallImg')

var superSmallImgList = superSmallImg.children[0].children

for(var i=0;i<superSmallImgList.length;i++){
    superSmallImgList[i].setAttribute('index',i)
    superSmallImgList[i].onclick = function () {
        for(var j=0;j<superSmallImgList.length;j++){
            superSmallImgList[j].className = ' '
        }
        this.className = 'active'
        for(var j=0;j<smallImgList.length;j++){
            smallImgList[j].className = ' '

        }
        for(var j=0;j<bigImgList.length;j++){
            bigImgList[j].className = ' '
        }

        var index = this.getAttribute('index')
        smallImgList[index].className = 'current'
        bigImgList[index].className = 'current'

    }
}

// 鼠标的移动事件，是在small层上操作
small.onmousemove = function (e) {
    // 获取移动的大图
    var bigImg = big.getElementsByClassName('current')[0];
    // 获取鼠标的可视坐标，要减去margin的值，然后为了鼠标到中间，
    // 还要减去遮挡层的横坐标和纵坐标的一半；
    var x = e.clientX - 100 - mask.offsetWidth / 2;
    var y = e.clientY - 80 - mask.offsetHeight / 2;

    // 横坐标的最小值
    x = x < 0 ? x = 0 : x;
    // 纵坐标的最小值
    y = y < 0 ? y = 0 : y;
    // 横坐标的最大值
    x = x > small.offsetWidth - mask.offsetWidth ? small.offsetWidth - mask.offsetWidth : x;
    // 纵坐标的最大值
    y = y > small.offsetHeight - mask.offsetHeight ? small.offsetHeight - mask.offsetHeight : y;
    mask.style.left = x + "px";
    mask.style.top = y + "px";
    // 遮挡层的移动距离/大图的的移动距离=遮挡层的最大移动距离/大图的最大移动距离
    // 大图的移动距离=遮挡层的移动距离*大图的最大移动距离/遮挡层的最大距离

    // 大图的横向最大移动距离
    var maxX=bigImg.offsetWidth-big.offsetWidth;
    // 大图的纵向的最大移动距离
    var maxY=bigImg.offsetHeight-big.offsetHeight;
    var bigImgMoveX=x*maxX/(small.offsetWidth - mask.offsetWidth);
    // 大图的纵向的最大移动距离
    var bigImgMoveY=y*maxX/(small.offsetWidth - mask.offsetWidth);
    bigImg.style.marginLeft=-bigImgMoveX+"px";
    bigImg.style.marginTop=-bigImgMoveY+"px";
}