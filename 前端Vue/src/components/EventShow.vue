<template>
<div>
    <div class="event_show" v-for="(data,index) in results" :key="index" :id="index" v-trigger @click="changeClass(index,data.starts,data.ends,data.color,data.color2,data.deg,data.percent,data.percent2),intoEvent(data.id)">

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
      count:[],
      changeClass:changeClass,
    }
  },
  //trigger自动触发
  directives: {
    trigger: {
      inserted(el, binding) {
        el.click()
      }
    }
  },
  methods: {
    intoEvent(id){
      if(this.count[id]==1){
        this.$router.push('/intoevent?id='+id);
      }
      else{
        this.count[id]=1;
      }
    }
  },
  created(){
    //接收数据
    this.$http.get("http://localhost:5050/event").then((res)=>{
      this.results=res.data;
    });
  }
}

function changeClass(i,starts,ends,color,color2,deg,percent,percent2){
  var time=ends-starts,clock=0;
  for(;;time<1)
    if(time>=1){
      time--,clock++;
    }
    else{
      break;
    }
  var height=clock*49+time*75+"px",top=starts*49+26+"px";
  document.getElementById(i).style.height=height;
  document.getElementById(i).style.top=top;
  document.getElementById(i).style.backgroundImage="linear-gradient("+deg+"deg, #"+color+" "+percent+"%, #"+color2+" "+percent2+"%)";
}

</script>

<style>

.event_show {
  cursor: pointer;
  position: absolute;
  width: 315px;
  right:10px;
  background: yellow;
  border-radius: 4px;
}
.p_title {
  display: inline-block;
  font-size: 15px;
  margin:0 auto;
  color: #fff;
}
.p_time {
  display: inline-block;
  opacity: 0.8;
  font-size: 11px;
  margin:0 auto;
  color: #fff;
}
.p_place {
  display: inline-block;
  opacity: 0.6;
  font-size: 13px;
  margin:0;
  float:right;
  color: #fff;
}
</style>