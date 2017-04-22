var _ = require('underscore');

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
var transferDate = function (time) {


    // 处理传入的time
    var year = time.substr(0,4);
    var month = time.substr(4,2);
    var day = time.substr(6,2);
    var h = time.substr(8,2);
    var m = time.substr(10,2);
    var s = time.substr(12,2);
    var targetTime = year+"/"+month+"/"+day+" "+h+":"+m+":"+s; // 传入的日期
    var targetHaoMiao = (new Date(targetTime)).getTime(); //得到毫秒数


    // 处理当前时间
    var date = new Date();
    var changeDate = date.Format("yyyy-MM-dd hh:mm:ss")
    var nowYear = changeDate.substr(0,4);
    var nowMontn = changeDate.substr(5,2);
    var nowDay = changeDate.substr(8,2);
    var zeroTime = nowYear+"/"+nowMontn+"/"+nowDay+" "+"00:00:00"; // 0点日期
    var zeroHaoMiao = (new Date(zeroTime)).getTime();

    // 时差
    var timeAgo = date - targetHaoMiao;
    console.log(timeAgo);

    if(timeAgo < 0){
        text = new Date(targetTime).Format("yyyy-MM-dd hh:mm:ss");
        return text;
    }else if(timeAgo < 600000){
        text = "刚刚";
        return text;
    }else if(targetHaoMiao > zeroHaoMiao){
        text = "今天" + new Date(targetTime).Format("hh:mm:ss");
        return text;
    }else if(targetHaoMiao <= zeroHaoMiao){
        text = new Date(targetTime).Format("yyyy-MM-dd hh:mm:ss");
        return text;
    }
};
exports.transferDate = transferDate;