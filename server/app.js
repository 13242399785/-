const express = require('express')
const cors = require('cors')
const app = express()
const multer = require('multer')
const fs = require('fs');
app.set('secret', 'jakezhang168168')
//设置跨域访问
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1');
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// }); 
//跨域
app.use(cors())
//将请求体转为json对象
app.use(express.json())
//托管静态资源
app.use('/wzry', express.static(__dirname + '/web'))
app.use('/wzry/back', express.static(__dirname + '/admin'))
app.use('/uploads', express.static(__dirname + '/uploads'))
console.log(__dirname)
//连接数据库
require('./plugins/db')(app)
//后台管理 GRUD 接口
require('./routes/admin/index')(app)
//图片上传接口
require('./routes/admin/imgUpload')(app, multer)
//登录接口
require('./routes/admin/login')(app)

// 使用swagger
const expressSwagger = require('express-swagger-generator')(app)
let options = {
  swaggerDefinition: {
    info: {
      description: 'This is a sample server',
      title: 'Swagger',
      version: '1.0.0'
    },
    host: 'huazai.loca.lt',
    basePath: '/',
    produces: ['application/json', 'application/xml'],
    schemes: ['https'],
    securityDefinitions: {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: ''
      }
    }
  },
  route: {
    url: '/swagger',
    docs: '/swagger.json' //swagger文件 api
  },
  basedir: __dirname, //app absolute path
  files: ['./routes/admin/*.js'] //Path to the API handle folder
}
expressSwagger(options)

//前端页面请求数据接口
// require('./routes/web/init')(app)// 快捷录入数据库数据，不要轻易操作
require('./routes/web/index')(app)
require('./routes/web/strategy')(app)
require('./routes/web/race')(app)
require('./routes/web/common')(app)

app.get('/',function(req,res){ 
  // res.send({data:'ok'})
  console.log(__dirname)
	fs.readFile(__dirname+"/uploads/"+'user.json','utf8',function(err,data){
    if(err) throw err;
		// console.log(data);
		// console.log("reqquery:",req.body);
		res.end(data);
	})
})
// 监听服务器其他错误
app.use((err, req, res, next) => {
  if (!err.statusCode) return res.status(500).send({ message: err.message })

  res.status(err.statusCode).send({
    message: err.message
  })
})

app.listen(3333, () => {
  console.log('http://localhost:3333')
})