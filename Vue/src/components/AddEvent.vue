<template>
<div class="AE_body">
  <div class="header">
    <img :src="require('@/assets/return.png')" class="button_return" alt="返回">
    <p class="header_title">Add Event</p>
    <p class="header_save" @click="addEvent">Save</p>
  </div>
  <div class="input_box1">
    <div class="solid_line"></div>
    <p class="p">Title</p>
    <p class="p">Place</p>
    <input type="text" class="input1" v-model="event.title">
    <input type="text" class="input2" v-model="event.place">
  </div>
  
  <div class="input_box2">
    <div class="solid_line"></div>
    <div class="solid_line solid_line2"></div>
    <div class="solid_line solid_line3"></div>
    <div class="solid_line solid_line4"></div>
    <div class="solid_line solid_line5"></div>
    <div class="solid_line solid_line6"></div>
    <p class="p">All Day</p>
    <p class="p">Starts</p>
    <p class="p">Ends</p>
    <p class="p">Time Zone</p>
    <p class="p">RepeatR</p>
    <p class="p">Reminder</p>
    <p class="p">Color</p>
    <input type="radio" name="allDay" class="input1" value="yes" v-model="event.allDay">
    <select size="5" class="input2" v-model="event.starts">
      <option>00:00</option>
      <option>01:00</option>
      <option>02:00</option>
      <option>03:00</option>
      <option>04:00</option>
      <option>05:00</option>
      <option>06:00</option>
      <option>07:00</option>
    </select>
    <input type="text" class="input3" v-model="event.ends">
    <input type="text" class="input4" v-model="event.timeZone">
    <input type="text" class="input5" v-model="event.repeat">
    <input type="text" class="input6" v-model="event.reminder">
    <input type="text" class="input7" v-model="event.color">
  </div>
  <div class="input_box3">
    <input type="text" class="input1" v-model="event.note">
  </div>
</div>
  
</template>

<script>
export default {
  neme: 'AddEvent',
  data(){
    return{
      event:{},
    }
  },
  
  methods:{
    addEvent(){
      if(this.event.title==undefined){
        alert('不可为空');
        return;
      }
      if(this.event.allDay==null){
        this.event.allDay='no'
      }
      else  {
        this.event.allDay='yes'
      }
      var url='';
      url="http://localhost:5050/addevent?title="+this.event.title+
      "&place="+this.event.place+
      "&allDay="+this.event.allDay+
      "&starts="+this.event.starts+
      "&ends="+this.event.ends+
      "&timeZone="+this.event.timeZone+
      "&repeat="+this.event.repeat+
      "&reminder="+this.event.reminder+
      "&color="+this.event.color+
      "&note="+this.event.note;
      console.log(url);
      ajax(url, 'get', );
      this.$router.push('/Home');
      alert('添加成功');
    }
  },
  components:{

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
.AE_body {
  text-align:center;
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
.header_title {
  margin: 0 auto;
  padding-top: 50px;
  font-size: 18px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
}
.header_save {
  position: absolute;
  margin: 0 auto;
  top: 50px;
  right: 20px;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
}
.p {
  position: relative;
  margin:0 auto;
  padding: 15px;
  text-align: left;
}
.input_box1 {
  position: relative;
  margin-top: 24px;
  margin-left: 50%;
  left:-164px;
  height: 102px;
  width: 327px;
  border: 0;
  border-radius: 4px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(155,170,194,0.09);
}
.input1 {
  position: absolute;
  top: 2px;
  height: 40px;
}
.input2 {
  position: absolute;
  top: 54px;
  height: 40px;
}
.input3 {
  position: absolute;
  top: 106px;
  height: 40px;
}
.input4 {
  position: absolute;
  top: 158px;
  height: 40px;
}
.input5 {
  position: absolute;
  top: 210px;
  height: 40px;
}
.input6 {
  position: absolute;
  top: 262px;
  height: 40px;
}
.input7 {
  position: absolute;
  top: 314px;
  height: 40px;
}
.solid_line {
  position: absolute;
  margin-top:50px;
  margin-left:50%;
  left:-160px;
  width: 320px;
  opacity: 0.1;
  border: 1px solid #2F2F4D;
}
.solid_line2 {
  margin-top:102px;
}
.solid_line3 {
  margin-top:154px;
}
.solid_line4 {
  margin-top:206px;
}
.solid_line5 {
  margin-top:258px;
}
.solid_line6 {
  margin-top:310px;
}
.input_box2 {
  position: relative;
  margin-top: 24px;
  margin-left: 50%;
  left:-164px;
  height: 362px;
  width: 327px;
  border: 0;
  border-radius: 4px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(155,170,194,0.09);
}
.input_box3 {
  position: relative;
  margin-top: 24px;
  margin-left: 50%;
  left:-164px;
  height: 90px;
  width: 327px;
  border: 0;
  border-radius: 4px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(155,170,194,0.09);
}
.button_return {
  position: absolute;
  top: 52px;
  left: 13px;
  height: 24px;
  width: 26px;
}
</style>