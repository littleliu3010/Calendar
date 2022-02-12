<template>
<div class="AE_body">
  <div class="header">
    <img :src="require('@/assets/return.png')" class="button_return" alt="返回" @click="cancel">
    <p class="header_title">Add Event</p>
    <p class="header_save" @click="addEvent">Save</p>
  </div>
  <div class="input_box1">
    <div class="solid_line"></div>
    <img class="title_img" :src="require('@/assets/title.png')" alt="">
    <p class="p">标题：</p>
    <img class="place_img" :src="require('@/assets/place.png')" alt="">
    <p class="p">地点：</p>
    <input type="text" class="input1" v-model="event.title">
    <input type="text" class="input2" v-model="event.place">
  </div>
  
  <div id="inputBox2" class="input_box2">
    <div class="solid_line"></div>
    <div class="solid_line solid_line2"></div>
    <div class="solid_line solid_line3"></div>
    <div class="solid_line solid_line4"></div>
    <div class="solid_line solid_line5"></div>
    <div class="solid_line solid_line6"></div>
    <div class="solid_line solid_line7" v-if="colordot"></div>
    <img class="allday_img" :src="require('@/assets/allday.png')" alt="">
    <p class="p">每天：</p>
    <img class="time_img" :src="require('@/assets/time.png')" alt="">
    <p class="p">开始时间：</p>
    <img class="time2_img" :src="require('@/assets/time2.png')" alt="">
    <p class="p">结束时间：</p>
    <img class="zone_img" :src="require('@/assets/zone.png')" alt="">
    <p class="p">时区：</p>
    <img class="repeat_img" :src="require('@/assets/repeat.png')" alt="">
    <p class="p">Repeat：</p>
    <img class="reminder_img" :src="require('@/assets/reminder.png')" alt="">
    <p class="p">Reminder：</p>
    <img class="color_img" :src="require('@/assets/color.png')" alt="">
    <p class="p">颜色：</p>
    <div class="color_dot_show borderColor1" v-if="colordot" @click="choosecolor(0)"></div>
    <div class="color_dot_show borderColor2" v-if="colordot" @click="choosecolor(1)"></div>
    <div class="color_dot_show borderColor3" v-if="colordot" @click="choosecolor(2)"></div>
    <div class="color_dot_show borderColor4" v-if="colordot" @click="choosecolor(3)"></div>
    <div class="color_dot_show borderColor5" v-if="colordot" @click="choosecolor(4)"></div>
    <div class="color_dot_show borderColor6" v-if="colordot" @click="choosecolor(5)"></div>
    <div class="color_dot_show borderColor7" v-if="colordot" @click="choosecolor(6)"></div>
    <div class="color_dot_show borderColor8" v-if="colordot" @click="choosecolor(7)"></div>
    <div class="color_dot_show borderColor9" v-if="colordot" @click="choosecolor(8)"></div>
    <div class="color_dot_show borderColor10" v-if="colordot" @click="choosecolor(9)"></div>
    <div class="color_dot_show borderColor11" v-if="colordot" @click="choosecolor(10)"></div>
    <div class="color_dot_show borderColor12" v-if="colordot" @click="choosecolor(11)"></div>
    <input type="checkbox" name="allDay" class="checkbox" value="yes" v-model="event.allDay" onclick="if(this.c==1){this.c=0;this.checked=0}else this.c=1">
    <input type="text" class="input2" v-model="event.starts">
    <input type="text" class="input3" v-model="event.ends">
    <input type="text" class="input4" v-model="event.timeZone">
    <input type="text" class="input5" v-model="event.repeat">
    <input type="text" class="input6" v-model="event.reminder">
    <!-- <input type="text" class="input7" v-model="event.color"> -->
    <div id="colordot" class="color_dot" @click="colorchoose();colordot=!colordot"></div>
  </div>
  <div class="input_box3">
    <img class="note_img" :src="require('@/assets/note.png')" alt="">
    <p class="p">备忘录：</p>
    <input type="text" class="input8" v-model="event.note">
  </div>
</div>
  
</template>

<script>

export default {
  name: 'AddEvent',
  data(){
    return{
      event: {},
      colordot: false, 
      color: [
        '#1EC1C3','#7A8BA9','#D467AE',
        '#FF7043','#D4E157','#2979FF',
        '#B8E986','#F8E71C','#EF534F',
        '#4FC3F7','#7E57C2','#1EC1C3'
      ],
      backImg:[

      ]
    }
  },
  
  methods:{
    cancel(){
      this.$router.push('/Home');
    },
    addEvent(){
      if(this.event.title==undefined){
        alert('标题不可为空');
        return;
      }
      else if(this.event.place==undefined){
        alert('地点不可为空');
        return;
      }
      else if(this.event.starts==undefined){
        alert('开始时间不可为空');
        return;
      }
      else if(this.event.ends==undefined){
        alert('结束时间不可为空');
        return;
      }
      else if(this.event.timeZone==undefined){
        alert('时区不可为空');
        return;
      }
      else if(this.event.repeat==undefined){
        alert('repeat不可为空');
        return;
      }
      else if(this.event.reminder==undefined){
        alert('reminder不可为空');
        return;
      }
      else if(this.event.note==undefined){
        alert('备忘录不可为空');
        return;
      }
      //allDay选项
      if(this.event.allDay==null){
        this.event.allDay=0;
      }
      else  {
        this.event.allDay=1;
      }
      var url='';
      if(this.event.color==undefined){this.event.color=this.color[0];}
      this.event.color=this.event.color.substr(1,6)
      url="http://localhost:5050/addevent?title="+this.event.title+
      "&place="+this.event.place+
      "&allDay="+this.event.allDay+
      "&starts="+this.event.starts+
      "&ends="+this.event.ends+
      "&timeZone="+this.event.timeZone+
      "&re_peat="+this.event.repeat+
      "&reminder="+this.event.reminder+
      "&color="+this.event.color+
      "&note="+this.event.note+
      "&display=1";
      console.log(this.event.color);
      console.log(url);
      ajax(url, 'get', );
      this.$router.push('/Home');
      alert('添加成功');
    },
    choosecolor(i){
      this.event.color=this.color[i];
      document.getElementById('colordot').style.borderColor=this.color[i];
      console.log(this);
    },
    colorchoose(){
      if(document.getElementById('inputBox2').style.height=='450px'){
        document.getElementById('inputBox2').style.height='362px';
      }
      else{
        document.getElementById('inputBox2').style.height='450px';
      }
    },
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
.color_dot_show {
  display: inline-block;
  margin-top: 14px;
  margin-left: 11px;
  margin-right: 11px; 
  height: 0;
  width: 0;
  border:12px solid;
  border-radius: 12px;
}
.borderColor1 {
  border:12px solid #1EC1C3;
}
.borderColor2 {
  border:12px solid #7A8BA9;
}
.borderColor3 {
  border:12px solid #D467AE;
}
.borderColor4 {
  border:12px solid #FF7043;
}
.borderColor5 {
  border:12px solid #D4E157;
}
.borderColor6 {
  border:12px solid #2979FF;
}
.borderColor7 {
  border:12px solid #B8E986;
}
.borderColor8 {
  border:12px solid #F8E71C;
}
.borderColor9 {
  border:12px solid #EF534F;
}
.borderColor10 {
  border:12px solid #4FC3F7;
}
.borderColor11 {
  border:12px solid #7E57C2;
}
.borderColor12 {
  border:12px solid #1EC1C3;
}
.color_choose {
  margin: 0 auto;
  height: 20px;
  width: 327px;
}
.color_dot {
  margin: 0 auto;
  position: absolute;
  top: 325px;
  right: 20px;
  height: 0;
  width: 0;
  border:12px solid #1EC1C3;
  border-radius: 12px;
}
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
  top: 52px;
  right: 20px;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: center;
}
.p {
  opacity: 0.9;
  position: relative;
  font-size: 15px;
  line-height: 22px;
  height: 22px;
  margin:0 auto;
  padding: 15px;
  padding-left: 50px;
  text-align: left;
  color:#8a8a8a;
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
.checkbox {
  position: absolute;
  top: 12px;
  right: 25px;
  height: 20px;
  width: 20px;
  outline: none;
  
}
.input1 {
  position: absolute;
  top: 6px;
  right: 5px;
  height: 40px;
  width: 150px;
  border: none;
}
.input2 {
  position: absolute;
  top: 56px;
  right: 5px;
  height: 40px;
  width: 150px;
  border: none;
}
.input3 {
  position: absolute;
  top: 108px;
  right: 5px;
  height: 40px;
  width: 150px;
  border: none;
}
.input4 {
  position: absolute;
  top: 160px;
  right: 5px;
  height: 40px;
  width: 150px;
  border: none;
}
.input5 {
  position: absolute;
  top: 212px;
  right: 5px;
  height: 40px;
  width: 150px;
  border: none;
}
.input6 {
  position: absolute;
  top: 264px;
  right: 5px;
  height: 40px;
  width: 150px;
  border: none;
}
.input7 {
  position: absolute;
  top: 314px;
  right: 5px;
  height: 40px;
  width: 150px;
  border: none;
}
.input8 {
  position: absolute;
  line-height: 15px;
  top: 6px;
  right: 5px;
  height: 78px;
  width: 200px;
  border: none;
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
.solid_line7 {
  margin-top:362px;
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
.note_img {
  position: absolute;
  height: 24px;
  width: 24px;
  top: 14px;
  left: 15px;
}
.title_img {
  position: absolute;
  height: 24px;
  width: 24px;
  top: 14px;
  left: 15px;
}
.place_img {
  position: absolute;
  height: 26px;
  width: 26px;
  top: 64px;
  left: 15px;
}
.allday_img {
  position: absolute;
  height: 30px;
  width: 30px;
  top: 10px;
  left: 13px;
}
.time_img {
  position: absolute;
  height: 26px;
  width: 26px;
  top: 65px;
  left: 14px;
}
.time2_img {
  position: absolute;
  height: 26px;
  width: 26px;
  top: 118px;
  left: 14px;
}
.zone_img {
  position: absolute;
  height: 30px;
  width: 30px;
  top: 167px;
  left: 13px;
}
.repeat_img {
  position: absolute;
  height: 24px;
  width: 24px;
  top: 224px;
  left: 15px;
}
.reminder_img {
  position: absolute;
  height: 24px;
  width: 24px;
  top: 275px;
  left: 15px;
}
.color_img {
  position: absolute;
  height: 24px;
  width: 24px;
  top: 327px;
  left: 15px;
}
</style>