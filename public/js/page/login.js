define(["jquery","sysAPI","layer"], function ($,sysAPI) {
    var page = {
        init: function () {
            this.render();
            this.bindEvents();
        },
        render: function () {

        },
        bindEvents: function () {
            this.onLogin();
        },

        onLogin: function () {
            var error = $(".error-tips");
            $(".submit").on("click",function(){
                var data = {
                    account: $("#username").val().trim(),
                    pass: $("#password").val()
                };
                if(data.account === ""){
                    error.text("用户名/手机号不能为空");
                    return;
                }else if(data.pass === ""){
                    error.text("密码不能为空");
                    return;
                }else if(data.account.length < 6 || data.account.length >15 || !data.account.match(/^[A-Za-z0-9]+$/)){
                    error.text("用户名/手机号为长度6-15位数字或字母");
                    return;
                }else if(data.pass.length < 6 || data.pass.length >15 || !data.pass.match(/^[A-Za-z0-9]+$/)){
                    error.text("密码为长度6-15位数字或字母");
                    return;
                }else{
                    error.text("");
                }

                layer.msg("登录成功");
                setTimeout(function () {
                    window.location.href="/accountManage/orgManage";
                },2000);
                sysAPI.login(data,function (result) {
                    if(result.code === 0){
                        layer.alert("登录成功");
                        setTimeout(function () {
                            window.location.href="/accountManage/orgManage";
                        },2000);
                    }else{
                        layer.alert(result.data);
                    }
                })

            });
        }

    };
    page.init();

});
