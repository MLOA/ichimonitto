<?php

 $ctr=$_GET['ctr'];
 $room=(string)$_GET['room'];
 $cate=(string)$_GET['cate'];

function h($str) { return htmlspecialchars($str, ENT_QUOTES, "UTF-8"); }

function add2DB($_name, $_cate){
  $dsn = 'mysql:dbname=mloa_ichimonitto;host=localhost';
  $user = 'mloa';
  $password = 'mloa';

  try{
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
		print_r("conected");

    $sql = 'INSERT INTO room (name, category) VALUES (:name, :category);';
    $st = $pdo->prepare($sql);
    $st->execute(array(':name'=>h($_name), ':category'=>h($_cate)));

		mkroom($_name);

		print_r("sucess!");
  }catch (PDOException $e){
    print('Error:'.$e->getMessage());
    die();
  }
}

function mkroom($_name){
  //$command='mkdir '.$_name;
  $command='cp -r ../testRoom ../'.$_name;
	$output=array();
  $ret=null;
  exec ( $command, $output, $ret );
}


//ここからスタート
if(($ctr=="make")&&isset($room)&&($room!="")&&isset($cate)&&($cate!="")){
  add2DB($room, $cate);
}else{
  print_r("some little");
}

?>
