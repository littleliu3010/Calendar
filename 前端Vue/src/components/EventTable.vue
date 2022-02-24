<template>
  <div class="event scrollbar2">
    <!-- event背景框架 -->
    <div class="event_div">
      <div v-for="time in event_time" :key="time">
        <div class="event_block event_line" >
          <p class="event_time">{{time}}</p>
        </div>
      </div>
      <!-- 事件显示 -->
      <EventShow></EventShow>
    </div>

  </div>
</template>

<script>
import EventShow from "./EventShow.vue"

export default {
  name: "EventTable",
  components:{EventShow},
  data(){
    return {
      event_time:[
        '0 AM','1 AM','2 AM','3 AM','4 AM','5 AM',
        '6 AM','7 AM','8 AM','9 AM','10 AM','11 AM',
        '0 PM','1 PM','2 PM','3 PM','4 PM','5 PM',
        '6 PM','7 PM','8 PM','9 PM','10 PM','11 PM'
      ],
    }
  },
}
</script>

<style>
.event_time {
  font-size: 10px;
  position: absolute;
  margin:0;
  opacity: 1;
  top: 40px;
  left: -42px;
}
.event_block {
  position: relative;
  left: 50px;
  top: -23px;
  height: 45px;
  width: 373px;
}
.event_line { 
  opacity: 0.5;
  border: 2px solid #E8EAEF;
  border-color: transparent transparent #E8EAEF #E8EAEF;
}
.event_div {
  margin: 0;
  height: 1080px;
}
.event {
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 160px;
  height: 652px;
}
.scrollbar2::-webkit-scrollbar {
/*滚动条整体样式*/
height : 0px;
width: 0px;  /*高宽分别对应横竖滚动条的尺寸*/
}
.scrollbar2::-webkit-scrollbar-thumb {
/*滚动条里面小方块*/
border-radius: 10px;
box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
background   : #464FE5;
}
.scrollbar2::-webkit-scrollbar-track {
/*滚动条里面轨道*/
border-radius: 10px;
}
</style>