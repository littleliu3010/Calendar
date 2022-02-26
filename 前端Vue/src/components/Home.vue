<template>
  <div>
    <EventTable></EventTable>
    <div class="hide-text">Hello</div>
    <MainCalendar1 id="MainCalendar1" class="MainCalendar1" v-if="calendar_show"></MainCalendar1>
    <MainCalendar2 id="MainCalendar2" class="MainCalendar2" v-if="!calendar_show"></MainCalendar2>
    <img :src="require('@/assets/button_menu.png')" class="menu_position" alt="菜单" @click="sideBarIn()">
    <p class="p_thismonth">{{month[date[1]]}}</p>
    <img :src="require('@/assets/pull.png')" class="button_pull" alt="下拉">
    <img :src="require('@/assets/button_calendar.png')" class="button_calendar" alt="月份" @click="calendarShow()">
    
    <button class="add_event" onclick="location='/#/addevent'">
    <img class="add_img" :src="require('@/assets/add.png')" alt="add">
    </button>
    <SideBar id="sidebar" v-if="menu_show" @receive="fromSideBar" class="side-bar-in"></SideBar>
  </div>
</template>

<script>
/* background-image: linear-gradient(60deg, #99E5A2 0%, #D4FC78 100%); */
/* background-image: linear-gradient(60deg, #6CACFF 0%, #8DEBFF 100%); */
/* background-image: linear-gradient(60deg, #5583EE 0%, #41D8DD 100%); */
/* background-image: linear-gradient(60deg, #A16BFE 0%, #DEB0DF 100%); */
/* background-image: linear-gradient(60deg, #D279EE 0%, #F8C390 100%); */
/* background-image: linear-gradient(60deg, #F78FAD 0%, #FDEB82 100%); */
/* background-image: linear-gradient(60deg, #9D2E7D 0%, #E16E93 100%); */
/* background-image: linear-gradient(60deg, #F5CCF6 0%, #F1EEF9 100%); */
/* background-image: linear-gradient(60deg, #121317 0%, #323B42 100%); */
import SideBar from './SideBar.vue';
import MainCalendar1 from './MainCalendar1.vue'
import MainCalendar2 from './MainCalendar2.vue'
import EventTable from './EventTable.vue'

export default {
  components: {
    SideBar,
    MainCalendar1,
    MainCalendar2,
    EventTable,

  },
  name: 'Calendar',
  data(){
    return {
      date: [nowYear,nowMonth-1,nowDay],
      month: 
      [
        'January','February','March'    ,
        'April'  ,'May'     ,'June'     ,
        'July'   ,'August'  ,'September',
        'October','November','December'
      ],
      calendar_show: true,
      menu_show: false,
    }
  },
  methods: {
    fromSideBar (data) {
      this.menu_show=data;
    },
    sideBarIn () {
      this.menu_show=true;
      setTimeout(() => {
        document.getElementById('sidebar').style.animationName = 'move-in'
      }, 0);
    },
    calendarShow(){
      if(this.calendar_show==true){
        document.getElementById('MainCalendar1').style.animationName = 'MainCalendar1-move-out';
        
        setTimeout(() => {
          this.calendar_show = !this.calendar_show;
          setTimeout(() => {
            document.getElementById('MainCalendar2').style.animationName = 'MainCalendar2-move-in';
          }, 0);
        }, 400);
      }
      else {
        document.getElementById('MainCalendar2').style.animationName = 'MainCalendar2-move-out';
        
        setTimeout(() => {
          this.calendar_show = !this.calendar_show;
          setTimeout(() => {
            document.getElementById('MainCalendar1').style.animationName = 'MainCalendar1-move-in';
          }, 0);
        }, 400);
      }
    }
  },

};
 
//获取今天的日期
var today = new Date();          //今天的所有信息
var nowYear = today.getFullYear();  //今天的年份
var nowMonth = today.getMonth()+1;  //今天的月份
var nowDay = today.getDay();        //今天星期几,0代表星期天

</script>

<style>
.add_img {
  margin: 0 auto;
}
.add_event {
  cursor: pointer;
  position: absolute;
  top: 705px;
  left: 285px;
  border: 30px;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-image: linear-gradient(224deg, #4750EC 0%, #6971FE 100%);
  box-shadow: 0 8px 14px 0 rgba(48,78,236,0.40);
}
.menu_position {
  position: absolute;
  top: 47px;
  left: 20px;
  cursor: pointer;
}
.p_thismonth {
  position: absolute;
  margin: 0;
  color: #fff;
  top: 50px;
  left: 68px;
  height: 29px;
  line-height: 29px;
  font-size: 24px;
}
.button_pull {
  cursor: pointer;
  position: absolute;
  margin: 0;
  top: 56px;
  left: 180px;
}
.button_calendar {
  cursor: pointer;
  position: absolute;
  background: url("/button_calendar.png");
  margin: 0;
  top: 50px;
  right: 25px;
  width:32px;
  height:32px
}
.hide-text {
  position: absolute;
  text-align: center;
  top: 90px;
  width: 375px;
  height: 70px;
  font-size: 50px;
  background-image: linear-gradient(180deg, #4A53EF 0%, #6971FE 100%);
  color: #fff;
}
.scrollbar::-webkit-scrollbar {
/*滚动条整体样式*/
height : 0px;
width: 0px;  /*高宽分别对应横竖滚动条的尺寸*/
}
.scrollbar::-webkit-scrollbar-thumb {
/*滚动条里面小方块*/
border-radius: 10px;
box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
background   : #464FE5;
}
.scrollbar::-webkit-scrollbar-track {
/*滚动条里面轨道*/
border-radius: 10px;
}

.side-bar-in{
  animation-fill-mode:both;
  animation-name: move-in;
  animation-duration: 0.6s;
}
@keyframes move-in {
  from {transform: translateX(-275px);}
  to {transform: translateX(0px);}
}
@keyframes move-out {
  from {transform: translateX(0px);}
  to {transform: translateX(-275px);}
}
.MainCalendar1{
  overflow: hidden;
  animation-fill-mode:both;
  animation-name: MainCalendar1-stop;
  animation-duration: 0.4s; 
}
@keyframes MainCalendar1-stop {
}
@keyframes MainCalendar1-move-in {
  from {height: 90px;}
  to {height: 160px;}
}
@keyframes MainCalendar1-move-out {
  from {height: 160px;}
  to {height: 90px;}
}
.MainCalendar2{
  overflow: hidden;
  animation-fill-mode:both;
  animation-name: MainCalendar2-move-in;
  animation-duration: 0.4s;
}
@keyframes MainCalendar2-move-in {
  from {height: 90px;}
  to {height: 373px;}
}
@keyframes MainCalendar2-move-out {
  from {height: 373px;}
  to {height: 90px;}
}
</style>