<?php

  $dsn = 'mysql:dbname=ichimonitto;host=localhost';
  $user = 'mloa';
  $password = 'mloa';

  try{
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $sql = "UPDATE `ichimonitto`.`room` SET `member1` = '',`member2` = '',`member3` = '',`member4` = '',`member5` = '',`member6` = '' WHERE `room`.`id` =15;";
    $st = $pdo->prepare($sql);
    $st->execute();

		header('Content-type: application/json');
		echo "clear";
  }catch (PDOException $e){
    print('Error:'.$e->getMessage());
    die();
  }

?>