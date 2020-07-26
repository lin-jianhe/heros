// 处理英雄案例的业务处理
const formidable = require("formidable")
const dataModule = require('./dataModule');
const path = require("path");
module.exports = {
    // 1.获取所有英雄数据：  get     /getalldata
    getalldata(req,res){
    
        dataModule.getalldata((err,data)=>{
            if(err){
                res.json({
                    code:201,
                    msg:'数据获取失败'
                })
            }else{
                res.json({
                    code:200,
                    msg:'数据获取成功',
                    data
                })
            }
        })
    },

    // 2.根据id号删除单个英雄数据：get   /delete
    delete(req,res){
        dataModule.delete(req.query.id,(err)=>{
            if(err){
                res.json({
                    code:201,
                    msg:"数据删除失败"
                })
            }else{
                res.json({
                    code:200,
                    msg:"数据删除成功"
                })
            }
        })

    },
    // 3.实现英雄头像上传：post   /uploadFile
    uploadFile(req, res) {
        /* 
        基本使用步骤：

            下载fomidable模块
            2.引入formidable模块 const formidable = require('formidable');
            创建解析对象 const form = new formidable.IncomingForm();
            设置文件上传路径 form.uploadDir = path.join(dirname, 'img');
            是否保留上传文件的后缀名 form.keepExtensions = true;
            解析表单 form.parse(req, (err, fields, files） => {}）
            req 请求参数
            err请求出错信息
            fields普通请求参数
            files上传文件请求参数
        
        */
        // 创建解析对象
        let form = new formidable.IncomingForm()
        // 设置文件上传路径
        form.uploadDir = path.join(__dirname, "/public/images");
        // 保留上传文件的后缀名
        form.keepExtensions = true;
        // 接收所传递的值
        form.parse(req, (err, fields, files) => {
            // console.log(files.img.path)// 获取到的是对象
            /* 
            path:
            'D:\\线上课程资料\\node\\7.14\\上课案例\\heros_back\\public\\images\\upload_29213e778a38e2ea33a1f1bcf7d6e391.png',
            截取最后字段中斜杠
            */
            if (err) {
                res.json({
                    code: "201",
                    msg:"文件上传失败"
                })
            } else {
                let img = path.basename(files.img.path)
                res.json({
                    code: "200",
                    msg:"文件上传成功",
                    img
                })
            }
        })
    },

    // 4.实现英雄数据的新增：post   /add
    add(req, res) {
        // console.log(req.body)
        dataModule.add(req.body, (err, data) => {
            
            if (err) {
                res.json({
                    code: 201,
                    msg:"新增数据失败",
                })
            } else {
                res.json({
                    code: 200,
                    msg:"新增数据成功",
                })
            }
        })
    },

    // 5.根据id获取单个英雄数据：get   /getHeroById
    getHeroById(req, res) {
        // 获取ID号,
        let id = req.query.id
        // 根据ID获取相对应的英雄数据
        dataModule.getHeroById(id,(err,data)=> {
            if (err) {
                res.json({
                    code: "201",
                    msg:"数据获取失败",
            })
            } else {
                res.json({
                    code: "200",
                    msg: "数据获取成功",
                    data
                })
            }
        })
    },

    // 6.实现英雄数据的编辑：post    /edit
    edit(req, res) {
        dataModule.edit(req.body,(err)=>{
            if(err){
                res.json({
                    code:201,
                    msg:'数据编辑失败'
                })
            }else{
                res.json({
                    code:200,
                    msg:'数据编辑成功',
                })
            }
        })
    }

    // 7.实现用户登陆验证：post   /login

}