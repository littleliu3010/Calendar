<template>
  <div class="AE_body">
    <div class="header">
      <img :src="require('@/assets/back-mountain.png')" class="header-backImg2">
      <img :src="require('@/assets/return.png')" class="button_return" alt="返回" @click="ret">
      <p class="header_title">Add Event</p>
      <p class="header_cancel" @click="cancel" v-if="modify">取消</p>
      <p class="header_save" @click="confirmEvent" v-if="modify">保存</p>
      <p class="header_save" @click="modifyEvent" v-if="!modify">修改</p>
    </div>
    <div class="white">
      <p class="title" v-if="results.length>0&!modify">{{results[0].title}}</p>
      <input class="input_title" type="text" v-if="modify" v-model="results[0].title">
      <p class="time" v-if="results.length>0&!modify">{{results[0].starts}}-{{results[0].ends}}</p>
      <input class="input_time1" type="text" v-if="modify" v-model="results[0].starts"><p class="input_time3" v-if="modify">-</p><input class="input_time2" type="text" v-if="modify" v-model="results[0].ends">
      <div class="solid"></div>
      <p class="place" v-if="results.length>0&!modify">{{results[0].place}}</p>
      <input class="input_place" type="text" v-if="modify" v-model="results[0].place">
      <div class="solid"></div>
      <p class="place" v-if="results.length>0&!modify">{{results[0].reminder}} mins before</p>
      <input class="input_place" type="text" v-if="modify" v-model="results[0].reminder">
      <div class="solid"></div>
      <p class="place" v-if="results.length>0&!modify">{{results[0].re_peat}}</p>
      <input class="input_place" type="text" v-if="modify" v-model="results[0].re_peat">
      <div class="solid"></div>
      <textarea name="" id="" cols="30" rows="4" class="text-note" readonly v-if="results.length>0&!modify" v-model="results[0].note"></textarea>
      <textarea name="" id="" cols="30" rows="4" class="text-note" v-if="modify" v-model="results[0].note"></textarea>
      <div class="solid"></div>
      <div id="color" class="color"></div>
      <img class="time_icon" :src="require('@/assets/time.png')" alt="time_icon">
      <img class="place_icon" :src="require('@/assets/place.png')" alt="place_icon">
      <img class="reminder_icon" :src="require('@/assets/reminder.png')" alt="reminder_icon">
      <img class="repeat_icon" :src="require('@/assets/repeat.png')" alt="repeat_icon">
    </div>
    <div class="detele">
      <button class="deteleButton" @click="deteleevent">删除</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntoEvent',
  data(){
    return {
      modify:false,
      results:{},
    }
  },
  methods: {
    deteleevent(){
      var url='';
      url="http://localhost:5050/deteleevent?id="+this.results[0].id;
      if(confirm("确定要删除吗？")){
        ajax(url, 'get', );
        this.$router.push('/Home');
        alert('删除成功');
      }
    },
    ret(){
      this.$router.push('/Home');
    },
    cancel(){
      this.modify=!this.modify;
    },
    confirmEvent(){
      var url='';
      url="http://localhost:5050/modifyevent?title="+this.results[0].title+
      "&starts="+this.results[0].starts+
      "&ends="+this.results[0].ends+
      "&place="+this.results[0].place+
      "&re_peat="+this.results[0].re_peat+
      "&reminder="+this.results[0].reminder+
      "&note="+this.results[0].note+
      "&id="+this.results[0].id;
      ajax(url, 'get', );
      alert('修改成功');
      this.modify=!this.modify;
      // this.$router.push('/intoevent?id='+this.results[0].id);
    },
    modifyEvent(){
      this.modify=!this.modify;
    },
  },
  created(){
    //接收数据
    this.$http.get("http://localhost:5050/intoevent?id="+this.$route.query.id).then((res)=>{
      this.results=res.data;
      document.getElementById('color').style.background="#"+this.results[0].color;
    });
  }
}

function ajax(url, method, callback) {
  var xmlhttp;
  if(window.XMLHttpRequest)
  {
    xmlhttp=new XMLHttpRequest();
  }
  xmlhttp.onreadystatechange=function()
  {
    if(xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      callback(xmlhttp.response);
    }
  }
  xmlhttp.open(method,url,true);
  xmlhttp.send();
}
</script>

<style>
.white {
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(155,170,194,0.09);
}
.color {
  position: absolute;
  top:123px;
  left:23px;
  background: #4E57F0;
  border-radius: 6px;
  height: 20px;
  width: 20px;
}
.time_icon {
  position: absolute;
  top:222px;
  left:20px;
  height: 25px;
  width: 25px;
}
.place_icon {
  position: absolute;
  top:275px;
  left:20px;
  height: 25px;
  width: 25px;
}
.reminder_icon {
  position: absolute;
  top:325px;
  left:20px;
  height: 25px;
  width: 25px;
}
.repeat_icon {
  position: absolute;
  top:375px;
  left:20px;
  height: 25px;
  width: 25px;
}
.AE_body {
  background: #FAFBFC;
  width: 375px;
  height: 812px;
}
.header {
  position: relative;
  height: 88px;
  width: 375px;
  background-image: linear-gradient(133deg, #5E66F8 0%, #4952ED 100%);
}
.button_return {
  cursor: pointer;
  position: absolute;
  top: 52px;
  left: 13px;
  height: 24px;
  width: 26px;
}
.header_title {
  margin: 0 auto;
  padding-top: 52px;
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
}
.header_cancel {
  cursor: pointer;
  position: absolute;
  margin: 0 auto;
  top: 52px;
  right: 65px;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
}
.header_save {
  cursor: pointer;
  position: absolute;
  margin: 0 auto;
  top: 52px;
  right: 20px;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
}
.title {
  margin-top: 0px;
  padding-top: 25px;
  margin-bottom: 0;
  opacity: 0.9;
  font-size: 24px;
  color: #2F2F4D;
  text-align: center;
}
.time {
  margin-left: 55px;
  margin-top: 80px;
  margin-bottom: 5px;
  opacity: 0.9;
  font-size: 15px;
  width: 265px;
  color: #2F2F4D;
  text-align: right;
}
.solid {
  margin: 0 auto;
  opacity: 0.1;
  border: 1px solid #2F2F4D;
  width: 270px;
}
.place {
  margin-left: 55px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 25px;
  padding-bottom: 5px;
  opacity: 0.9;
  font-size: 15px;
  width: 265px;
  color: #2F2F4D;
  text-align: right;
}
.input_title {
  display: inline-block;
  text-align: center;
  border: none;
  outline: none;
  width: 160px;
  margin-left: 30%;
  margin-top: 25px;
  margin-bottom: 0;
  color: #2F2F4D;
  opacity: 0.9;
  font-size: 25px;
  height: 25px;
}
.input_title:focus {
  text-decoration:underline;
}
.input_time1 {
  display: inline-block;
  text-align: right;
  border: none;
  outline:none;
  margin-left: 245px;
  margin-right: 0px;
  margin-top: 80px;
  margin-bottom: 5px;
  padding: 0;
  color: #2F2F4D;
  opacity: 0.9;
  height: 16px;
  width: 35px;
}
.input_time1:focus {
  text-decoration:underline;
}
.input_time2 {
  display: inline-block;
  border: none;
  outline:none;
  padding: 0;
  margin-right: 0px;
  margin-left: 0px;
  margin-top: 55px;
  margin-bottom: 5px;
  color: #2F2F4D;
  opacity: 0.9;
  height: 16px;
  width: 35px;
}
.input_time2:focus {
  text-decoration:underline;
}
.input_time3 {
  display: inline-block;
  margin-right: 0px;
  margin-left: 0px;
  margin-top: 55px;
  margin-bottom: 5px;
  padding: 0;
  color: #2F2F4D;
  opacity: 0.9;
}
.input_place {
  text-align: right;
  border: none;
  outline:none;
  margin-right: 0px;
  margin-left: 155px;
  margin-top: 25px;
  margin-bottom: 5px;
  padding: 0;
  opacity: 0.9;
  color: #2F2F4D;
  height: 19px;
}
.input_place:focus {
  text-decoration:underline;
}
.header-backImg2{
  position: absolute;
  height: 90px;
  opacity: 0.1;
  left: 50%;
  /* 图片居中 */
  bottom: -4px;
  margin-left: -200px;
}
.text-note {
  margin-top: 25px;
  margin-left: 120px;
  font-size: 15px;
  opacity: 0.9;
  color: #2F2F4D;
  width: 200px;
  height: 70px;
  font-family: Helvetica;
  vertical-align:top;
  resize:none;
  border: none;
  outline:none;
  word-break:break-all;
}
.detele {
  position: relative;
  width: 160px;
  margin: 0 auto;
  margin-top: 230px;
}
.deteleButton {
  cursor: pointer;
  font-size: 25px;
  color: rgba(255, 255, 255, 0.788);
  height: 50px;
  width: 160px;
  background-image: linear-gradient(180deg, #f04040 0%, #861a1a 100%);
}
</style>