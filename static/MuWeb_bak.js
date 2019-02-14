var $ByID = function(el) {
    return (typeof el == 'object') ? el : (document.getElementById) ? document.getElementById(el) : document.all(el);
};

var $ByName = function(el) {
    return (typeof el == 'object') ? el : (document.all) ? document.getElementsByName(el) : document.all.tags(el);
};

//输入控制是否是纯数字0-9
function InputNumber(e) {
    keyCode = window.event ? e.keyCode : e.which;
    if (keyCode < 48 || keyCode > 57) {
        return false;
    }
}
document.oncontextmenu = function() { return false;}
document.ondragstart= function() { return false;}
document.onselectstart=function() { return false;}
document.onselect=function() { document.selection.empty()}
document.oncopy=function() { document.selection.empty()}
document.onbeforecopy = function() { return false;}

//换验证码
function RefreshCheckCode(obj) {
    $ByID(obj).src = "/captcha?id=" + Math.random();
}
function checkAccount(username,id)
{
    var re, r;
    re = /\S/;
    r = username.match(re);
    if (!r)
    {
        alert("请输入用户帐号！");
        return false;
    }
    if (id==0)
    {
        alert("请选择游戏分区！");
        return false;
    }
    else
    {
        window.open("check_Id_gn.asp?action=check&value="+username+"&id="+ id +"","")
    }
}
function IsUserName(val) {
    return (/^[A-Za-z0-9_]{4,10}$/.test(val));
}
function IsPassWord(val) {
    return (/(.|\s){4,10}/.test(val));
}
function IsEMail (val) {
    return /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(val);
}

function checkReg() {
    if ($ByID("ServerCode").value == 0) {
        alert("请选择游戏分区！");
        $ByID("Servercode").focus();
        return false;
    }
    if (!/^[a-z0-9_]{4,10}$/.test($ByID("UserName").value)) {
        alert("您的帐号不符合规则,帐号必须是4-10位小写字母或数字！");
        $ByID("UserName").focus();
        return false;
    }
    if (!IsPassWord($ByID("oldpass").value)) {
        alert("错误的密码,密码必须是4-10位的任意字符！");
        $ByID("oldpass").focus();
        return false;
    }
    if ($ByID("oldpass").value != $ByID("moldpass").value) {
        alert("两次输入的密码不一致！");
        $ByID("moldpass").focus();
        return false;
    }
    if ($ByID("quest").value == "") {
        alert("请选择密码提示问题！");
        $ByID("quest").focus();
        return false;
    }
    if ($ByID("ans").value.length < 4 || $ByID("ans").value.length > 20) {
        alert("请输入4-20位的密保答案！");
        $ByID("ans").focus();
        return false;
    }
    if ($ByID("num").value.length < 6 || $ByID("num").value.length > 18) {
        alert("请输入6-18位数字的证件号码！")
        $ByID("num").focus();
        return false;
    }
    //if ($ByID("name").value == "") {
    //alert("请输入真实姓名！");
    //$ByID("name").focus();
    //return false;
    //}
    if (!IsEMail($ByID("email").value)) {
        alert("请输入正确的Email地址！");
        $ByID("email").focus();
        return false;
    }
    if ($ByID("CheckCode").value == "") {
        alert("请输入验证码！")
        $ByID("CheckCode").focus();
        return false;
    }
    return true;
}

function checkGetPass() {
    if ($ByID("ServerCode").value == 0) {
        alert("请选择游戏分区！");
        $ByID("Servercode").focus();
        return false;
    }
    if (!IsUserName($ByID("UserName").value)) {
        alert("您的帐号不符合规则,帐号必须是4-10位字母或数字！");
        $ByID("UserName").focus();
        return false;
    }
    if ($ByID("CheckCode").value == "") {
        alert("请输入验证码！")
        $ByID("CheckCode").focus();
        return false;
    }
    return true;
}

function checkGetPass2() {
    if ($ByID("ans").value.length < 4 || $ByID("ans").value.length > 20) {
        alert("请输入4-20位的密保答案！");
        $ByID("ans").focus();
        return false;
    }
    if ($ByID("num").value.length < 6 || $ByID("num").value.length > 18) {
        alert("请输入6-18位数字的证件号码！")
        $ByID("num").focus();
        return false;
    }
    if (!IsPassWord($ByID("pass").value)) {
        alert("错误的新密码,新密码必须是4-10位的任意字符！");
        $ByID("pass").focus();
        return false;
    }
    if ($ByID("pass").value != $ByID("pass2").value) {
        alert("两次输入的密码不一致！");
        $ByID("pass2").focus();
        return false;
    }
    if ($ByID("CheckCode").value == "") {
        alert("请输入验证码！")
        $ByID("CheckCode").focus();
        return false;
    }
    return true;
}

function checkGetPassMail() {
    if ($ByID("ans").value.length < 4 || $ByID("ans").value.length > 20) {
        alert("请输入4-20位的密保答案！");
        $ByID("ans").focus();
        return false;
    }
    if ($ByID("num").value.length < 6 || $ByID("num").value.length > 18) {
        alert("请输入6-18位数字的证件号码！")
        $ByID("num").focus();
        return false;
    }
    if ($ByID("CheckCode").value == "") {
        alert("请输入验证码！")
        $ByID("CheckCode").focus();
        return false;
    }
    return true;
}

function checkLogin() {
    if ($ByID("leftServerCode").value == 0) {
        alert("请选择游戏分区！");
        $ByID("leftServerCode").focus();
        return false;
    }
    if (!IsUserName($ByID("leftUserName").value)) {
        alert("您的帐号不符合规则,帐号必须是4-10位字母或数字！");
        $ByID("leftUserName").focus();
        return false;
    }
    if (!IsPassWord($ByID("leftPassWord").value)) {
        alert("错误的密码,密码必须是4-10位的任意字符！");
        $ByID("leftPassWord").focus();
        return false;
    }
    return true;
}

function checkPwd() {
    if ($ByID("ServerCode").value == 0) {
        alert("请选择游戏分区！");
        $ByID("Servercode").focus();
        return false;
    }
    if (!IsUserName($ByID("UserName").value)) {
        alert("您的帐号不符合规则,帐号必须是4-10位字母或数字！");
        $ByID("UserName").focus();
        return false;
    }
    if (!IsPassWord($ByID("oldpass").value)) {
        alert("错误的旧密码,密码必须是4-10位的任意字符！");
        $ByID("oldpass").focus();
        return false;
    }
    if (!IsPassWord($ByID("pass").value)) {
        alert("错误的新密码,新密码必须是4-10位的任意字符！");
        $ByID("pass").focus();
        return false;
    }
    if ($ByID("pass").value != $ByID("pass2").value) {
        alert("两次输入的密码不一致！");
        $ByID("pass2").focus();
        return false;
    }
    if ($ByID("pass").value == $ByID("oldpass").value) {
        alert("请不要将原密码与新密码设置一样！");
        $ByID("pass").focus();
        return false;
    }
    if ($ByID("CheckCode").value == "") {
        alert("请输入验证码！")
        $ByID("CheckCode").focus();
        return false;
    }
    return true;
}

function checkHQ() {
    if ($ByID("ServerCode").value == 0) {
        alert("请先进行合区选择！");
        $ByID("Servercode").focus();
        return false;
    }
    return true;
}

function checkHQ2() {
    if (!IsUserName($ByID("UserName").value)) {
        alert("您的帐号不符合规则,帐号必须是4-10位字母或数字！");
        $ByID("UserName").focus();
        return false;
    }
    if (!IsPassWord($ByID("PassWord").value)) {
        alert("错误的新密码,新密码必须是4-10位的任意字符！");
        $ByID("PassWord").focus();
        return false;
    }
    if ($ByID("PassWord").value != $ByID("RePassWord").value) {
        alert("两次输入的密码不一致！");
        $ByID("RePassWord").focus();
        return false;
    }
}

function checkZQ(jf) {
    if ($ByID("ServerCode").value == 0) {
        alert("请选择分区！");
        $ByID("Servercode").focus();
        return false;
    }
    if ($ByID("jf").value < jf) {
        alert("转出积分低于最低要求！");
        $ByID("jf").focus();
        return false;
    }
    if (!IsUserName($ByID("touser").value)) {
        alert("您的帐号不符合规则,帐号必须是4-10位字母或数字！");
        $ByID("touser").focus();
        return false;
    }
    if (!IsPassWord($ByID("touserpwd").value)) {
        alert("错误的密码,密码必须是4-10位的任意字符！");
        $ByID("touserpwd").focus();
        return false;
    }
}

function checkJY(jf) {
    if ($ByID("jf").value < jf) {
        alert("交易积分低于最低要求！");
        $ByID("jf").focus();
        return false;
    }
    if (!IsUserName($ByID("touser").value)) {
        alert("您的帐号不符合规则,帐号必须是4-10位字母或数字！");
        $ByID("touser").focus();
        return false;
    }
    if ($ByID("touser").value != $ByID("touser2").value) {
        alert("两次输入的帐号不一致！");
        $ByID("touser2").focus();
        return false;
    }
}

function checkGM() {
    if ($ByID("NewName").value == "") {
        alert("请输入新角色名！");
        $ByID("NewName").focus();
        return false;
    }
}

var strength,dexterity,vitality,energy,Leadership,LevelUpPoint;
function setJD(strength1,dexterity1,vitality1,energy1,Leadership1,LevelUpPoint1) {
    strength=strength1;
    dexterity=dexterity1;
    vitality=vitality1;
    energy=energy1;
    Leadership=Leadership1;
    LevelUpPoint=LevelUpPoint1;
}

function showJD() {
    s = $ByID("strength1").value - strength;
    d = $ByID("dexterity1").value - dexterity;
    v = $ByID("vitality1").value - vitality;
    e = $ByID("energy1").value - energy;
    l = 0;
    if ($ByID("Leadership1")) {
        l = $ByID("Leadership1").value - Leadership;
    }
    has = LevelUpPoint - (s+d+v+e+l);
    if (has < 0) {
        alert("点数不够！");
        return false;
    }
    $ByID("myPoint").innerHTML = has;
}
function checkJD() {
    if ($ByID("strength1").value < strength) {
        alert("力量属性不能比加点前少！");
        $ByID("strength1").focus();
        return false;
    }
    if ($ByID("dexterity1").value < dexterity) {
        alert("敏捷属性不能比加点前少！");
        $ByID("dexterity1").focus();
        return false;
    }
    if ($ByID("vitality1").value < vitality) {
        alert("体力属性不能比加点前少！");
        $ByID("vitality1").focus();
        return false;
    }
    if ($ByID("energy1").value < energy) {
        alert("智力属性不能比加点前少！");
        $ByID("energy1").focus();
        return false;
    }
    if ($ByID("Leadership1") && $ByID("Leadership1").value < Leadership) {
        alert("统率属性不能比加点前少！");
        $ByID("Leadership1").focus();
        return false;
    }
    s = $ByID("strength1").value - strength;
    d = $ByID("dexterity1").value - dexterity;
    v = $ByID("vitality1").value - vitality;
    e = $ByID("energy1").value - energy;
    l = 0;
    if ($ByID("Leadership1")) {
        l = $ByID("Leadership1").value - Leadership;
    }
    has = LevelUpPoint - (s+d+v+e+l);
    if (has < 0) {
        alert("点数不够！");
        return false;
    }
}

function checkCKMM() {
    if ($ByID("ans").value.length < 4 || $ByID("ans").value.length > 20) {
        alert("请输入4-20位的密保答案！");
        $ByID("ans").focus();
        return false;
    }
}

function checkGMDJ() {
    if ($ByID("level").value == "") {
        alert("请输入购买等级数！");
        $ByID("level").focus();
        return false;
    }
}

function checkWGJB() {
    if ($ByID("Name").value == "") {
        alert("请输入用外挂的角色名！");
        $ByID("Name").focus();
        return false;
    }
}