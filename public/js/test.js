// ?id=5&status=1 >> {id:5,status:1}

// 封装为一个工具函数
const itcast = {
    getparams:function(str){ //?id=5&status=1
        let obj = {}
        // 1.去除？
        str = str.substr(1)  // id=5&status=1
        // 2.按&进行分隔
        let arr = str.split('&') // ['id=5','status=1']
        // 3.遍历分隔所获取到的数组，再一个一个处理
        for(let i=0;i<arr.length;i++){
            // arr[i] === 'id=5'
            let temp = arr[i].split('=') // ["id","5"]
            // 添加到对象
            obj[temp[0]] = temp[1]
        }
        return obj
    }
}
