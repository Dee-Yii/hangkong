define([
    "jquery",
    "utils",
    "config",
    "accountAPI",
    "layer",
    "pagination",
    "remodal"
], function ($, utils, config,accountAPI) {
    var addUserModal = $('[data-remodal-id=addUserModal]').remodal();
    var changeUserModal = $('[data-remodal-id=changeUserModal]').remodal();
    var resetPwdModal = $('[data-remodal-id=resetPwdModal]').remodal();
    var body = $("body");

    var page = {
        init: function () {
            this.render();
            this.bindEvents();
        },
        render: function () {
            this.initModal();
            this.fnGetList({}, true);
        },
        bindEvents: function () {
            this.onSearch();
            this.onSelectAll();
            this.onAdd();
        },
        initModal: function () {
            $(".J_showAdd").on("click", function () {
                addUserModal.open();
            });
            body.on("click", ".J_showChangeUser", function () {
                var $this = $(this);
                var oTd = $this.parents('tr').find('td');
                var orgName = oTd.eq(4).text();
                var username = oTd.eq(1).text();
                var nickname = oTd.eq(2).text();
                var roleType = oTd.eq(3).text();
                var oForm = $(".changeUserModal .modalForm");
                oForm.find("input[name=orgName]").val(orgName);
                oForm.find("input[name=username]").val(username);
                oForm.find("input[name=nickname]").val(nickname);
                oForm.find("input[name=roleType]").val(roleType);
                changeUserModal.open();
            });


            body.on("click", ".J_showResetPwd", function () {
                var $this = $(this);
                var oTd = $this.parents('tr').find('td');
                var username = oTd.eq(1).text();
                var nickname = oTd.eq(2).text();
                var oForm = $(".resetPwdModal .modalForm");
                oForm.find("input[name=username]").val(username);
                oForm.find("input[name=nickname]").val(nickname);
                changeUserModal.open();
                resetPwdModal.open();
            });

            $(document).on('closed', '.remodal', function (e) {
                $(this).find(".modalForm")[0].reset();
            });
        },
        onSelectAll: function () {
            utils.selectAll();
        },
        onSearch: function () {

        },
        onAdd: function () {
            var btn = $(".addUserModal .remodal-confirm");
            btn.on("click",function () {
                var $this = $(this);
                if($this.hasClass("disabled")) return;
                $this.addClass("disabled");
                var data = {
                    
                };

                layer.msg("新建成功");
                addUserModal.close();
                console.log(1);
                // accountAPI.addOrg(data,function (result) {
                //     addUserModal.close();
                //     layer.msg("新建成功");
                // });



            })
        },
        fnGetList: function (data, initPage) {
            var _this = this;
            var table = $(".data-container table");
            // showLoading(".J_consumeTable");
            // var data = {};
            // accountAPI.searchUser(data, function (result) {
            //
            // });
            var result = {
                "totalPages": 91,
                "pageNum": 5,
                "page": 1,
                "list": [
                    {
                        "tid": "141474220113067346",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003017",
                        "close_position_time": "1490003077",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.06111",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0"
                    },
                    {
                        "tid": "141474220113067346",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003017",
                        "close_position_time": "1490003077",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.06111",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0"
                    },
                    {
                        "tid": "141474220113067346",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003017",
                        "close_position_time": "1490003077",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.06111",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0"
                    },
                    {
                        "tid": "141474220113067346",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003017",
                        "close_position_time": "1490003077",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.06111",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0"
                    },
                    {
                        "tid": "141474220113067346",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003017",
                        "close_position_time": "1490003077",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.06111",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0"
                    },
                    {
                        "tid": "141474220113067346",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003017",
                        "close_position_time": "1490003077",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.06111",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0"
                    },
                    {
                        "tid": "141474220113067346",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003017",
                        "close_position_time": "1490003077",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.06111",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0"
                    },
                    {
                        "tid": "141474220113067346",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003017",
                        "close_position_time": "1490003077",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.06111",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0"
                    },
                    {
                        "tid": "141474220113067346",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003017",
                        "close_position_time": "1490003077",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.06111",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0"
                    },
                    {
                        "tid": "141474220113067346",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003017",
                        "close_position_time": "1490003077",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.06111",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0"
                    },
                    {
                        "tid": "141474220113067346",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003017",
                        "close_position_time": "1490003077",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.06111",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0"
                    },
                    {
                        "tid": "141474220113067346",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003017",
                        "close_position_time": "1490003077",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.06111",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "-1",
                        "handle": "0"
                    },
                    {
                        "tid": "7418135986911958157",
                        "uid": "5",
                        "code_id": "12",
                        "buy_sell": "-1",
                        "code": null,
                        "symbol": "fx_sjpycnh",
                        "name": "\u4e0a\u6d77-\u4e1c\u4eac1\u5206\u949f",
                        "close_type": "6",
                        "amount": "3",
                        "open_position_time": "1490003025",
                        "close_position_time": "1490003085",
                        "gross_profit": "33.4023",
                        "open_price": "0.06111",
                        "open_cost": "33.4023",
                        "open_charge": "0.15",
                        "close_price": "0.061104",
                        "pos_limit": "0",
                        "stop": "0",
                        "deferred": "0",
                        "is_deferred": null,
                        "result": "1",
                        "handle": "0"
                    }]
            };
            console.log("获取用户管理列表 调用成功!");
            if (result.list.length == "0") {
                table.find("tbody").empty().html("<tr><td colspan='9'>暂无记录</td></tr>");
                $(".pagination").hide();
                return false;
            }
            var oTr,
                checkTd = '<td><input type="checkbox"></td>',
                controlTd = "<td>" +
                    "<a class='J_showChangeUser text-blue' href='javascript:;'> 修改 </a> | " +
                    "<a class='J_showResetPwd text-blue' href='javascript:;'> 重置密码 </a>" +
                    "</td>";
            $.each(result.list, function (i, value) {
                var codeTd = '<td>' + value.code_id + '</td>';
                var orgNameTd = '<td>' + value + '</td>';
                var orgTypeTd = '<td>' + config.orgType[value.orgType] + '</td>';
                var upLevelTd = '<td>' + config.upLevel[value.upLevel] + '</td>';
                var phoneTd = '<td>' + value.phone + '</td>';
                var cellphoneTd = '<td>' + value.cellphone + '</td>';
                var statusTd = '<td>' + config.orgStatus[value.orgStatus] + '</td>';
                oTr += '<tr class="fadeIn animated">' + checkTd + codeTd + orgNameTd + orgTypeTd + upLevelTd + phoneTd + cellphoneTd + statusTd + controlTd + '</tr>';
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
        }


    };
    page.init();

});
