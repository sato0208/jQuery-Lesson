

// ボディセレクタをhello jQueryと書き換える
// $(document).ready(function(){
// 	// ＄（’セレクタ’）。メソッド（パラメータ）；
// 	$('body').html('<h1>hello jQuery!!</h1>');
// });

// jQueryでCSSの変更
// $(function(){
// 	$('.box1').css({
// 		'background-color': '#0000FF',
// 		'height': '100px'
// 	});
// });

// jQueryで上から下へのアニメーション
// $(function(){
// 	$('.box1').slideDown();
// });

// jQueryで下から上へスライド
// $(function(){
// 	$('.box1').slideUp();
// });

// 非表示の要素をjQueryで表示させる
// $(function(){
// 	$('.box1').show();
// 	$('.box1').css({'background-color': '#0000FF'});
// });

// 表示されている部分をjQueryで非表示にする
// $(function(){
// 	$('.box1').hide();
// });

$(function(){
	$('.box1').slideDown(function(){
	$('.box1').css({
		'background-color': '#0000FF',
		'height':'100px',
		'width':'200px'
		}).slideUp();
});
});