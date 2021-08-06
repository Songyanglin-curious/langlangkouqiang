function loadingMsg( paramas){
    // 获取对象
    let wrap = document.getElementById(paramas.wrap);
    if(paramas.loadingSuccess){
    wrap.innerHTML = 
    `<div class="loading-wait">
    <p>${paramas.message}</p>
    <div class="loading-icon"> <i class="iconfont icon-jiazai"></i></div>
    </div>`}
    else{
        wrap.innerHTML = 
        `<div class="loading-wait">
        <p>${paramas.message}</p>
        </div>`
    }

}