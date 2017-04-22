define(["jquery","utils","pagination","remodal"], function ($,utils) {
    var addBrokerModal = $('[data-remodal-id=addBrokerModal]').remodal();
    var checkBrokerModal = $('[data-remodal-id=checkBrokerModal]').remodal();
    var body = $("body");
    var page = {
        init: function () {
            this.render();
            this.bindEvents();
        },
        render: function () {
            this.initModal();
        },
        bindEvents: function () {
            this.onSubmit();
            this.onSelectAll();
            // this.onAddBroker();
        },
        initModal: function () {
            $(".J_showAddBroker").on("click", function () {
                console.log(1);
                addBrokerModal.open();
            });
            body.on("click", ".J_showCheckBroker", function () {
                var $this = $(this);
                var oTd = $this.parents('tr').find('td');
                var orgName = oTd.eq(4).text();
                var brokerId = oTd.eq(1).text();
                var brokerName = oTd.eq(2).text();
                var phone = oTd.eq(5).text();
                var oForm = $(".checkBrokerModal .modalForm");
                oForm.find("input[name=orgName]").val(orgName);
                oForm.find("input[name=id]").val(brokerId);
                oForm.find("input[name=name]").val(brokerName);
                oForm.find("input[name=phone]").val(phone);

                checkBrokerModal.open();
            });


            $(document).on('closed', '.remodal', function (e) {
                $(this).find(".modalForm")[0].reset();
            });
        },
        onSelectAll: function () {
            utils.selectAll();
        },
        onSubmit: function () {
            $(".pagination").show().html("").createPage({
                pageCount: 10,
                current: 1,
                backFn: function (p) {
                    console.log(p)
                }
            })
        }

    };
    page.init();

});
