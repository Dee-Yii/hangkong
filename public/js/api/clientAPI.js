/**
 * Created by DAY on 2017/4/15.
 */

define(["jquery"], function ($) {
    var clientAPI = {
        /**
         * 客户管理-修改额度
         */
        changeLine: function (data,cb) {
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
         * 客户管理-客户列表
         */
        getClientList: function (data,cb) {
            $.post("/user/getlist",data,function (result) {
                cb(result);
            })
        },
        /**
         * 客户管理-客户列表-未平仓列表
         */
        getWPCList: function (data,cb) {
            $.post("/trade/closePosition",data,function (result) {
                cb(result);
            })
        },
        /**
         * 客户管理-客户列表-已平仓列表
         */
        getYPCList: function (data,cb) {
            $.post("/trade/closePosition",data,function (result) {
                cb(result);
            })
        },
        /**
         * 客户管理-客户列表-出金列表
         */
        getOutMoneyList: function (data,cb) {
            $.post("/trade/closePosition",data,function (result) {
                cb(result);
            })
        },
        /**
         * 客户管理-客户列表-入金列表
         */
        getInMoneyList: function (data,cb) {
            $.post("/trade/closePosition",data,function (result) {
                cb(result);
            })
        }

    };
    return clientAPI;
});
