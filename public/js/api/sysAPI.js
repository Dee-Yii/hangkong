/**
 * Created by DAY on 2017/4/15.
 */

define(["jquery"], function ($) {
    var sysAPI = {
        login: function (data,cb) {
            $.post("/login/dologin",data,function (result) {
                cb(result);
            })
        },
        resetPwd: function () {
            $.post("/resetPwd.php",data,function (result) {
                cb(result);
            })
        }

    };
    return sysAPI;
});
