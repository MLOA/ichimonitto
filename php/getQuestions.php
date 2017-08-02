<?php
$cate = $_GET['cate'];

function h($str) { return htmlspecialchars($str, ENT_QUOTES, "UTF-8"); }

//サーチするやつ
function search2DB($_cate){
  $dsn = 'mysql:dbname=mloa_ichimonitto;host=localhost';
  $user = 'mloa';
  $password = 'mloa';

  try{
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $sql = 'SELECT * FROM questions WHERE category = :cate;';
    $st = $pdo->prepare($sql);
    $st->execute(array(':cate'=>h($_cate)));
		$result = $st->fetchAll();

		header('Content-type: application/json');

		echo json_encode($result);
  }catch (PDOException $e){
    print('Error:'.$e->getMessage());
    die();
  }
}

//ここからスタート
if(isset($cate)&&($cate!="")){
  search2DB($cate);
}else{
  print_r("some little");
}


?>