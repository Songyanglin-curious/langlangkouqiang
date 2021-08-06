loadingMsg({
    wrap: 'introduceListWrap',
    message: '加载中',
    loadingSuccess: 'true',
});
$.ajax({
    url:'./data/index.php',
    dataType: 'json',
    type:'POST', //GET
    async:true,    //或false,是否异步
    cache: 'ture',
    data:{
        'categoryId': 123456,
    },
    // beforeSend: function() {},
    success: function(req) {
        // 获取介绍列表容器
        let introduceListWrap = document.getElementById('introduceListWrap');
        //如果未获得数据显示 
        if(!req.data || req.data.length === 0){
            loadingMsg({
                wrap: 'introduceListWrap',
                message: '未获取到数据',
                loadingSuccess: 'false',
            });
            return false;
        }
        // 根据获得的数据对字符串拼接，渲染DOM
        let ul = '<ul>';
        for (let item of req.data){
           ul +=
            `<figure>
            <a href = "newsDetail.php?id=${item.id}">
            <img src="${item.imgUrl}" alt="${item.title}">
            <figcaption>${item.title}</figcaption>
            <p>${item.dec}</p>
            </a>
            </figure>`
        }
        ul += '</ul>'
        // 测试所用
        // setTimeout(function(){introduceListWrap.innerHTML = ul;},2000)

        introduceListWrap.innerHTML = ul;
    },
    // complete: function() {},
    error: function() {},
})