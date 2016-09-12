function kick(id){
	var hostUrl = 'http://mloa.net/ichimonitto/php/kickUser.php';
	var $roomUrl = location.href.split("/");
	var $roomn = $roomUrl[$roomUrl.length -2];
	$.ajax({
		url: hostUrl,
		type: 'GET',
		dataType: 'json',
		data: {room : $roomn, id : id},
		success:{}
	});
}