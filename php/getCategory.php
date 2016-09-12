<?php
$name = $_GET['name'];

function h($str) { return htmlspecialchars($str, ENT_QUOTES, "UTF-8"); }

function search2DB($_name){
  $dsn = 'mysql:dbname=ichimonitto;host=localhost';
  $user = 'mloa';
  $password = 'mloa';

  try{
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $sql = 'SELECT * FROM room WHERE name = :name;';
    $st = $pdo->prepare($sql);
    $st->execute(array(':name'=>h($_name)));

		foreach($st as $data){
			$category = $data['category'];
		}

		$json = array($category);
		header('Content-type: application/json');
		echo json_encode($json);
  }catch (PDOException $e){
    print('Error:'.$e->getMessage());
    die();
  }
}

//ここからスタート
if(isset($name)&&($name!="")){
  search2DB($name);
}else{
  print_r("some little");
}

?>