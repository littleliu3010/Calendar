export {nowDate,week,last_week,week1,week2,week3,week4,week5,next_week}

var today = new Date();          //今天的所有信息
var nowYear = today.getFullYear();  //今天的年份
var nowMonth = today.getMonth()+1;  //今天的月份
var nowDate = today.getDate();      //今天的日期，几号
var nowMaxDate = new Date(nowYear,nowMonth,0).getDate(); 
//获取上个月的最后一天的日期
var lastMonth = new Date(nowYear,nowMonth-1,0);  //上个月最后一天的所有信息
var lastDate = lastMonth.getDate();              //获取这个月最大的日期
var lastDay = lastMonth.getDay();                //上个月最后一天是周几
var remainLastDate = lastDate - lastDay + 1;

//MainCalendar2
var week=['M','T','W','T','F','S','S'];

var last_week=[],week1=[],now_days=1,id=1;
for(var i=0,a=0;i<7;i++,id++){
  if(i<lastDay){
    last_week[i]={id:id,month:'last_month',day:remainLastDate}
    remainLastDate++;
  }
  else {
    if(now_days==nowDate){
      week1[a++]={id:id,month:'today',day:now_days}
      now_days++;
    }
    else{
      week1[a++]={id:id,month:'this_month',day:now_days}
      now_days++;
    }
  }
}

var week2=[];
for(var i=0;i<7;i++,id++){
  if(now_days==nowDate){
    week2[i]={id:id,month:'today',day:now_days}
    now_days++;
  }
  else{
    week2[i]={id:id,month:'this_month',day:now_days}
    now_days++;
  }
}

var week3=[];
for(var i=0;i<7;i++,id++){
  if(now_days==nowDate){
    week3[i]={id:id,month:'today',day:now_days}
    now_days++;
  }
  else {
    week3[i]={id:id,month:'this_month',day:now_days}
    now_days++;
  }
  
}

var week4=[];
for(var i=0;i<7;i++,id++){
  if(now_days==nowDate){
    week4[i]={id:id,month:'today',day:now_days}
    now_days++;
  }
  else {
    week4[i]={id:id,month:'this_month',day:now_days}
    now_days++;
  }
  
}

var week5=[],next_week=[],next_days=1;
for(var i=0,a=0;i<7;i++,id++){
  if(now_days<=nowMaxDate){
    if(now_days==nowDate){
      week5[i]={id:id,month:'today',day:now_days}
      now_days++;
    }
    else {
      week5[i]={id:id,month:'this_month',day:now_days}
      now_days++;
    }
    
  }
  else{
    next_week[a++]={id:id,month:'next_month',day:next_days}
    next_days++;
  }
}