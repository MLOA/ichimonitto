<?php

 $room=(string)$_GET['room'];
 $pass=(string)$_GET['pass'];

function h($str) { return htmlspecialchars($str, ENT_QUOTES, "UTF-8"); }

function search2DB($_name,$_pass){
  $dsn = 'mysql:dbname=mloa_ichimonitto;host=localhost';
  $user = 'mloa';
  $password = 'mloa';

  try{
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
		//print_r("conected");

    $sql = 'SELECT * FROM room WHERE (name = :name AND password = :pass)';
    $st = $pdo->prepare($sql);
    $st->execute(array(':name'=>h($_name),':pass'=>h($_pass)));

		$result = $st->fetchAll();
		if($result!=null){
			//print_r ($result[0]);
			//echo $result[0]['name'];

			$json = array($result[0][0],$result[0][1],$result[0][2],$result[0][3],$result[0][4],$result[0][5],$result[0][6],$result[0][7],$result[0][8]);
		  header('Content-type: application/json');
		  echo json_encode($json);
		}else{
			echo "error!";
		}

		//print_r("sucess!");
  }catch (PDOException $e){
    print('Error:'.$e->getMessage());
    die();
  }
}

function search2DB_2($_name){
  $dsn = 'mysql:dbname=mloa_ichimonitto;host=localhost';
  $user = 'mloa';
  $password = 'mloa';

  try{
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
		//print_r("conected");

    $sql = 'SELECT * FROM room WHERE (name = :name AND password = "")';
    $st = $pdo->prepare($sql);
    $st->execute(array(':name'=>h($_name)));

		$result = $st->fetchAll();
		if($result!=null){
			//print_r ($result[0]);
			//echo $result[0]['name'];

			$json = array($result[0][0],$result[0][1],$result[0][2],$result[0][3],$result[0][4],$result[0][5],$result[0][6],$result[0][7],$result[0][8]);
		  header('Content-type: application/json');
		  echo json_encode($json);
		}else{
			echo "error!";
		}

		//print_r("sucess!");
  }catch (PDOException $e){
    print('Error:'.$e->getMessage());
    die();
  }
}


//ここからスタート
if(isset($room)&&($room!="")&&isset($pass)&&($pass!="")){
  search2DB($room,$pass);
}elseif(isset($room)&&($room!="")&&($pass==null)){
	search2DB_2($room);
}else{
  print_r("some little");
}


?>
