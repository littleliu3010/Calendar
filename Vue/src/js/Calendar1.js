export {this_month,nowDate}

//获取今天的日期
var today = new Date();          //今天的所有信息
var nowYear = today.getFullYear();  //今天的年份
var nowMonth = today.getMonth()+1;  //今天的月份
var nowDate = today.getDate();      //今天的日期，几号
var nowMaxDate = new Date(nowYear,nowMonth,0).getDate(); 
//获取上个月的最后一天的日期
var lastMonth = new Date(nowYear,nowMonth-1,0);  //上个月最后一天的所有信息
var lastDay = lastMonth.getDay();                //上个月最后一天是周几

//mainCalendar1开始
var this_month=[],week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],date_now=lastDay + 1;
for(var i=1;i<=nowMaxDate;i++,date_now++){
  if(i<10){
    this_month[i-1]={day:'0'+i,date:week[date_now%7]};
  }
  else{
    this_month[i-1]={day:i,date:week[date_now%7]};
  }
}
//mainCalendar1结束