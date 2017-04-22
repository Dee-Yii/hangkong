define(["jquery","utils","pagination","remodal"], function ($,utils) {
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
        },
        bindEvents: function () {
            this.onSubmit();
            this.onSelectAll();
            // this.onAddUser();
        },
        initModal: function () {
            $(".J_showAddUser").on("click", function () {
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
