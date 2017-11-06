<?php
$room = $_GET['room'];
$yourid = $_GET['id'];

function h($str) { return htmlspecialchars($str, ENT_QUOTES, "UTF-8"); }

//サーチするやつ
function search2DB($_room,$_yourid){
  $dsn = 'mysql:dbname=mloa_ichimonitto;host=localhost';
  $user = 'mloa';
  $password = 'mloa';

  try{
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $sql = 'SELECT * FROM room WHERE name = :name;';
    $st = $pdo->prepare($sql);
    $st->execute(array(':name'=>h($_room)));

		foreach($st as $data){
			$member[1] = $data['member1'];
			$member[2] = $data['member2'];
			$member[3] = $data['member3'];
			$member[4] = $data['member4'];
			$member[5] = $data['member5'];
			$member[6] = $data['member6'];
		}
		//id一致するものを探索
		$insertflag = false;
		for($i = 1;$i<7;$i++){
			if($member[$i] == $_yourid){

        rmfromDB($_room,$i);
				break;
			}
		}

  }catch (PDOException $e){
    print('Error:'.$e->getMessage());
    die();
  }
}

//追加するやつ
function rmfromDB($_room,$emptyN){
  $dsn = 'mysql:dbname=mloa_ichimonitto;host=localhost';
  $user = 'mloa';
  $password = 'mloa';

  try{
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $sql = 'UPDATE room SET member'.$emptyN.' = null WHERE name = :name;';
    $st = $pdo->prepare($sql);
    $st->execute(array(':name'=>h($_room)));

		print_r("delete success!");
  }catch (PDOException $e){
    print('Error:'.$e->getMessage());
    die();
  }
}

//ここからスタート
if(isset($room)&&($room!="")&&isset($yourid)&&($yourid!="")){
  search2DB($room,$yourid);
}else{
  print_r("some little");
}

?>