var count = 10;//1問の解答時間
var qnum = 0;
var point=0;
//var question = ["こんにちは","眠い","お腹減った"];//問題

function question_view(){
	var canvas = document.getElementById("Qcanvas");

	//canvas.width = canvas.width*2;
		var context = canvas.getContext("2d");
		context.textAlign = "center";//文字の中央寄せ
		context.font = "20px 'ＭＳ ゴシック'";
		context.fillStyle = "rgb(255,255,255)";
		context.fillRect(0,0,canvas.width,canvas.height);
		context.fillStyle = "rgb(0,0,0)";
		context.fillText(question[qnum],canvas.width/2,canvas.height/2);
		context.fillStyle = "rgb("+(255-count*25)+",0,0)";
		context.fillText(count,canvas.width*5/6,canvas.height/6);
	//	console.log(question[qnum]);
	//console.log(question);

	//count--
	if(count==0){
		//最後の問題だったら問題終了
		if(qnum == question.length - 1){
			context.fillStyle = "rgb(255,255,255)";
			context.fillRect(0, 0, canvas.width, canvas.height);
			context.fillStyle = "rgb(0,0,0)";
			context.fillText("finish!!", canvas.width/2, canvas.height/2);
			alert("あなたの正解数は"+ point +"問です！");
		} else {
			qnum++;
			count = 10;
			setTimeout("question_view()",1000);
		}
	} else {
		setTimeout("question_view()",1000);
	}
	count--;
}
question_view();