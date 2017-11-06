<!DOCTYPE html>
<!-- TOP-->
<html lang="ja">
  <head>
    <title>イチモニット</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Icon Font-->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Style-->
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body>
    <header><img src="img/ichimonitto-logo.png">
      <p>イチモニットは一問一答形式で友達と競い合いながら勉強できるサービスです。</p>
    </header>
    <main>
      <section class="selector">
        <div class="button-box">
          <button class="select-create-button">新しいルームを作成</button>
          <button class="select-join-button">ルームに参加</button>
        </div>
        <div class="create-box" style="display:none;">
          <select name="category">
            <option value="1">英単語</option>
          </select>
          <input class="room-name" type="text" placeholder="ルーム名">
          <button class="create-button"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
        <div class="join-box" style="display:none;">
          <input class="join-room-name" type="text" placeholder="参加するルーム名">
          <button class="join-button" type="submit"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
      </section>
      <section class="cloudn"><img src="img/keyvisual.png">
        <p><a href="http://www.cloudn-service.com/cam04-deven/decon/index.html#campaing">Cloudn主催アプリケーションコンテスト</a>					応募作品</p>
        <p>投票は<a href="http://www.cloudn-service.com/cam04-deven/decon/tohyo/index.html">こちら</a>					からお願いします。</p>
      </section>
      <section class="description-box">
        <div class="description">
          <div>
            <h3>イチモニットとは</h3>
            <p>イチモニットとは音声チャットを使った一問一答形式のクイズサイトです。<br>						イチモニットをつかえば、日々の英単語や暗記科目の勉強が楽しくできます。<br>						参加しているみんなと顔を合わせて競い合っちゃいましょう。<br>						マイクに向かって回答するので発音のチェックにも役立ちます。</p>
            <h3>遊び方</h3>
            <p>挑戦したいジャンルと好きなルーム名を入力して部屋に入ります。<br>						ルーム名を友達にも教えて集まりましょう。<br>						次々に出てくる”一問一答”の問題に回答します。<br>						一番早く答えられた人がポイントゲット！<br>						カウントが0になったら時間切れ… 制限時間以内に応えられるかな？<br>						お金は一切かかりません。無料で遊べます。</p>
            <h3>今後のアップデート予定</h3>
            <ul>
              <li>画像問題に対応する</li>
              <li>問題投稿機能をつける</li>
            </ul>
          </div>
        </div>
        <div class="tweet"><a class="twitter-timeline" href="https://twitter.com/ichimonitto">Tweets by @ichimonitto</a>
          <script async="" src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </section>
    </main>
    <footer>
      <p>Copyright © MLOA All Rights Reserved.</p>
    </footer>
    <script src="js/top.js"></script>
  </body>
</html>