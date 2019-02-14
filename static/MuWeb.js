function IsUserName(val) {
    return (/^[A-Za-z0-9_]{4,10}$/.test(val));
}

function IsPassWord(val) {
    return (/(.|\s){4,10}/.test(val));
}

function IsEMail(val) {
    return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(val);
}

//换验证码
function RefreshCheckCode(obj) {
    $("#" + obj).attr("src", "/captcha?id=" + Math.random());
}

function checkReg() {
    if ($("#ServerCode").val() == "") {
        alert("请选择游戏分区！");
        $("#ServerCode").focus();
        return false;
    }
    if (!/^[a-z0-9_]{4,10}$/.test($("#UserName").val())) {
        alert("您的帐号不符合规则,帐号必须是4-10位小写字母或数字！");
        $("#UserName").focus();
        return false;
    }
    if (!IsPassWord($("#oldpass").value)) {
        alert("错误的密码,密码必须是4-10位的任意字符！");
        $("#oldpass").focus();
        return false;
    }
    if ($("#oldpass").val() != $("#moldpass").val()) {
        alert("两次输入的密码不一致！");
        $("#moldpass").focus();
        return false;
    }
    if ($("#quest").val() == "") {
        alert("请选择密码提示问题！");
        $ByID("quest").focus();
        return false;
    }
    if ($("#ans").val().length < 4 || $("#ans").val().length > 20) {
        alert("请输入4-20位的密保答案！");
        $("#ans").focus();
        return false;
    }
    if ($("#num").val().length < 6 || $("#num").val().length > 18) {
        alert("请输入6-18位数字的证件号码！")
        $("#num").focus();
        return false;
    }

    if (!IsEMail($("#email").val())) {
        alert("请输入正确的Email地址！");
        $("#email").focus();
        return false;
    }
    if ($("#CheckCode").val() == "") {
        alert("请输入验证码！")
        $("#CheckCode").focus();
        return false;
    }

    $.ajax({
        type: 'post',
        cache: false,
        url: "/regsave",
        dataType: "json",
        data: $("#regForm").serializeArray(),
        error: function () {
            alert("注册失败")
        },
        success: function (res) {
            if (res.Result != 0) {
                alert(res.Message);
            } else {
                alert("注册成功")
                window.location.href = "/login"
            }
        }
    })
    return false;
}

function checkLogin() {
    if (!IsUserName($("#account").val())) {
        alert("您的帐号不符合规则,帐号必须是4-10位字母或数字！");
        $("#account").focus();
        return false;
    }
    if (!IsPassWord($("#password").val())) {
        alert("错误的密码,密码必须是4-10位的任意字符！");
        $("#password").focus();
        return false;
    }
    return true;
}

function checkGetPass() {
    if ($("#ServerCode").val() == "") {
        alert("请选择游戏分区！");
        $("#ServerCode").focus();
        return false;
    }
    if (!/^[a-z0-9_]{4,10}$/.test($("#account").val())) {
        alert("您的帐号不符合规则,帐号必须是4-10位小写字母或数字！");
        $("#UserName").focus();
        return false;
    }
    if ($("#quest").val() == "") {
        alert("请选择密码提示问题！");
        $ByID("quest").focus();
        return false;
    }
    if ($("#ans").val().length < 4 || $("#ans").val().length > 20) {
        alert("请输入4-20位的密保答案！");
        $("#ans").focus();
        return false;
    }
    if (!IsPassWord($("#oldpass").value)) {
        alert("错误的密码,密码必须是4-10位的任意字符！");
        $("#oldpass").focus();
        return false;
    }
    if ($("#oldpass").val() != $("#moldpass").val()) {
        alert("两次输入的密码不一致！");
        $("#moldpass").focus();
        return false;
    }

    if (!IsEMail($("#email").val())) {
        alert("请输入正确的Email地址！");
        $("#email").focus();
        return false;
    }
    if ($("#CheckCode").val() == "") {
        alert("请输入验证码！")
        $("#CheckCode").focus();
        return false;
    }
    return true
}

function checkPwd() {
    if ($("#ServerCode").val() == "") {
        alert("请选择游戏分区！");
        $("#ServerCode").focus();
        return false;
    }
    if (!IsUserName($("#account").val())) {
        alert("您的帐号不符合规则,帐号必须是4-10位字母或数字！");
        $("#account").focus();
        return false;
    }
    if (!IsPassWord($("#oldpass").val())) {
        alert("错误的旧密码,密码必须是4-10位的任意字符！");
        $("#oldpass").focus();
        return false;
    }
    if (!IsPassWord($("#pass").val())) {
        alert("错误的新密码,新密码必须是4-10位的任意字符！");
        $("#pass").focus();
        return false;
    }
    if ($("#pass").val() != $("#pass2").val()) {
        alert("两次输入的密码不一致！");
        $("#pass2").focus();
        return false;
    }
    if ($("#pass").val() == $("#oldpass").val()) {
        alert("请不要将原密码与新密码设置一样！");
        $("#pass").focus();
        return false;
    }
    if ($("#CheckCode").val() == "") {
        alert("请输入验证码！")
        $("#CheckCode").focus();
        return false;
    }
    return true;
}