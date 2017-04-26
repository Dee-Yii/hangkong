define([
    "jquery",
    "utils",
    "config",
    "clientAPI",
    "layer",
    "pagination",
    "remodal"
], function ($, utils, config, clientAPI) {
    var changeLineModal = $('[data-remodal-id=changeLineModal]').remodal();
    var body = $("body");

    var page = {
        init: function () {
            this.render();
            this.bindEvents();
        },
        render: function () {
            this.initModal();
            this.initEventBind();
            this.fnGetList({},true);
        },
        bindEvents: function () {
            this.onSearch();
            this.onStopTrade();
        },
        initEventBind: function () {
            utils.initDatePicker();
        },
        initModal: function () {
            body.on("click", ".J_showChangeLine", function () {
                var $this = $(this);
                var oTd = $this.parents('tr').find('td');
                var orgName = oTd.eq(4).text();
                var nickname = oTd.eq(2).text();
                var phone = oTd.eq(3).text();
                var oForm = $(".changeLineModal .modalForm");
                oForm.find("input[name=orgName]").val(orgName);
                oForm.find("input[name=nickname]").val(nickname);
                oForm.find("input[name=phone]").val(phone);
                changeLineModal.open();
            });

            $(document).on('closed', '.remodal', function (e) {
                $(this).find(".modalForm")[0].reset();
            });
        },
        onSearch: function () {
            var _this = this;
            $(".J_search").on("click", function () {
                var data = {
                    page       : 1,
                    startTime  : $("#dateStart").val(),
                    endTime    : $("#dateEnd").val(),
                    agetId     : $("input[name=org]").val(),
                    nickname   : $("input[name=nickname]").val(),
                    memberId   : $("input[name=broker]").val(),
                    phoneNum   : $("input[name=phone]").val()
                };

                _this.fnGetList(data,true);

            });
        },
        onStopTrade: function () {
            body.on("click", ".J_showStopTrade", function () {
                var $this = $(this);
                var id = $this.parents("tr").attr("data-id");
                var name = $this.parents("tr").find("td").eq(2).text();
                layer.confirm(
                    "警告！停止交易后用户能正常登录，但是无法进行交易",
                    {},
                    function () {
                        clientAPI.stopTrade({id: id}, function (result) {
                            layer.msg("操作成功");
                        });
                        layer.msg("操作成功");
                    })
            });
        },
        fnGetList: function (data, initPage) {
            var _this = this;
            var table = $(".data-container table");
            // showLoading(".J_consumeTable");
            // var data = {};
            clientAPI.getClientList(data, function (result) {
                /*var result = {
                    "totalPages": 1,
                    "pageNum": 5,
                    "page": 1,
                    "list": [
                        {
                            "uid": "3",
                            "phoneNum": "18657195470",
                            "nickname": "奥德赛",
                            "type": "0",
                            "headUrl": "",
                            "passwd": "d2337e370831e755254797c9a2d3139aa9a53bb977ad7ad27e213d30eccade2d",
                            "cashLv": "0",
                            "registerTime": "2017-03-20 11:53:02",
                            "registerStatus": "0",
                            "gender": "0",
                            "lastLoginTime": "2017-04-11 13:50:01",
                            "lastLoginIp": "60.186.229.22",
                            "memberId": "1",
                            "agentId": "1",
                            "recommend": "1",
                            "memberid": "123",
                            "name": "华东",
                            "superMemberid": null,
                            "code": "1",
                            "phone": "13256794455",
                            "status": "1"
                        },
                        {
                            "uid": "4",
                            "phoneNum": "18657195470",
                            "nickname": "史蒂夫",
                            "type": "0",
                            "headUrl": "",
                            "passwd": "d2337e370831e755254797c9a2d3139aa9a53bb977ad7ad27e213d30eccade2d",
                            "cashLv": "0",
                            "registerTime": "2017-03-10 11:53:02",
                            "registerStatus": "0",
                            "gender": "0",
                            "lastLoginTime": "2017-04-11 13:50:01",
                            "lastLoginIp": "60.186.229.22",
                            "memberId": "1",
                            "agentId": "1",
                            "recommend": "1",
                            "memberid": "123",
                            "name": "华东",
                            "superMemberid": null,
                            "code": "1",
                            "phone": "13789794455",
                            "status": "0"
                        },
                        {
                            "uid": "4",
                            "phoneNum": "18657195470",
                            "nickname": "史蒂夫",
                            "type": "0",
                            "headUrl": "",
                            "passwd": "d2337e370831e755254797c9a2d3139aa9a53bb977ad7ad27e213d30eccade2d",
                            "cashLv": "0",
                            "registerTime": "2017-03-10 11:53:02",
                            "registerStatus": "0",
                            "gender": "0",
                            "lastLoginTime": "2017-04-11 13:50:01",
                            "lastLoginIp": "60.186.229.22",
                            "memberId": "1",
                            "agentId": "1",
                            "recommend": "1",
                            "memberid": "123",
                            "name": "华东",
                            "superMemberid": null,
                            "code": "1",
                            "phone": "13789794455",
                            "status": "1"
                        },
                        {
                            "uid": "4",
                            "phoneNum": "18657195470",
                            "nickname": "史蒂夫",
                            "type": "0",
                            "headUrl": "",
                            "passwd": "d2337e370831e755254797c9a2d3139aa9a53bb977ad7ad27e213d30eccade2d",
                            "cashLv": "0",
                            "registerTime": "2017-03-10 11:53:02",
                            "registerStatus": "0",
                            "gender": "0",
                            "lastLoginTime": "2017-04-11 13:50:01",
                            "lastLoginIp": "60.186.229.22",
                            "memberId": "1",
                            "agentId": "1",
                            "recommend": "1",
                            "memberid": "123",
                            "name": "华东",
                            "superMemberid": null,
                            "code": "1",
                            "phone": "13789794455",
                            "status": "0"
                        }
                    ]
                };*/
                console.log("获取客户管理列表 调用成功!");
                if (result.list.length == "0") {
                    table.find("tbody").empty().html("<tr><td colspan='7'>暂无记录</td></tr>");
                    $(".pagination").hide();
                    return false;
                }
                var oTr,
                    checkTd = '<td><input type="checkbox"></td>',
                    controlTd =
                        "<td>" +
                        "<a class='text-blue' href='/clientManage/clientListView/buyLog'> 查看 </a> | " +
                        "<a class='J_showChangeLine text-blue' href='javascript:;'> 额度 </a> | " +
                        "<a class='J_showStopTrade text-blue' href='javascript:;'> 停止交易 </a>" +
                        "</td>";
                $.each(result.list, function (i, v) {
                    var timeTd      = '<td>' + v.registerTime + '</td>';
                    var nameTd      = '<td>' + v.nickname + '</td>';
                    var phoneTd     = '<td>' + v.phone + '</td>';
                    var orgTd       = '<td>' + v.name + '</td>';
                    var statusTd    = '<td>' + config.tradeStatus[v.status] + '</td>';
                    var brokerTd    = '<td>' + config.upLevel[v.upLevel] + '</td>';
                    oTr += '<tr class="fadeIn animated" data-id="'+v.uid+'">' + checkTd + timeTd + nameTd + phoneTd + orgTd + brokerTd + statusTd + controlTd + '</tr>';
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

        }

    };
    page.init();

});
