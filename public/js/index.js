$(function(){
    // 获取英雄数据
    // 9：“英雄”案例获取所有数据
    // - 请求路径：http://127.0.0.1:3002/getalldata
    // - 请求方法：get
    function init(){
        $.ajax({
            url:'http://127.0.0.1:3002/getalldata',
            dataType:'json',
            success:function(res){
                console.log(res)
                if(res.code == 200){
                    // 动态渲染
                    // let html = template('herosTemp',res)
                    $('tbody').html(template('herosTemp',res))
                }
            }
        })
    }
    init()


    // 删除
    // 12："英雄"案例实现删除单个用户
    // - 请求路径：http://127.0.0.1:3002/delete
    // - 请求方法：get

    $('tbody').on('click','.del',function(){
        if(confirm('请问是否真的需要删除？')){
            let _this = this

            let id = $(this).data('id')
            // let id = $(this).data().id
            // let id = $(this).data()['id']
            $.ajax({
                url:'http://127.0.0.1:3002/delete',
                data:{id},
                dataType:'json',
                success:function(res){
                    console.log(res)
                    if(res.code == 200){
                        // 提示
                        alert(res.msg)
                        // 刷新
                        // 1.重新加载当前列表数据--ajax,不会造成页面的刷新
                        init()
                        // 2.直接dom操作
                        // $(_this).parents('tr').remove()
                    }
                }
            })
        }
        
    })
})