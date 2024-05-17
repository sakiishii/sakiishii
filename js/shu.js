$(function(){
    // 1回目のアクセス
    if($.cookie("access") == undefined) {
      //最初にアクセスしたときにはここに書いたアニメーションのJSが動く
      $.cookie("access","onece");
      $("#shutter").css("display","block")
    // 2回目以降は動かないようにするけど最初は動かす
    } else {
  $("#shutter").css("display","none")
      // 2回目以降は動かないようにする
    }
  });
    JavaScriptでドロップダウンを制御する関数

