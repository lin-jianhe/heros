// 路由模块
const express = require('express')
const controller = require('./controller')
// 创建路由对象
const router = express.Router()

    // 挂载路由配置
    // 1.获取所有英雄数据：  get     /getalldata
    router.get('/getalldata',controller.getalldata)

    // 2.根据id号删除单个英雄数据：get   /delete
        .get("/delete", controller.delete)
        
    // 3.实现英雄头像上传：post   /uploadFile
    .post("/uploadFile",controller.uploadFile)

    // 4.实现英雄数据的新增：post   /add
    .post("/add",controller.add)

    // 5.根据id获取单个英雄数据：get   /getHeroById
    .get("/getHeroById",controller.getHeroById)
    // 6.实现英雄数据的编辑：post    /edit
    .post("/edit",controller.edit)

    // 7.实现用户登陆验证：post   /login




module.exports = router
