var mute     = [1, 0, 0, 0, 0, 0], inMember = [1, 0, 0, 0, 0, 0]; //member login/out
var localStream;
var existingCall;
var list_all = [];
var peer = new Peer({ key: '0b7dbae0-9304-4f98-b857-1d430b9fdac1', debug: 0});
var myid;
var connection = [];	// speech js

var tempID;
var tempNum;

$(function(){								// 最後に呼び出される
	//サーバへの接続が確立したときの処理
	peer.on('open', function(id){
		myid = id;
		$('#my-id').text(id);
		list_all = getMembersId(id);
	});

  //誰かと接続が切れたときの処理
	peer.on("error", function(err){
		kick(tempID);
	});


	showMyVideo();
	peer.on('call', function(call){
		receive(call);
	});

	peer.on('connection', function(conn) {	// text receive connection

		connection.push(conn);

		conn.on('data', function(data){

			for (var i=1; i<6; i++){
				if (inMember[i] == conn.peer) $('#P' + i + '-comment').text(data);		// set text speech data

				//console.log("id: " + inMember[i] + " conn.peer" + conn.peer);
			}
		});
		console.log("connected");
	});


	$('#make-call').click(callbtn);
	$('#end-call').click(close);

	$('#P1-video').click( switchMute(1) );
	$('#P2-video').click( switchMute(2) );
	$('#P3-video').click( switchMute(3) );
	$('#P4-video').click( switchMute(4) );
	$('#P5-video').click( switchMute(5) );

	//recognition.start();	// from speech.js

	$(window).on("beforeunload",function(e){
    return "本当に離れますか？";
  });

	console.log('$.started');
	getCategory();

});