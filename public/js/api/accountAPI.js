/**
 * Created by DAY on 2017/4/15.
 */

define(["jquery"], function ($) {
    var accountAPI = {
        /**
         * 机构管理-新建机构
         */
        addOrg: function (data,cb) {
            $.post("/addOrg.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 机构管理-删除
         */
        delOrg: function (data,cb) {
            $.post("/delOrg.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 机构管理-修改
         */
        changeOrg: function (data,cb) {
            $.post("/changeOrg.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 机构管理-启用
         */
        openOrg: function (data,cb) {
            $.post("/openOrg.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 机构管理-禁用
         */
        closeOrg: function (data,cb) {
            $.post("/closeOrg.php",data,function (result) {
                cb(result);
            })
        },

        /**
         * 机构管理-查询
         */
        searchOrg: function (data,cb) {
            $.post("/searchOrg.php",data,function (result) {
                cb(result);
            })
        },


    };
    return accountAPI;
});
