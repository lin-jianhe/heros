$(function(){
    // 1.获取参数
    // let id = location.search.split('=')[1]
    // alert(id)
    let id = itcast.getparams(location.search).id
    console.log(id)

    // 2.根据参数ajax
    // 13："英雄"案例根据ID查询单个英雄数据
    // - 请求路径：http://127.0.0.1:3002/getHeroById
    // - 请求方法：get

    $.ajax({
        // url:'http://127.0.0.1:3002/getHeroById?id='+id
        url:'http://127.0.0.1:3002/getHeroById',
        // data:"id="+id
        // data:{id:id}
        data:{id},
        dataType:'json',
        success:function(res){
            console.log(res)
            if(res.code == 200){
                $('tbody').html(template('userTemp',res.data))
            }
        }
    })

    // 文件上传，由于img是动态生成的元素，所以事件的绑定通通都要使用事件委托
    $('tbody').on('change','#img',function(){
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

    // 编辑提交
    // 11："英雄"案例实现用户编辑提交
    // - 请求路径：http://127.0.0.1:3002/edit
    // - 请求方法：post
    $('tbody').on('click','#sub',function(){
        console.log($('form').serialize()+"&id="+id)
        $.ajax({
            type:'post',
            url:'http://127.0.0.1:3002/edit',
            data:$('form').serialize()+"&id="+id,
            dataType:'json',
            success:function(res){
                if(res.code == 200){
                    alert(res.msg)
                    location.href='./index.html'
                }
            }
        })
    })
})