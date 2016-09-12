<?php
$category = $_GET['category'];

function h($str) { return htmlspecialchars($str, ENT_QUOTES, "UTF-8"); }

//サーチするやつ
function search2DB($_category){
  $dsn = 'mysql:dbname=ichimonitto;host=localhost';
  $user = 'mloa';
  $password = 'mloa';

  try{
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $sql = 'SELECT COUNT(*) FROM questions WHERE category = :category;';
    $st = $pdo->prepare($sql);
    $st->execute(array(':category'=>h($_category)));

		foreach($st as $data){
			$count = $data[0];
		}

		$sql = 'SELECT * FROM questions WHERE category = :category;';
    $st = $pdo->prepare($sql);
    $st->execute(array(':category'=>h($_category)));

		$id = array();
		foreach($st as $data){
			array_push($id,$data['id']);
		}
//		print_r($id);
		echo(count($id));

/*
		$url = 'http://mloa.net/ichimonitto/getQuestions.php?id=';

		for($i=0;$i<10;$i++){
			$requestID = mt_rand(1,$count);

			$contents = file_get_contents($url."$requestID");
			echo($contents);
		}
*/


  }catch (PDOException $e){
    print('Error:'.$e->getMessage());
    die();
  }
}

//ここからスタート
if(isset($category)&&($category!="")){
  search2DB($category);
}else{
  print_r("some little");
}


?>