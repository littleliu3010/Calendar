function ajax(url, method, callback) {
  var xmlhttp;
  if(window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  xmlhttp.onreadystatechange=function()
  {
    console.log(xmlhttp)
    if(xmlhttp.readyState==4 && xmlhttp.status==200)
    {
                //返回后端res.send()中的内容
      callback(xmlhttp.response);
    }
  }
  xmlhttp.open(method,url,true);
  xmlhttp.send();
}