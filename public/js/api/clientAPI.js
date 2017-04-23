/**
 * Created by DAY on 2017/4/15.
 */

define(["jquery"], function ($) {
    var clientAPI = {
        login: function (data,cb) {
            $.post("/login.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 客户管理-新建机构
         */
        addOrg: function (data,cb) {
            $.post("/addOrg.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 客户管理-停止交易
         */
        stopTrade: function (data,cb) {
            $.post("/addOrg.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 客户管理-查询
         */
        search: function (data,cb) {
            $.post("/user/getlist",data,function (result) {
                cb(result);
            })
        }

    };
    return clientAPI;
});
