/* 判断是否为非负整数（正整数 + 0）*/
var isInt = function(str){
	if(!str){
		return false;
	}
	var r = /^\d+$/; 
	return r.test(str); 
};
/* 判断是否为0-100的浮点数*/
var is0to100Int = function(str){
	if(isInt(str) && parseInt(str) >= 0 && parseInt(str) <= 100){
		return true;
	}else{
		return false;
	}
};
/* 判断是否为非负浮点数(正浮点数 + 0)*/
var isFloat = function(str){
	if(!str){
		return false;
	}
	var r = /^\d+(\.\d+)?$/; 
	return r.test(str); 
};
/* 判断是否为0-1的浮点数*/
var is0to1Float = function(str){
	if(isFloat(str) && parseFloat(str) >= 0 && parseFloat(str) <= 1){
		return true;
	}else{
		return false;
	}
};
/* 判断是否为0-1.2的浮点数 光伏标杆上网电价，数据范围修改为：0 ~ 1.2*/
var is0to1P2Float = function(str){
	if(isFloat(str) && parseFloat(str) >= 0 && parseFloat(str) <= 1.2){
		return true;
	}else{
		return false;
	}
};
/* 判断是否为0-1.2的浮点数 光伏标杆上网电价，数据范围修改为：0 ~ 1.2*/
var is0to2Float = function(str){
	if(isFloat(str) && parseFloat(str) >= 0 && parseFloat(str) <= 2){
		return true;
	}else{
		return false;
	}
};
/* 判断是否为0-10的浮点数*/
var is0to10Float = function(str){
	if(isFloat(str) && parseFloat(str) >= 0 && parseFloat(str) <= 10){
		return true;
	}else{
		return false;
	}
};
/* 判断是否为0-100的浮点数*/
var is0to100Float = function(str){
	if(isFloat(str) && parseFloat(str) >= 0 && parseFloat(str) <= 100){
		return true;
	}else{
		return false;
	}
};

/*存cookies*/
function setCookie(name){
	var inputArray = $("form input");
	if ( inputArray != null) {
		inputArray.each(function(){
			if (window.localStorage) {
				localStorage.setItem(name + $(this).attr("id"), $(this).val());	
			}else {
			    Cookie.write(name + $(this).attr("id"), $(this).val());	
			}
		});
	}
}
/*读cookies*/
function getCookie(name){
	var inputArray = $("form input");
	if ( inputArray != null) {
		inputArray.each(function(){
			if (window.localStorage) {
				localStorage.getItem(name + $(this).attr("id")) != null ? $(this).val(localStorage.getItem(name + $(this).attr("id"))) : "";	
			}else {
				Cookie.read(name + $(this).attr("id")) != null ? $(this).val(Cookie.read(name + $(this).attr("id"))) : "";	
			}
		});
	}
	var C20 = $("#gsywdForm #C20").val();
	if(C20 && C20 == "全额上网"){
		$("div.type .buttons-row a[href='#tab2']").click();
	}else{
		$("div.type .buttons-row a[href='#tab1']").click();
	}
}

/*显示更多参数*/
var showMoreParams = function(obj) {
	if ($(obj).find('span').hasClass("icon-right")) {
		//目前处于关闭状态
		$(obj).find('span').removeClass("icon-right").addClass("icon-down");
		$(".more-params-area").show();

	} else {
		//目前处于展开状态
		$(obj).find('span').removeClass("icon-down").addClass("icon-right");
		$(".more-params-area").hide();
	}
};

/* 工商业屋顶输入框校验*/
var checkGSYWDInput = function() {
	var city = $("#gsywdForm input#city-picker").val();
	var C19 = $("#gsywdForm #C19").val();
	var F49 = $("#gsywdForm #F49").val();
	var J17 = $("#gsywdForm #J17").val();
	var J23 = $("#gsywdForm #J23").val();
	var J36 = $("#gsywdForm #J36").val();
	var J37 = $("#gsywdForm #J37").val();
	var I40 = $("#gsywdForm #I40").val();
	var F28 = $("#gsywdForm #F28").val();
	var F29 = $("#gsywdForm #F29").val();
	var F30 = $("#gsywdForm #F30").val();
	var J42 = $("#gsywdForm #J42").val();
	var AD4 = $("#gsywdForm #AD4").val();
	$("input#C20").val($("div.type .buttons-row a.active").text());
	var C20 = $("#gsywdForm #C20").val();
	if(!city){
		$.toast('城市不能为空，请先选择城市！');
		return false;
	}else if(!isFloat(C19)){
		$.toast('装机容量不能为空且必须为正数');
		return false;
	}else if(!isInt(F49)){
		$.toast('等效发电利用小时数不能为空且必须为正整数');
		return false;
	}else if(!C20){
		$.toast('请先选择安装类型');
		return false;
	}
	
	if($("div.type .buttons-row a.active").attr("href") == "#tab1"){
		console.info("类型: "+ $("div.type .buttons-row a.active").attr("href"));
		//自发自用、余电上网
		var C51 = $("#gsywdForm #C51").val();
		var C52 = $("#gsywdForm #C52").val();
		var C53 = $("#gsywdForm #C53").val();
		var C54 = $("#gsywdForm #C54").val();
		var C55 = $("#gsywdForm #C55").val();
		var C59 = $("#gsywdForm #C59").val();
		var C60 = $("#gsywdForm #C60").val();
		var C61 = $("#gsywdForm #C61").val();
		var C62 = $("#gsywdForm #C62").val();
		var C65 = $("#gsywdForm #C65").val();
		
		if(!isFloat(C51)){	
			$.toast('用户市电电价不能为空且必须为正数');
			return false;
		}else if(!is0to100Int(C52)){	
			$.toast('折扣比例不能为空且必须为0-100正整数');
			return false;
		}else if(!is0to100Int(C53)){	
			$.toast('消纳比例不能为空且必须为0-100正整数');
			return false;
		}else if(!isFloat(C54)){	
			$.toast('脱硫燃煤电价不能为空且必须为正数');
			return false;
		}else if(!isFloat(C55)){	
			$.toast('国家补贴电价不能为空且必须为正数');
			return false;
		}else if(!isInt(C59)){	
			$.toast('用户电价账期不能为空且必须为正整数');
			return false;
		}else if(!isInt(C60)){	
			$.toast('脱硫燃煤电价账期不能为空且必须为正整数');
			return false;
		}else if(!isInt(C61)){	
			$.toast('首年财政补贴应收账龄不能为空且必须为正整数');
			return false;
		}else if(!isInt(C62)){	
			$.toast('后19年财政补贴应收账龄不能为空且必须为正整数');
			return false;
		}else if(!isInt(C65)){	
			$.toast('省市等财政补贴应收账齡不能为空且必须为正整数');
			return false;
		}
	}else if($("div.type .buttons-row a.active").attr("href") == "#tab2"){
		console.info("类型: "+ $("div.type .buttons-row a.active").attr("href"));
		//全额上网
		var C71 = $("#gsywdForm #C71").val();
		var C72 = $("#gsywdForm #C72").val();
		var C74 = $("#gsywdForm #C74").val();
		var C77 = $("#gsywdForm #C77").val();
		var C78 = $("#gsywdForm #C78").val();
		var C79 = $("#gsywdForm #C79").val();
		var C80 = $("#gsywdForm #C80").val();
		var C81 = $("#gsywdForm #C81").val();
		var C82 = $("#gsywdForm #C82").val();
		if(!isFloat(C71)){	
			$.toast('脱硫燃煤电价不能为空且必须为正数');
			return false;
		}else if(!isFloat(C72)){	
			$.toast('国家补贴电价不能为空且必须为正数');
			return false;
		}else if(!is0to1P2Float(C74)){	
			$.toast('光伏标杆上网电价不能为空且必须为0~1.2之间正数');
			return false;
		}else if(!isInt(C77)){	
			$.toast('脱硫燃煤电价账期不能为空且必须为正整数');
			return false;
		}else if(!isInt(C78)){	
			$.toast('首年财政补贴应收账龄不能为空且必须为正整数');
			return false;
		}else if(!isInt(C79)){	
			$.toast('后19年财政补贴应收账龄不能为空且必须为正整数');
			return false;
		}else if(!isInt(C80)){	
			$.toast('全容上网差额补贴账龄不能为空且必须为正整数');
			return false;
		}else if(!isInt(C81)){	
			$.toast('后19年差额补贴应收账龄不能为空且必须为正整数');
			return false;
		}else if(!isInt(C82)){	
			$.toast('省市等财政补贴应收账齡不能为空且必须为正整数');
			return false;
		}
	}
	
	if(!isFloat(J17)){
		$.toast('开发费用不能为空且必须为正数');
		return false;
	}else if(!isFloat(J23)){
		$.toast('工程建设费用不能为空且必须为正数');
		return false;
	}else if(!isFloat(J36)){
		$.toast('生产准备费不能为空且必须为正数');
		return false;
	}else if(!isFloat(J37)){
		$.toast('建设期利息不能为空且必须为正数');
		return false;
	}else if(!isFloat(I40)){
		$.toast('分年缴纳的屋顶租赁费不能为空且必须为正数');
		return false;
	}else if(!is0to100Float(F28)){
		$.toast('长期贷款借款年利率不能为空且必须为0-100之间正数');
		return false;
	}else if(!isInt(F29)){
		$.toast('长期贷款还款期限不能为空且必须为正整数');
		return false;
	}else if(!is0to100Int(F30)){
		$.toast('长期贷款融资比率不能为空且必须为0-100之间正整数');
		return false;
	}else if(!is0to2Float(J42)){
		$.toast('市级补贴年限不能为空且必须为0-2之间正数');
		return false;
	}else if(!isFloat(AD4)){
		$.toast('建设期额外补贴电价不能为空且必须为正数');
		return false;
	}
	var data = 0;
	for(var i = 1;i<21;i++){
		data = $("#gsywdForm #AD" + (i+4).toString()).val();
		if(!isFloat(data)){
			$.toast('第' + i + '期额外补贴电价不能为空且必须为正数');
			return false;
		}
	}
	$.showPreloader("表单提交中");
	setCookie("GSY_");
	$("#gsywdForm").submit();
};

/* 鑫阳光屋顶输入框校验*/
var checkXYGWDInput = function() {
	
	var city = $("#xygwdForm input#city").val();
	var C3 = $("#xygwdForm input#C3").val();
	var C7 = $("#xygwdForm input#C7").val();
	var C4 = $("#xygwdForm input#C4").val();
	var C5 = $("#xygwdForm input#C5").val();
	var C6 = $("#xygwdForm input#C6").val();
	var C8 = $("#xygwdForm input#C8").val();
	var C9 = $("#xygwdForm input#C9").val();
	var C10 = $("#xygwdForm input#C10").val();
	var C11 = $("#xygwdForm input#C11").val();
	var C12 = $("#xygwdForm input#C12").val();
	var C13 = $("#xygwdForm input#C13").val();
	
	if(!city){
		$.toast('项目地点不能为空！');
		return false;
	}else if(!isFloat(C3)){
		$.toast("容量不能为空且必须为正数");
		return false;
	}else if(!isFloat(C7)){
		$.toast("用户电价不能为空且必须为正数");
		return false;
	}else if(!isFloat(C4)){
		$.toast("单瓦价不能为空且必须为正数");
		return false;
	}else if(!isInt(C5)){
		$.toast("项目利用小时数不能为空且必须为正整数");
		return false;
	}else if(!isFloat(C6)){
		$.toast("脱硫标杆电价不能为空且必须为正数");
		return false;
	}else if(!is0to100Float(C8)){
		$.toast("用户自用电量比例不能为空且必须为0-100正数");
		return false;
	}else if(!isFloat(C9)){
		$.toast("国家补贴电价不能为空且必须为正数");
		return false;
	}else if(!isFloat(C10)){
		$.toast("省级补贴电价不能为空且必须为正数");
		return false;
	}else if(!isInt(C11)){
		$.toast("省级补贴年限不能为空且必须为正整数");
		return false;
	}else if(!isFloat(C12)){
		$.toast("市级补贴电价不能为空且必须为正数");
		return false;
	}else if(!isInt(C13)){
		$.toast("市级补贴年限不能为空且必须为正整数");
		return false;
	}else{
		$.showPreloader("表单提交中");
		setCookie("XYG_");
		$("#xygwdForm").submit();
	}
};

var caclXmjzcb = function(){
	var J17 = $("#gsywdForm #J17").val();
	var J23 = $("#gsywdForm #J23").val();
	var J36 = $("#gsywdForm #J36").val();
	var J37 = $("#gsywdForm #J37").val();
	var num = 0;
	if(!J17 || !J23 || !J36 || !J37){
		$("#gsywdForm #xmjzcb").html("");
	}else{
		if(!isFloat(J17)){
			$.toast('开发费用不能为空且必须为正数');
			return false;
		}else if(!isFloat(J23)){
			$.toast('工程建设费用不能为空且必须为正数');
			return false;
		}else if(!isFloat(J36)){
			$.toast('生产准备费不能为空且必须为正数');
			return false;
		}else if(!isFloat(J37)){
			$.toast('建设期利息不能为空且必须为正数');
			return false;
		}else{
			num += parseFloat(J17);
			num += parseFloat(J23);
			num += parseFloat(J36);
			num += parseFloat(J37);
			$("#gsywdForm #xmjzcb").html(num.toFixed(3));
		}
	}
};
