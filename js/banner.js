// 获取滚动范围对象
let slideWarp = document.getElementById("slide-warp");
// 获取滚动对象
let slideContent = slideWarp.getElementsByClassName("slide-content")[0];
// 获取图片对象li
let liItems = slideContent.getElementsByTagName("li");
console.log(liItems)
// 获取分页按钮
let aItems = slideWarp.getElementsByClassName("slide-nav")[0].getElementsByTagName("a");
// 当前图片的索引
let currentIndex = 0 ;
// 设置开关
let flag = false;
// 获取左箭头按钮
let slideLeftArrow = slideWarp.getElementsByClassName("slide-arrow-left")[0];
// 获取右箭头按钮
let slideRightArrow = slideWarp.getElementsByClassName("slide-arrow-right")[0];
// 获取可视区域宽度
let viewWidth = document.body.clientWidth ;
console.log(viewWidth)
// 自动播放
let autoPlay = null;

// 设置滚动对象的宽度
slideContent.style.width = viewWidth*liItems.length + "px";
// 设置图片宽度
// for(let i = 0; i < liItems.length; i++){
//     liItems[i].style.width = viewWidth + "px";
// }
for (liItem of liItems){
    liItem.style.width = viewWidth + "px";
}
console.log(liItems[0].style.width)

// 分页按钮点击
for(let i = 0; i<aItems.length; i++){
    aItems[i].onclick= function(){
        currentIndex = i;
        slide(i);
    }
}
// 左右箭头点击事件
// 左箭头
slideLeftArrow.onclick = function(){
    if(flag){return false}
    flag = true;
    slideLeft();
}
// 右箭头
slideRightArrow.onclick = function(){
    if(flag){return false}
    flag = true;
    slideRight();
}
// 自动滑动
autoPlay = setInterval(function(){slideLeft()}, 3000);
// 当鼠标在图上停止，离开自动
slideWarp.onmouseover = function(){clearInterval(autoPlay)};
slideWarp.onmouseout = function(){autoPlay = setInterval(function(){slideLeft()}, 3000);};


// slide()滑动功能
function slide(index){
   let leftOffset = -index*viewWidth + "px";
   slideContent.style.left = leftOffset;
    current(currentIndex);
    // 防抖一部分
    setTimeout(function(){
        flag = false;
    },1000)
}
// 分页当前页面高亮
function current(currentIndex){  
    for(let i = 0; i<aItems.length; i++){
        aItems[i].className = "";
    }
    aItems[currentIndex].className = "current";
}
// 左滑
function slideLeft(){
    currentIndex++;
    if(currentIndex == aItems.length){
        currentIndex = 0;
    }
    slide(currentIndex);
}
// 右滑
function slideRight(){
    currentIndex--;
    if(currentIndex == -1){
        currentIndex = aItems.length-1;
    }
    slide(currentIndex);
}