<template>
  <div id="sidebar" class="menu" v-if="sidebar_show">
     <div class="menu_right" @click="sideBarOut();toHome()"></div>
     <div class="menu_title"><p class="little_liu">小刘日历</p></div>
  </div>
</template>

<script>
var sidebar_show=true;
export default {
  name: 'SideBar',
  data () {
    return {
      sidebar_show: sidebar_show,
    }
  },
  methods:{
    toHome(){
      setTimeout(() => {
      this.sidebar_show=false;
      this.$emit('receive',this.sidebar_show);
      }, 600);
    },
    sideBarOut () {
      document.getElementById('sidebar').style.animationName = 'move-out'
    },
  }
}

</script>

<style>
.menu {
  background-color: white;
  position: absolute;
  top: 0px;
  width: 275px;
  height: 812px;
}
.menu_right {
  position:absolute;
  top:0px;
  left:275px;
  height:812px;
  width:375px;
  opacity: 0.5;
  background: #2F2F4D;
}
.menu_title {
  background: #F6F7FB;
  height:130px;
  width:275px;
}
.little_liu {
  padding-top: 70px;
  padding-left: 24px;
  margin: 0 auto;
  font-size: 24px;
  color: #4E57F0;
}
</style>