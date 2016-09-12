<?php
$room = $_GET['room'];
$yourid = $_GET['id'];

function h($str) { return htmlspecialchars($str, ENT_QUOTES, "UTF-8"); }

//サーチするやつ
function search2DB($_room,$_yourid){
  $dsn = 'mysql:dbname=ichimonitto;host=localhost';
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
		//アタマから空きが無いか探索
		$insertflag = false;
		for($i = 1;$i<7;$i++){
			if($member[$i] != $_yourid){
			  if($member[$i] == null){
				  if($insertflag == false){
				    $member[$i] = $_yourid;

  			    add2DB($_room,$i,$_yourid);

				    $insertflag = true;
			    }
			  }
			}elseif($member[$i] == $_yourid){
				break;
			}
		}

		$json = array($member[1],$member[2],$member[3],$member[4],$member[5],$member[6]);
		header('Content-type: application/json');
		echo json_encode($json);
  }catch (PDOException $e){
    print('Error:'.$e->getMessage());
    die();
  }
}

//追加するやつ
function add2DB($_room,$emptyN,$_yourid){
  $dsn = 'mysql:dbname=ichimonitto;host=localhost';
  $user = 'mloa';
  $password = 'mloa';

  try{
    $pdo = new PDO($dsn, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $sql = 'UPDATE room SET member'.$emptyN.' = :id WHERE name = :name;';
    $st = $pdo->prepare($sql);
    $st->execute(array(':id'=>h($_yourid),':name'=>h($_room)));
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