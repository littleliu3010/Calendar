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

app.get("/addevent",function(req,res){
  console.log(req.query)
  db.query(`INSERT INTO addevent (id, title, place, allDay, starts, ends, timeZone, re_peat, reminder, color, note) VALUES (NULL, '${req.query.title}', '${req.query.place}', '${req.query.allDay}', '${req.query.starts}', '${req.query.ends}', '${req.query.timeZone}', '${req.query.re_peat}', '${req.query.reminder}', '${req.query.color}', '${req.query.note}')`,function(err,data){
    if(err){
      console.log(err);
    }
    else{
      console.log(data);
    }
  });
});

app.use(cors({
	origin: ['http://localhost:8080'], // 这是本地的默认地址和端口，vue启动的项目就是在这里，这样保证了等会我们在浏览器能访问服务器的数据（user.json）	
	methods: ["GET", "POST"],
	alloweHeaders: ["Content-Type", "Authorization"]
}));
 

//传递一个包含静态资源（图片，css，js文件）的目录给express.static中间件用于立即开始提供文件。
app.listen(5050);
