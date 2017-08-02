<?php
 $ctr=$_GET['ctr'];
 $room=(string)$_GET['room'];

function rmFromDB($_name){
  $dsn = 'mysql:dbname=mloa_ichimonitto;host=localhost';
  $user = 'mloa';
  $password = 'mloa';

  try{
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    print_r("conected");

    $sql = 'DELETE FROM room WHERE name = :name;';
    $st = $pdo->prepare($sql);
    $st->execute(array(':name'=>h($_name)));

		rmroom($_name);

		print_r("sucess!");
  }catch (PDOException $e){
    print('Error:'.$e->getMessage());
    die();
  }
}

function rmroom($_name){
  $command='rm -rf '.$_name;
	$output=array();
  $ret=null;
  exec ( $command, $output, $ret );
}

//ここからスタート
if(($ctr=="remove")&&isset($room)&&($room!="")){
  rmFromDB($room);
}else{
  print_r("some little");
}


?>