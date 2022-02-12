<template>
  <div>
    <EventTable></EventTable>
    <MainCalendar1 v-if="calendar_show"></MainCalendar1>
    <MainCalendar2 v-if="!calendar_show"></MainCalendar2>
    
    <img :src="require('@/assets/button_menu.png')" class="menu_position" alt="菜单" @click="menu_show = !menu_show">
    <p class="p_thismonth">{{month[date[1]]}}</p>
    <img :src="require('@/assets/pull.png')" class="button_pull" alt="下拉">
    <img :src="require('@/assets/button_calendar.png')" class="button_calendar" alt="月份" @click="calendar_show = !calendar_show">
    
    <button class="add_event" onclick="location='/#/addevent'">
    <img class="add_img" :src="require('@/assets/add.png')" alt="add">
    </button>
    <SideBar v-if="menu_show" @receive="fromSideBar"></SideBar>
  </div>
</template>

<script>
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
    fromSideBar(data){
      this.menu_show=data;
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
  top: 50px;
  left: 20px;
}
.p_thismonth {
  position: absolute;
  margin: 0;
  color: #fff;
  top: 50px;
  left: 58px;
  height: 29px;
  line-height: 29px;
  font-size: 24px;
}
.button_pull {
  position: absolute;
  margin: 0;
  top: 60px;
  left: 170px;
}
.button_calendar {
  position: absolute;
  background: url("/button_calendar.png");
  margin: 0;
  top: 50px;
  right: 25px;
  width:32px;
  height:32px
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
</style>