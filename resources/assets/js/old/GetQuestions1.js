var question = [];
var answer = [];
var category;
var obj;

var $roomUrl = location.href.split("/");
var $roomn = $roomUrl[$roomUrl.length -2];

function getCategory(){
	$.ajax({
		url: '../php/getCategory.php',
		type: 'GET',
		dataType: 'json',
		data: {name: $roomn}
	})
	.done(function(data) {
		category = data[0];
		getQuestions();
	})
	.fail(function() {
		console.log("error1");
	})
	.always(function() {
	});
}


function getQuestions(){
	$.ajax({
		url: '../php/getQuestions.php',
		type: 'GET',
		dataType: 'json',
		data: {cate: category},
	})
	.done(function(data) {
		for(var i=0; i<data.length; i++){
			question.push(data[i].question);
			answer.push(data[i].answer);
		}
		obj = data;
	})
	.fail(function() {
		console.log("error2");
	})
	.always(function() {
	});
}