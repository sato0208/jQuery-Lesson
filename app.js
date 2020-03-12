

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

// // マウスクリックイベントの記述
// $(function(){
// 	$('.box1').on('click',function(){
// 		$('.box1').addClass('box1-ext');
// 	});

// 	$('.box1').mouseout(function(){
// 		$('.box1').removeClass('box1-ext');
// 	});
// });

// // クリックしたらスライドアップして消えていくthisを使わない方法
// $(function(){
// 	$('.bg1').on('click',function(){
// 		$('.bg1').slideUp();
// 	});
// 	$('.bg2').on('click',function(){
// 		$('.bg2').slideUp();
// 	});
// 	$('.bg3').on('click',function(){
// 		$('.bg3').slideUp();
// 	});
// 	$('.bg4').on('click',function(){
// 		$('.bg4').slideUp();
// 	});
// });

// // this(クリックされた要素）を使用してまとめてイベントを記述する方法
// $(function(){
// 	$('.box1').on('click',function(){
// 		$(this).slideUp();
// 	});
// });

// ボタンがクリックされた時ul要素の小要素をCSSで赤くする。
$(function(){
	$('button').on('click',function(){
		$('ul').children().css('color','red');
	});
});











































