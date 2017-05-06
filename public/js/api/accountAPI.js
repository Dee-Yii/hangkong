/**
 * Created by DAY on 2017/4/15.
 */

define(["jquery"], function ($) {
    var accountAPI = {
        /**
         * 机构管理-获取所有机构列表 (添加用户时渲染所属机构 下拉列表)
         */
        getOrgList: function (data,cb) {
            $.post("/member/getList",data,function (result) {
                cb(result);
            })
        },
        /**
         * 机构管理-新建机构
         */
        addOrg: function (data,cb) {
            $.post("/adminuser/addUser",data,function (result) {
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
            data.pageNum = 10;
            $.post("/member/getList",data,function (result) {
                cb(result);
            })
        },



        /**
         * 用户管理-新建机构
         */
        addUser: function (data,cb) {
            $.post("/adminuser/addUser",data,function (result) {
                cb(result);
            })
        },
        /**
         * 用户管理-删除
         */
        delUser: function (data,cb) {
            $.post("/adminuser/delUser",data,function (result) {
                cb(result);
            })
        },
        /**
         * 用户管理-修改
         */
        changeUser: function (data,cb) {
            $.post("/changeUser.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 用户管理-重置密码
         */
        resetPwd: function (data,cb) {
            $.post("/adminuser/resetPassword",data,function (result) {
                cb(result);
            })
        },
        /**
         * 用户管理-启用
         */
        updateUserStatus: function (data,cb) {
            $.post("/adminuser/updateStatus",data,function (result) {
                cb(result);
            })
        },
        /**
         * 用户管理-查询
         */
        getUserList: function (data,cb) {
            data.pageNum = 10;
            $.post("/member/getList",data,function (result) {
                cb(result);
            })
        },


        /**
         * 经纪人管理-新建机构
         */
        addBroker: function (data,cb) {
            $.post("/addUser.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 经纪人管理-删除
         */
        delBroker: function (data,cb) {
            $.post("/delBroker.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 经纪人管理-修改
         */
        changeBroker: function (data,cb) {
            $.post("/changeBroker.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 经纪人管理-启用
         */
        openBroker: function (data,cb) {
            $.post("/openBroker.php",data,function (result) {
                cb(result);
            })
        },
        /**
         * 经纪人管理-禁用
         */
        closeBroker: function (data,cb) {
            $.post("/closeBroker.php",data,function (result) {
                cb(result);
            })
        },

        /**
         * 经纪人管理-查询
         */
        searchBroker: function (data,cb) {
            data.pageNum = 10;
            $.post("/agent/getList",data,function (result) {
                cb(result);
            })
        }


    };
    return accountAPI;
});
