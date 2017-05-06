/**
 * Created by DAY on 2017/4/15.
 */

define(["jquery"], function ($) {
    var sysAPI = {

        /**
         * 统计报表-获取统计列表
         */
        changeOrg: function (data,cb) {
            $.post("/trade/report",data,function (result) {
                cb(result);
            })
        },

    };
    return sysAPI;
});
