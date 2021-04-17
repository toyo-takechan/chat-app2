// $(function () {
//   // 「#hide-text」要素に対するclickイベントを作成してください
//   $('#hide-text').click(function () {
//     $('#hide-title').slideUp();
//   });

// });

// $(function () {
//   $('.hide-btn2').click(function () {
//     // $('#hide-title2')を変数$titleに代入してください
//     var $title = $('#hide-title2');


//     // 「#title」に対する3つのメソッドを、変数を使って書き換えてください
//     $title.css('color', 'red');
//     $title.html('みなさん、こんばんは');
//     $title.fadeOut(1000);

//     // 「#text」に対する3つのメソッドを、メソッドチェーンを使って書き換えてください
//     $('#hide-text2').css('color', 'blue').html('<h3>jQueryをマスターしましょう！</h3>').fadeOut(1000);
//   });
// });

// $(function () {
//   $('#find-method').click(function () {
//     // findメソッドで、「#wrapper」内にあるすべての「a」要素を取得し、
//     // cssメソッドで文字の色をredに指定してください
//     $('#hide-wrapper').find('a').css('color', 'red');


//   });

//   $('#children-method').click(function () {
//     // childrenメソッドで、「#wrapper」の一階層下にある「a」要素を取得し、
//     // fadeOutメソッドで隠してください
//     $('#hide-wrapper').children('a').fadeOut();


//   });
// });

// $(function () {
//   // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
//   $('#hide-wrapper').hover(function () {
//     $('.language-text').fadeIn();
//   },
//     function () {
//       $('.language-text').fadeOut();
//     });

// });

// $(function () {
//   // 「#login-show」要素に対するclickイベントを作成してください
//   $('#login-show').click(function () {
//     $('modal-btn2').fadeIn();
//   });

// });