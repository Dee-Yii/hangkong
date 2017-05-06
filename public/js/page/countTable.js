define([
    "jquery",
    "utils",
    "config",
    "clientAPI",
    "layer",
    "pagination",
    "remodal"
], function ($, utils, config, clientAPI) {
    var page = {
        init: function () {
            this.render();
            this.bindEvents();
        },
        render: function () {
            utils.initDatePicker();
            utils.initClientInfo();
            this.fnGetList({}, true);
        },
        bindEvents: function () {
            this.onSearch();
        },

        onSearch: function () {

        },
        fnGetList: function (data, initPage) {
            var _this = this;
            var table = $(".data-container table");
            clientAPI.getInMoneyList(data, function (result) {
                console.log("获取入金记录 调用成功!");
                if (result.list.length == "0") {
                    table.find("tbody").empty().html("<tr><td colspan='6'>暂无记录</td></tr>");
                    $(".pagination").hide();
                    return false;
                }
                var oTr;
                $.each(result.list, function (i, v) {
                    var timeTd = '<td>' + v.close_position_time + '</td>';
                    var usernameTd = '<td>' + (v.userInfo ? v.userInfo.phoneNum : "") + '</td>';
                    var goodsNameTd = '<td>' + (v.actaulInfo ? v.actaulInfo.name : "") + '</td>';
                    var dirTd = '<td>' + (v.buy_sell == -1 ? "卖出" : "买入") + '</td>';
                    var incomeTd = '<td>'+(v.result*v.gross_profit).toFixed(2)+'</td>';
                    oTr +=
                        '<tr class="fadeIn animated">'
                        + timeTd + usernameTd  + goodsNameTd + dirTd + incomeTd +
                        '</tr>';
                });
                table.find("tbody").empty().html(oTr);
                if (initPage) {
                    var pageCount = result.totalPages;
                    if (pageCount > 0) {
                        console.log("页数：" + pageCount);
                        $(".pagination").show().html("").createPage({
                            pageCount: pageCount,
                            current: 1,
                            backFn: function (p) {
                                var newData = data;
                                newData.page = p;
                                _this.fnGetList(data)
                            }
                        })
                    }
                }
            });


            //***************
            var result ={
                "totalPages": 162,
                "pageNum": 5,
                "page": 1,
                "list": [
                    {
                        "tid": "1757850905579034113",
                        "uid": "5",
                        "code_id": "11",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_susdcnh",
                        "name": "上海-纽约1分钟",
                        "close_type": "6",
                        "amount": "50",
                        "open_position_time": "1493883365",
                        "close_position_time": "2017-05-04 15:37:05",
                        "gross_profit": "776.786",
                        "open_price": "6.8971",
                        "open_cost": "776.786",
                        "open_charge": "0.15",
                        "close_price": "6.8969",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "1",
                        "handle": "1",
                        "actaulInfo": {
                            "id": "1",
                            "code": "AG100G",
                            "name": "0.1kg白银",
                            "symbol": "AG",
                            "unit": "0.1kg",
                            "amount": "0.1",
                            "profit": "0.1",
                            "deposit": "8",
                            "open": "0.7",
                            "close": "0",
                            "deferred": "0.1",
                            "max": "30",
                            "min": " 1",
                            "exchange_name": "DEFAULT",
                            "platform_name": "JH",
                            "status": "1",
                            "sort": "1",
                            "show_symbol": "白银",
                            "show_name": "0.1kg"
                        },
                        "userInfo": {
                            "uid": "5",
                            "phoneNum": "18668169052",
                            "nickname": "",
                            "type": "0",
                            "headUrl": "",
                            "passwd": "4bcf73028a526f5ae6899759ab332c3d3b173855bef3b22b19224cd5233d39c0",
                            "cashLv": "0",
                            "registerTime": "2017-03-20 12:59:02",
                            "registerStatus": "0",
                            "gender": "0",
                            "lastLoginTime": "2017-04-13 09:56:35",
                            "lastLoginIp": "60.186.229.22",
                            "memberId": "1",
                            "agentId": "1",
                            "recommend": "1",
                            "status": "0"
                        }
                    },
                    {
                        "tid": "1674807288714476621",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "上海-东京1分钟",
                        "close_type": "6",
                        "amount": "50",
                        "open_position_time": "1493883340",
                        "close_position_time": "2017-05-04 15:36:40",
                        "gross_profit": "556.486",
                        "open_price": "0.061086",
                        "open_cost": "556.486",
                        "open_charge": "0.15",
                        "close_price": "0.061086",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0",
                        "actaulInfo": {
                            "id": "1",
                            "code": "AG100G",
                            "name": "0.1kg白银",
                            "symbol": "AG",
                            "unit": "0.1kg",
                            "amount": "0.1",
                            "profit": "0.1",
                            "deposit": "8",
                            "open": "0.7",
                            "close": "0",
                            "deferred": "0.1",
                            "max": "30",
                            "min": " 1",
                            "exchange_name": "DEFAULT",
                            "platform_name": "JH",
                            "status": "1",
                            "sort": "1",
                            "show_symbol": "白银",
                            "show_name": "0.1kg"
                        },
                        "userInfo": {
                            "uid": "5",
                            "phoneNum": "18668169052",
                            "nickname": "",
                            "type": "0",
                            "headUrl": "",
                            "passwd": "4bcf73028a526f5ae6899759ab332c3d3b173855bef3b22b19224cd5233d39c0",
                            "cashLv": "0",
                            "registerTime": "2017-03-20 12:59:02",
                            "registerStatus": "0",
                            "gender": "0",
                            "lastLoginTime": "2017-04-13 09:56:35",
                            "lastLoginIp": "60.186.229.22",
                            "memberId": "1",
                            "agentId": "1",
                            "recommend": "1",
                            "status": "0"
                        }
                    },
                    {
                        "tid": "3642050484610273488",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "上海-东京1分钟",
                        "close_type": "6",
                        "amount": "50",
                        "open_position_time": "1493883324",
                        "close_position_time": "2017-05-04 15:36:24",
                        "gross_profit": "556.486",
                        "open_price": "0.061086",
                        "open_cost": "556.486",
                        "open_charge": "0.15",
                        "close_price": "0.061086",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0",
                        "actaulInfo": {
                            "id": "1",
                            "code": "AG100G",
                            "name": "0.1kg白银",
                            "symbol": "AG",
                            "unit": "0.1kg",
                            "amount": "0.1",
                            "profit": "0.1",
                            "deposit": "8",
                            "open": "0.7",
                            "close": "0",
                            "deferred": "0.1",
                            "max": "30",
                            "min": " 1",
                            "exchange_name": "DEFAULT",
                            "platform_name": "JH",
                            "status": "1",
                            "sort": "1",
                            "show_symbol": "白银",
                            "show_name": "0.1kg"
                        },
                        "userInfo": {
                            "uid": "5",
                            "phoneNum": "18668169052",
                            "nickname": "",
                            "type": "0",
                            "headUrl": "",
                            "passwd": "4bcf73028a526f5ae6899759ab332c3d3b173855bef3b22b19224cd5233d39c0",
                            "cashLv": "0",
                            "registerTime": "2017-03-20 12:59:02",
                            "registerStatus": "0",
                            "gender": "0",
                            "lastLoginTime": "2017-04-13 09:56:35",
                            "lastLoginIp": "60.186.229.22",
                            "memberId": "1",
                            "agentId": "1",
                            "recommend": "1",
                            "status": "0"
                        }
                    },
                    {
                        "tid": "8791282959331912359",
                        "uid": "5",
                        "code_id": "10",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_seurcnh",
                        "name": "上海-法兰克福1分钟",
                        "close_type": "6",
                        "amount": "1",
                        "open_position_time": "1493882924",
                        "close_position_time": "2017-05-04 15:29:44",
                        "gross_profit": "12.7015",
                        "open_price": "7.509",
                        "open_cost": "12.7015",
                        "open_charge": "0.15",
                        "close_price": "7.509",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0",
                        "actaulInfo": {
                            "id": "1",
                            "code": "AG100G",
                            "name": "0.1kg白银",
                            "symbol": "AG",
                            "unit": "0.1kg",
                            "amount": "0.1",
                            "profit": "0.1",
                            "deposit": "8",
                            "open": "0.7",
                            "close": "0",
                            "deferred": "0.1",
                            "max": "30",
                            "min": " 1",
                            "exchange_name": "DEFAULT",
                            "platform_name": "JH",
                            "status": "1",
                            "sort": "1",
                            "show_symbol": "白银",
                            "show_name": "0.1kg"
                        },
                        "userInfo": {
                            "uid": "5",
                            "phoneNum": "18668169052",
                            "nickname": "",
                            "type": "0",
                            "headUrl": "",
                            "passwd": "4bcf73028a526f5ae6899759ab332c3d3b173855bef3b22b19224cd5233d39c0",
                            "cashLv": "0",
                            "registerTime": "2017-03-20 12:59:02",
                            "registerStatus": "0",
                            "gender": "0",
                            "lastLoginTime": "2017-04-13 09:56:35",
                            "lastLoginIp": "60.186.229.22",
                            "memberId": "1",
                            "agentId": "1",
                            "recommend": "1",
                            "status": "0"
                        }
                    },
                    {
                        "tid": "3450102723273383353",
                        "uid": "5",
                        "code_id": "10",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_seurcnh",
                        "name": "上海-法兰克福1分钟",
                        "close_type": "6",
                        "amount": "50",
                        "open_position_time": "1493882909",
                        "close_position_time": "2017-05-04 15:29:29",
                        "gross_profit": "634.989",
                        "open_price": "7.508",
                        "open_cost": "634.989",
                        "open_charge": "0.15",
                        "close_price": "7.509",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0",
                        "actaulInfo": {
                            "id": "1",
                            "code": "AG100G",
                            "name": "0.1kg白银",
                            "symbol": "AG",
                            "unit": "0.1kg",
                            "amount": "0.1",
                            "profit": "0.1",
                            "deposit": "8",
                            "open": "0.7",
                            "close": "0",
                            "deferred": "0.1",
                            "max": "30",
                            "min": " 1",
                            "exchange_name": "DEFAULT",
                            "platform_name": "JH",
                            "status": "1",
                            "sort": "1",
                            "show_symbol": "白银",
                            "show_name": "0.1kg"
                        },
                        "userInfo": {
                            "uid": "5",
                            "phoneNum": "18668169052",
                            "nickname": "",
                            "type": "0",
                            "headUrl": "",
                            "passwd": "4bcf73028a526f5ae6899759ab332c3d3b173855bef3b22b19224cd5233d39c0",
                            "cashLv": "0",
                            "registerTime": "2017-03-20 12:59:02",
                            "registerStatus": "0",
                            "gender": "0",
                            "lastLoginTime": "2017-04-13 09:56:35",
                            "lastLoginIp": "60.186.229.22",
                            "memberId": "1",
                            "agentId": "1",
                            "recommend": "1",
                            "status": "0"
                        }
                    }
                ]
            };
            console.log("获取入金记录 调用成功!");
            if (result.list.length == "0") {
                table.find("tbody").empty().html("<tr><td colspan='6'>暂无记录</td></tr>");
                $(".pagination").hide();
                return false;
            }
            var oTr;
            $.each(result.list, function (i, v) {
                var timeTd = '<td>' + v.close_position_time + '</td>';
                var usernameTd = '<td>' + (v.userInfo ? v.userInfo.phoneNum : "") + '</td>';
                var goodsNameTd = '<td>' + (v.actaulInfo ? v.actaulInfo.name : "") + '</td>';
                var dirTd = '<td>' + (v.buy_sell == -1 ? "卖出" : "买入") + '</td>';
                var incomeTd = '<td>'+(v.result*v.gross_profit).toFixed(2)+'</td>';
                oTr +=
                    '<tr class="fadeIn animated">'
                    + timeTd + usernameTd  + goodsNameTd + dirTd + incomeTd +
                    '</tr>';
            });
            table.find("tbody").empty().html(oTr);
            if (initPage) {
                var pageCount = result.totalPages;
                if (pageCount > 0) {
                    console.log("页数：" + pageCount);
                    $(".pagination").show().html("").createPage({
                        pageCount: pageCount,
                        current: 1,
                        backFn: function (p) {
                            var newData = data;
                            newData.page = p;
                            _this.fnGetList(data)
                        }
                    })
                }
            }
            //***************
        }

    };
    page.init();

});
