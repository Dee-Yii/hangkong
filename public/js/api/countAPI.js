/**
 * Created by DAY on 2017/4/15.
 */

define(["jquery"], function ($) {
    var sysAPI = {
        login: function (data,cb) {
            $.post("/login.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 机构管理-新建机构
         */
        addOrg: function (data,cb) {
            $.post("/addOrg.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 机构管理-修改机构
         */
        changeOrg: function (data,cb) {
            $.post("/addOrg.php",data,function (result) {
                cb(result);
            })
        },

    };
    return sysAPI;
});
