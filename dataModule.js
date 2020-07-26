// 用于heros表数据的操作：增加删除修改和查询
const mysql = require('mysql')
let conn = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'heima',
})

module.exports = {
    // 1.获取所有英雄数据：  get     /getalldata
    getalldata(callback) {
        // console.log("1111")
        // sql语句
        let sql = 'select * from heros where isdelete =0'
        // // 执行
        conn.query(sql, (err, results) => {
            if (err) {
                callback(err)
            } else {
                callback(null, results)
            }
        })
    },

    // 2.根据id号删除单个英雄数据：get   /delete
    delete(id,callback){
        let sql = "update heros set isdelete=1 where id ="+id
        conn.query(sql,(err)=>{
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        })
    },
    // 3.实现英雄数据的新增：post   /add
    add(obj, callback) {
        let sql = "insert into heros set ?";
        conn.query(sql, obj, (err) => {
            if (err) {
                callback(err)
            } else {
                callback(null,)
            }
        })
    },
    // 4.根据id获取单个英雄数据：get   /getHeroById
    getHeroById(id, callback) {
        // console.log("1111")
        // 根据获取到的id查询相对应的id名,进行查找
        let sql = 'select * from heros where id='+id
        conn.query(sql,(err, results) => {
            if (err) {
                callback(err)
            } else {
                // 查询到的是放回一个结果集,是一个数组,
                // 需要数组中的第一个元素
                callback(null,results[0])
            }
        })
    },

    // 5.实现英雄数据的编辑：post    /edit
    
        edit(obj,callback){
            let sql = 'update heros set ? where id = ?'
            // 执行方法
            conn.query(sql,[obj,obj.id],(err,results,files)=>{
                if(err){
                    callback(err)
                }else{
                    callback(null)
                }
            })
        }
    }

    // 6.实现用户登陆验证：post   /login

