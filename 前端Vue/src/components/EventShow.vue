<template>
<div>
    <div class="event_show" v-for="(data,index) in results" :key="index" :id="index" v-trigger v-on:click="changeClass(index,data.starts,data.ends)">
        <p v-if="data.display" class="p_title">{{data.title}}</p>
        <p v-if="data.display" class="p_time">{{data.starts}} - {{data.ends}}</p>
        <p v-if="data.display" class="p_place">{{data.place}}</p>
    </div>
</div>
</template>

<script>
export default {
  neme: 'EventShow',
  data(){
    return{
      results:{},
      changeClass:changeClass,
    }
  },
  directives: {
    trigger: {
      inserted(el, binding) {
        console.log('el>>', el)
        el.click()
      }
    }
  },
  created(){
    //接收数据
    this.$http.get("http://localhost:5050/event").then((res)=>{
      this.results=res.data
      console.log(this.results);
    });
  }
}
function changeClass(i,starts,ends){
  var time=ends-starts,clock=0;
  for(;;time<1)
    if(time>=1){
      time--,clock++;
    }
    else{
      break;
    }
  var height=clock*45+time*75+"px",top=starts*47+23+"px";
  document.getElementById(i).style.height=height;
  document.getElementById(i).style.top=top;
}
console.log(this.id)
</script>

<style>
.event_show {
  position: absolute;
  width: 300px;
  right:20px;
  background: yellow;
  border: 2px solid rgb(156, 66, 66);
  border-radius: 4px;
}
.p_title {
  display: inline-block;
  font-size: 15px;
  margin:0 auto;
}
.p_time {
  display: inline-block;
  opacity: 0.8;
  font-size: 11px;
  margin:0 auto;
}
.p_place {
  display: inline-block;
  opacity: 0.6;
  font-size: 13px;
  margin:0;
  float:right;
}
</style>