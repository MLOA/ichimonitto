navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

 // 発信を受けたときの処理
function receive(call) {

	call.answer(localStream); // 自分のストリームを渡す

	call.on('close', function(err) {  //切断された時の処理 id -> 0
		for (var i = 1; i <= 5; i++) {
			if (inMember[i] == call.peer) {
				console.log("func rec call close " + call.peer);

				kick(call.peer);

				$('#P' + i + '-video').prop('src', "");	// banish black screen
				//console.log( $('#P' + i + '-video').prop('src') );
				inMember[i] = 0;  //insert id
				break;
			}
		}
	});

	for (var i = 1; i <= 5; i++) {    // 0 -> insert id
		if (inMember[i] == 0) {
			showPeerVideo(call, i);     // リモートのビデオを表示
			inMember[i] = call.peer;    //insert id
			break;
		}
	}
	console.log("func receive " + inMember);
	

	// text send

	var conn = peer.connect(call.peer);

	connection.push(conn);

	conn.on('open', function(){
		conn.send("orude from : " + myid);
	});

	conn.on('data', function(data){

		for (var i=1; i<=5; i++){
			if (inMember[i] == conn.peer) $('#P' + i + '-comment').text(data);		// set text speech data
		}
	});

	conn.on('close', function(){

		for (var i=0; i<connection.length; i++){	//delete conn from connect[]
			if (conn == connection[i])	connection.splice(i, 1);	// delete 1 object from number i
		}
	});

}


// 自分から切断したとき、全部のプレイヤーを0に
function close(){
	for (var i = 1; i <= 5; i++) {
		inMember[i] = 0;  //insert id
	}
	existingCall.close();
}

function callbtn(){
	var callee_id = $('#callee-id').val();

	var already = 0;

	for (var i = 1; i<=5; i++){
		if (inMember[i] == callee_id) already++;  // もしすでに接続されていれば、already++
	}

	if (already == 0){                        			// 新規の接続相手と判明後、接続する
		var call = peer.call(callee_id, localStream);	//相手に自分のストリームを渡す

		for (var i = 1; i <= 5; i++) { // 0のプレイヤーに相手を追加していく
			if (inMember[i] == call.peer) break;  // もしすでに接続されていれば、追加しない

			if (inMember[i] == 0) {
				showPeerVideo(call, i);  // リモートのビデオを表示
				inMember[i] = call.peer;
				break;
			}
		}
	} else {
		console.log('already connected id !');
	}
}


function startConnect (list) {
	console.log(list);
	


	for (var j=0; j<list.length; j++){
		if(list[j] == myid || list[j] == null || list[j] == ""){
			continue;
		}

		tempID = list[j];
		tempNum = j;


		var call = peer.call(list[j] , localStream);　//相手に自分のストリームを渡す

		call.on('close', function(){

			for (var i = 1; i <= 5; i++) {
				if(inMember[i] == tempID){
					$('#P' + i + '-video').prop('src', "");
				}
			}

			kick(tempID);
		});


		for (var i = 1; i <= 5; i++) { // 0のプレイヤー(空きスペース)に相手を追加

			if (inMember[i] == 0) {
				showPeerVideo(call, i);  // リモートのビデオを表示
				inMember[i] = list[j];
				break;
			}
		}

	}
}

function switchMute (i) {
	$('#P' + i + '-video').click(function(){
		mute[i] = 1 - mute[i];
		if (mute[i]==0){
			$('#P' + i + '-video').prop('muted', false);
			console.log( i + " is On");
		} else {
			$('#P' + i + '-video').prop('muted', true);
			console.log( i + " is Mute");
		}
	})
}


function showMyVideo () {
	// 音声・ビデオストリームを取得
	navigator.getUserMedia({audio: true, video: true}, function(stream){

		// コールバックにストリームが渡されるので、オブジェクトURLを生成し、videoタグのsrcにセットする
		$('#P0-video').prop('src', URL.createObjectURL(stream));
		localStream = stream;

		startConnect(list_all);

	}, function(){ alert("Error!"); });
}

function showPeerVideo (call, playerNum) {

	if (call != null){
		call.on('stream', function(stream){ // 相手のストリームが渡されたときの処理
			console.log("show Peer " + playerNum);

			// 映像ストリームオブジェクト stream をURL.createObjectURL を用い
			// URLに変換した後、video 要素の src 属性に指定することで、映像が表示される
			$('#P' + playerNum + '-video').prop('src', URL.createObjectURL(stream));

		});

		existingCall = call;
		$('#peer-id').text(call.peer);

	} else {
		console.log("call is undifined");
	}
}

function getMembersId(id){
	var hostUrl = 'http://mloa.net/ichimonitto/php/connect.php';
	var $roomUrl = location.href.split("/");
	var $roomn = $roomUrl[$roomUrl.length -2];
	var lines;
	$.ajax({
		url: hostUrl,
		type: 'GET',
		dataType: 'json',
		data: {room : $roomn, id : id},
		success: function(data){
			if(data){
				list_all = data;
			}
		},
		error: function(){
			alert("error");
		}
	});
}