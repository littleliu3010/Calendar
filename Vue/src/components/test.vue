<template>
  <div id="example-1">
    <div class='mainCalendar1' v-if="show" >
    </div>
    <div class='mainCalendar2' v-if="!show" >
    </div>
  <img :src="require('@/assets/button_calendar.png')" class="button_calendar" alt="月份" @click="show = !show">
  
  </div>
</template>

<script>
export default {
  el: '#example-1',
  name : 'test',
  data () {
    return {
      show: true,
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
}
.mainCalendar2 {
  position: relative;
  background-image: linear-gradient(-44deg, #4A53EF 0%, #6971FE 100%);
  box-shadow: -2px 31px 51px 0 rgba(47,47,77,0.16);
  height: 373px;
  width: 375px;
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>