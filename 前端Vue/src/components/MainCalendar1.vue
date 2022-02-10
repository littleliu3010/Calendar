<template>
  <div class="mainCalendar1 scrollbar">
    <div class="littleCalendar">
      <div v-for="(day,index) in this_month" :key="index" class="div">
          <div v-if="day.day==1" class="day day1">
            <p class="p_date">{{day.date}}</p>
            <p class="p_day">{{day.day}}</p>
          </div>
          <div v-else-if="day.day==nowDate" class="day today">
            <p class="p_date p_today">{{day.date}}</p>
            <p class="p_day p_today">{{day.day}}</p>
            </div>
          <div v-else class="day">
            <p class="p_date">{{day.date}}</p>
            <p class="p_day">{{day.day}}</p>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import {nowDate,this_month} from '../js/Calendar1'

export default {
  name: 'MainCalendar1',
  data () {
    return {
      this_month: this_month,
      nowDate:nowDate,
    }
  }
}


</script>

<style>
.mainCalendar1 {
  position: relative;
  background-image: linear-gradient(-44deg, #4A53EF 0%, #6971FE 100%);
  box-shadow: -2px 31px 51px 0 rgba(47,47,77,0.16);
  height: 160px;
  width: 375px;
  overflow: auto;
}
.littleCalendar {
  position: absolute;
  bottom: 0;
  height: 76px;
  width: 1550px;
  margin-bottom: 0;
}
.div {
  left: 100px;
  display: inline;
  margin: 0 auto;
}
.day {
  display: inline-block;
  margin-top: 16px;
  margin-bottom: 10px ;
  margin-left: 5px;
  margin-right: 5px;
  height: 38px;
  width: 33px;
  background: #464FE5 center;
  border: #464FE5 solid 3px;
  border-radius: 6px;
}
.day1{
  margin-left: 18px;
}
.today {
  background: #fff center;
  border: #fff solid 3px;
  border-radius: 6px;
}
.p_date {
  color: #fff;
  opacity: 0.4;
  font-size: 10px;
  margin: 0 auto;
  text-align: center;
}
.p_day {
  color: #fff;
  opacity: 0.4;
  font-size: 18px;
  margin: 0 auto;
  text-align: center;
}
.p_today {
  color:#464FE5;
  opacity: 1;
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