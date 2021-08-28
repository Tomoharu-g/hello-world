// global
var str1 = 'abc';
var TEST = '';

// 無名関数（即時実行）
(function() {
  TEST = 'test';
})();

console.log('無名関数テスト：' + TEST);

// switch文
var animal = 'mimura';
switch (animal) {
  case 'cat':
    console.log('にゃー');
    break;
  case 'dog':
    console.log('わん');
    break;
  case 'bird':
    console.log('ちゅん');
    break;
  default:
    console.log('何もないのかよ！');
}

// デフォルト値設定
var sayHello = function(str) {
  var name = str || 'John Doe';
  console.log('Hello, ' + name + '!');
}
sayHello('');

// Array
function arrayNum() {
  var array = new Array();
  array[20] = "test";
  console.log("要素の数：" + array.length);
  console.log("20番目の要素：" + array[19]);
}
arrayNum();

// DOM確認
window.onload = function() {
  var main = document.getElementById('main');
  var target = document.getElementById('target');

  // eventListnerの確認
  main.addEventListener('click', function(){
    console.log(this);
  });
  target.addEventListener('click', function(e){
    console.log(this);
    e.stopPropagation();
  });
};
