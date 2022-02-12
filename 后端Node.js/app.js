const express=require("express");
const mysql=require("mysql");
var cors = require("cors");
var app=express();


//连接数据库
var db=mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "liucalendar"
});

//添加/addEvent
app.get("/addevent",function(req,res){
  console.log(req.query)
  db.query(`INSERT INTO addevent (id, title, place, allDay, starts, ends, timeZone, re_peat, reminder, color, note, display) VALUES (NULL, '${req.query.title}', '${req.query.place}', '${req.query.allDay}', '${req.query.starts}', '${req.query.ends}', '${req.query.timeZone}', '${req.query.re_peat}', '${req.query.reminder}', '${req.query.color}', '${req.query.note}', '${req.query.display}')`,function(err,data){
    if(err){
      console.log(err);
    }
    else{
      console.log(data);
    }
  });
});

//查询/Home
app.get("/event",function(req,res){
  db.query(`SELECT * FROM addevent`,function(err,data){
    if(err){
      console.log(err);
    }
    else{
      res.header("Access-Control-Allow-Origin", "*");
      res.send(data);
    }
  });
});

//查询/intoevent
app.get('/intoevent',function(req,res){
  db.query(`SELECT * FROM addevent WHERE id=${req.query.id}`,function(err,data){
    if(err){
      console.log(err);
    }
    else{
      res.header("Access-Control-Allow-Origin", "*");
      console.log(data);
      res.send(data);
    }
  });
});

//修改/modifyevent
app.get('/modifyevent',function(req,res){
  db.query(`UPDATE addevent SET title='${req.query.title}',starts='${req.query.starts}',ends='${req.query.ends}',place='${req.query.place}',re_peat='${req.query.re_peat}',reminder='${req.query.reminder}' WHERE id=${req.query.id}`,function(err,data){
    if(err){
      console.log(err);
    }
    else{
      res.header("Access-Control-Allow-Origin", "*");
    }
  });
});

//跨域
app.use(cors({
	origin: ['http://localhost:8080'], // 这是本地的默认地址和端口，vue启动的项目就是在这里，这样保证了等会我们在浏览器能访问服务器的数据（user.json）	
	methods: ["GET", "POST"],
	alloweHeaders: ["Content-Type", "Authorization"]
}));
 

//传递一个包含静态资源（图片，css，js文件）的目录给express.static中间件用于立即开始提供文件。
app.listen(5050);
