<template>
  <div class="background-color">
    <div class="body">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0 auto;
}
.body {
  position: relative;
  margin: 0 auto;
  background: #fff;
  height: 812px;
  width: 375px;
}
.background-color {
  padding-top:35px;
  height: 850px;
  width: 100%;
  background-color:rgba(0, 0, 0, 0.8);
}
</style>
