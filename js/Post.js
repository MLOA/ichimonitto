$('#go').click(function(){
	var hostUrl = 'http://mloa.net/ichimonitto/php/mkroom.php';
	var Url = 'http://mloa.net/ichimonitto/';
	var param1 = "make";
	var param2 = $("#rname").val();
	var param3 = $("select[name='category']").val();
	var linkUrl = Url + param2;
	$.ajax({
		url: hostUrl,
		type: 'GET',
		dataType: 'text',
		data: {ctr : param1, room : param2, cate : param3},
		success: function(data){
			if(data){
				window.location = linkUrl;
			} else {
				alert("NO!");
			}
		},
		error: function(){
			alert("fuck you");
		}
	});
});

$('#join-button').click(function(){
	var joinUrl = 'http://mloa.net/ichimonitto/';
	var param11 = $("#jname").val();
	var param21 = $("#jpass").val();
	if(param21 == ""){
		param21 = null;
	}
	var goUrl = joinUrl + param11;
	$.ajax({
		url: 'http://mloa.net/ichimonitto/php/check.php',
		type: 'GET',
		datatype: 'json',
		data: {room : param11, pass : param21},
		success: function(data){
			if(data == "error!"){
				alert("存在しないルーム名か、パスワードが間違っています");
			}else if(data == "somelittle"){
				alert("ルーム名を入力してください");
			}else if(data[0] > 0){
				window.location = goUrl;
			}
		}
	});
});