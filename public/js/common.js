var itcast = {
    getParameter:function(str){
        // 删除?
        str = str.substring(1) 
        // 分割字符串
        var arr = str.split('&') 
        // 循环遍历再次分割
        var obj = {}
        for(var i=0;i<arr.length;i++){
            var temp = arr[i].split('=') 
            // 将数据添加到对象
            obj[temp[0]] = temp[1] 
        }
        return obj
    }
}