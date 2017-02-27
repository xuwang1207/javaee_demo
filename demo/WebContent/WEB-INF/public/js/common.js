//判断字段是否为空
function check_login(){
	var username = $("#username").val();
	var password = $("#password").val();
	console.info(username + password);
	if(!username){
		$(".error_tips").html("* 用户名不能为空");
		return false;
	}else if(!password){
		$(".error_tips").html("* 密码不能为空");
		return false;
	}else{
		return true;
	}
};

$(function(){
	
});

function clearNoNum(obj)
{
    //先把非数字的都替换掉，除了数字和.
    obj.value = obj.value.replace(/[^\d.]/g,"");
    //必须保证第一个为数字而不是.
    obj.value = obj.value.replace(/^\./g,"");
    //保证只有出现一个.而没有多个.
    obj.value = obj.value.replace(/\.{2,}/g,".");
    //保证.只出现一次，而不能出现两次以上
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
}