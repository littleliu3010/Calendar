<template>
    <div class="body">
      <!-- 切换动画 -->
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {transitionName:''}
  },
  watch: {
    //使用watch来监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引，判断为前进状态，反之则为后退状态
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }
      else {
        this.transitionName = 'slide-right';
      }
    }
  }
}
</script>

<style>
body {
  margin: 0 auto;
  font-family: Helvetica;
}
.body {
  position: relative;
  margin: 0 auto;
  background: #fff;
  height: 812px;
  width: 375px;
  overflow: hidden;
}
.background-color {
  padding-top:35px;
  height: 850px;
  width: 100%;
  background-color:rgba(0, 0, 0, 0.8);
}

/* route切换动画 */
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 600ms;
  position: absolute;
}
.slide-right-enter {
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  transform: translate3d(100%, 0, 0); 
}
.slide-left-enter {
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  transform: translate3d(-100%, 0, 0);
}
</style>
