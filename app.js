

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
// 上から下にスライドダウンした後、色を青にして高さ、幅を変える。そしてスライドアップする
// $(function(){
// 	$('.box1').slideDown(function(){
// 		$('.box1').css({
// 			'background-color': '#0000FF',
// 			'height':'100px',
// 			'width':'200px'
// 		}).slideUp();
// 	});
// });

// マウスオーバーイベントを設定する
// マウスアウトイベントを設定する
// $(’.セレクタ名’)。イベント名（function(){イベント発生時に行われる処理});
// $(function(){
// 	$('.box1').mouseover(function(){
// 		$('.box1').css({'background-color': '#0000FF'});
// 	});

// 	$('.box1').mouseout(function(){
// 		$('.box1').css({'background-color': '#FF0000'});
// 	});
// });

// class属性を追加する・解除する
// $(function(){
// 	$('.box1').mouseover(function(){
// 		// 対象のHTML要素にclass属性を追加します
// 		$('.box1').addClass('box1-ext');
// 	});
// 	$('.box1').mouseout(function(){
// 		// 対象のHTML要素にclass属性を解除します
// 		$('.box1').removeClass('box1-ext');
// 	});
// });

// マウスクリックイベントの記述
$(function(){
	$('.box1').on('click',function(){
		$('.box1').addClass('box1-ext');
	});

	$('.box1').mouseout(function(){
		$('.box1').removeClass('box1-ext');
	});
});












































