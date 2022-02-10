//当页面启动时，调用init()方法
window.onload = function() {
  init();
}

//定义init()方法为ajax模板，其中callback=renderlist
//也就是renderlist的参数result等于callback的参数xmlhttp.response
//xmlhttp.response就是后端res.send({})中的内容，即返回的数据
function init() {
  ajax('http://localhost:5050/query', 'get', renderlist);
}