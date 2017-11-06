var recognition = new webkitSpeechRecognition();

recognition.lang = "en-US";
//中間結果の表示オン
recognition.interimResults = true;
//連続認識オン
recognition.continuous = true;

recognition.onresult = function(event){
    var results = event.results;

    for (var i = event.resultIndex; i<results.length; i++){
        //認識の最終結果
        if(results[i].isFinal){
					$("#P0-comment").text(results[i][0].transcript);

					if(results[i][0].transcript  == answer[qnum]){
//						$("#state").text("正解！！");
//						console.log("正解！！");
//						point++;
					}

					sendText2All(results[i][0].transcript);
        }
        //認識の中間結果
        else{
          $("#P0-comment").text(results[i][0].transcript);

					console.log("answer is " + answer[qnum] + " your answer is " + results[i][0].transcript);
					if(results[i][0].transcript == answer[0]){
						point++;
						$("#state").text("正解！！");
						console.log("正解！！");
					}

					sendText2All(results[i][0].transcript);
        }
    }
};

function sendText2All(text){		// send speech text to all user
	for(var i=0; i<connection.length; i++){
		//console.log(connection[i].peer);
		connection[i].send(text);
	}
}