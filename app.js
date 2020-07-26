const express = require('express')
const app = express();
const path = require('path')

const router = require('./router.js');
const bodyparser = require("body-parser")
app.listen('3002', () => {
    console.log('http://127.0.0.1:3002')
})

// 托管静态页面
app.use('/', express.static(path.join(__dirname, '/views')))

// 托管静态资源
app.use(express.static('public'))
/* 
   添加body-parser的中间件配置
   extended: false：使用querystring进行数据的转换,
   当添加完中间件的配置之后，
   body-parser会将接收到的参数转换为对象并挂载到req.body属性上
*/
app.use(bodyparser.urlencoded({
    extends: false
}));
// body中有中间件body方法
app.use(bodyparser.json())
// router暴露接口
app.use(router)