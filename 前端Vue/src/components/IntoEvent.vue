<template>
  <div class="AE_body">
    <div class="header">
      <img :src="require('@/assets/return.png')" class="button_return" alt="返回" @click="cancel">
      <p class="header_title">Add Event</p>
      <p class="header_cancel" @click="cancel" v-if="modify">Cancel</p>
      <p class="header_save" @click="confirmEvent" v-if="modify">Save</p>
      <p class="header_save" @click="modifyEvent" v-if="!modify">Modify</p>
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
      <div id="color" class="color"></div>
      <img class="time_icon" :src="require('@/assets/time.png')" alt="time_icon">
      <img class="place_icon" :src="require('@/assets/place.png')" alt="place_icon">
      <img class="reminder_icon" :src="require('@/assets/reminder.png')" alt="reminder_icon">
      <img class="repeat_icon" :src="require('@/assets/repeat.png')" alt="repeat_icon">
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
    cancel(){
      this.$router.push('/Home');
    },
    confirmEvent(){
      var url='';
      url="http://localhost:5050/modifyevent?title="+this.results[0].title+
      "&starts="+this.results[0].starts+
      "&ends="+this.results[0].ends+
      "&place="+this.results[0].place+
      "&re_peat="+this.results[0].re_peat+
      "&reminder="+this.results[0].reminder+
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
  left:25px;
  background: #4E57F0;
  border-radius: 4px;
  height: 15px;
  width: 15px;
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
  top:327px;
  left:20px;
  height: 25px;
  width: 25px;
}
.repeat_icon {
  position: absolute;
  top:380px;
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
  position: absolute;
  top: 52px;
  left: 13px;
  height: 24px;
  width: 26px;
}
.header_title {
  margin: 0 auto;
  padding-top: 50px;
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
}
.header_cancel {
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
  margin-left: 55px;
  margin-top: 0px;
  padding-top: 25px;
  margin-bottom: 0;
  opacity: 0.9;
  font-size: 24px;
  color: #2F2F4D;
  text-align: left;
}
.time {
  margin-left: 55px;
  margin-top: 80px;
  margin-bottom: 15px;
  opacity: 0.9;
  font-size: 15px;
  color: #2F2F4D;
  text-align: left;
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
  padding-top: 15px;
  padding-bottom: 15px;
  opacity: 0.9;
  font-size: 15px;
  color: #2F2F4D;
  text-align: left;
}
.input_title {
  display: inline-block;
  margin-left: 50px;
  margin-right: 160px;
  margin-top: 25px;
  margin-bottom: 0;
  color: #2F2F4D;
  height: 25px;
}
.input_time1 {
  display: inline-block;
  margin-left: 55px;
  margin-right: 0px;
  margin-top: 80px;
  margin-bottom: 13px;
  color: #2F2F4D;
  height: 16px;
  width: 35px;
}
.input_time2 {
  display: inline-block;
  margin-right: 0px;
  margin-left: 0px;
  margin-top: 55px;
  margin-bottom: 13px;
  color: #2F2F4D;
  height: 16px;
  width: 35px;
}
.input_time3 {
  display: inline-block;
  margin-right: 0px;
  margin-left: 0px;
  margin-top: 55px;
  margin-bottom: 13px;
  color: #2F2F4D;
}
.input_place {
  margin-right: 0px;
  margin-left: 55px;
  margin-top: 15px;
  margin-bottom: 13px;
  color: #2F2F4D;
  color: #2F2F4D;
  height: 16px;
}
</style>