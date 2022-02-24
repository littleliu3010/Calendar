<template>
<div class="mainCalendar2">
  <img :src="require('@/assets/back-mountain.png')" class="header-backImg">
  <ul>
    <li v-for="(day,index) in week" :key="index" class="opacity li"><p class="day2 week_margin">{{day}}</p></li>
  </ul>
  <ul>
    <li v-for="day1 in last_week" :key="day1.id" class="opacity li"><p class="day2 day_margin">{{day1.day}}</p></li><li v-for="day1 in week1" :key="day1.id" class="li"><p class="today" v-if="day1.month=='today'" >{{day1.day}}</p><p class="day2 day_margin" v-else>{{day1.day}}</p></li>
  </ul>
  <!-- week2 -->
  <ul>
    <li v-for="day2 in week2" :key="day2.id" class="li"><p class="today2" v-if="day2.month=='today'" >{{day2.day}}</p><p class="day2 day_margin" v-else>{{day2.day}}</p></li>
  </ul>
  <ul>
    <li v-for="day3 in week3" :key="day3.id" class="li"><p class="today2" v-if="day3.month=='today'" >{{day3.day}}</p><p class="day2 day_margin" v-else>{{day3.day}}</p></li>
  </ul>
  <ul>
    <li v-for="day4 in week4" :key="day4.id" class="li"><p class="today2" v-if="day4.month=='today'" >{{day4.day}}</p><p class="day2 day_margin" v-else>{{day4.day}}</p></li>
  </ul>
  <ul>
    <li v-for="day5 in week5" :key="day5.id" class="li"><p class="today2" v-if="day5.month=='today'" >{{day5.day}}</p><p class="day2 day_margin" v-else>{{day5.day}}</p></li><li v-for="day5 in next_week" :key="day5.id" class="opacity li"><p class="day2 day_margin">{{day5.day}}</p></li>
  </ul>
</div>
</template>

<script>

import {nowDate,week,last_week,week1,week2,week3,week4,week5,next_week} from '../js/Calendar2'

export default {
  neme: 'MainCalendar2',
  data(){
    return{
      nowDate:nowDate,
      last_week: last_week,
      week: week,
      week1: week1,
      week2: week2,
      week3: week3,
      week4: week4,
      week5: week5,
      next_week: next_week,
    }
  },
  methods:{

  },
  components:{

  }
}
</script>

<style>
p {
  margin: 0 auto;
}
ul {
  text-align: center;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
}

.opacity {
  opacity: 0.6;
}
.li {
  text-align: center;
  display: inline-block;
}
.day2 {
  text-align: center;
  height: 19px;
  width: 20px;
  line-height: 20px;
  font-size: 16px;
  color: #fff;
}
.today2 {
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 7px;
  margin-right: 7px;
  padding: 4px;
  text-align: center;
  height: 19px;
  width: 20px;
  line-height: 20px;
  font-size: 16px;
  border:2px solid #fff;
  border-radius: 4px;
  background-color: #fff;
  color:#4A53EF;
}
.day_margin {
  margin-top: 8px;
  margin-bottom: 8px;
  margin-left: 7px;
  margin-right: 7px;
  padding: 6px;
}
.week_margin {
  font-size: 14px;
  margin-top: 90px;
  margin-bottom: 8px;
  margin-left: 7px;
  margin-right: 7px;
  padding: 6px;
}
.mainCalendar2 {
  position: relative;
  background-image: linear-gradient(60deg, #4A53EF 0%, #6971FE 100%);
  box-shadow: -2px 31px 51px 0 rgba(47,47,77,0.16);
  height: 373px;
  width: 375px;
}
.header-backImg{
  position: absolute;
  height: 160px;
  opacity: 0.1;
  /* 图片居中 */
  left: 50%;
  bottom: -4px;
  margin-left: -380px;
}
</style>