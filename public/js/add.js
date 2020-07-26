$(function(){
    // 8：图片上传(英雄案例中图片上传也是使用这个)
    // - 请求路径：http://127.0.0.1:3002/uploadFile
    // - 请求方法：post
    // - 请求参数：img --图片对象

    // 实现文件上传
    $('#img').on('change',function(){
        // 收集图片数据
        // 1.获取文件对象，它是一个原生方式files,files是文件列表
        let myfile = $('#img')[0].files[0]
        // 2.使用formdata收集图片
        let formdata = new FormData()
        formdata.append('img',myfile)

        $.ajax({
            type:'post',
            url:'http://127.0.0.1:3002/uploadFile',
            data:formdata,
            dataType:'json',
            processData:false,
            contentType:false,
            success:function(res){
                console.log(res)
                if(res.code == 200){
                    // 实现预览，对img标签设置Src属性
                    $('#photo').attr('src','http://127.0.0.1:3002/images/'+res.img)
                    // 将当前的图片的名称存储到隐藏域，后期通过serialize可以直接获取它的value值
                    $('.myimg').val(res.img)
                }
            }
        })
    })

    // 新增英雄
    // 10："英雄"案例实现新增用户信息
    // - 请求路径：http://127.0.0.1:3002/add
    // - 请求方法：post
    $('#sub').on('click',function(){
        // 收集用户数据，使用serialize来实现
        // let data = $('form').serialize()
        // console.log(data)
        $.ajax({
            type:'post',
            url:'http://127.0.0.1:3002/add',
            data:$('form').serialize(),
            dataType:'json',
            success:function(res){
                console.log(res)
                if(res.code == 200){
                    alert(res.msg)
                    // 跳转到首页,js代码中的页面跳转不是参照js文件，面是参照调用该js文件的页面
                    location.href='./index.html'
                }
            }
        })
    })
})