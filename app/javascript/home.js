// ここからHome
$(function() {
    $(".imagefadeout").fadeIn(1500);
    $(".imagefadeout").fadeOut(1500);
    $(".main-title").fadeIn(6000);
    $(".main-title2").slideDown(8000);
    $(".main-title-p").fadeIn(16000);
  });

$(function () {
  // 「#hide-text」要素に対するclickイベントを作成してください
  $('#hide-text').click(function () {
    $('#hide-title').slideUp();
  });

});

$(function () {
  $('.hide-btn2').click(function () {
    // $('#hide-title2')を変数$titleに代入してください
    var $title = $('#hide-title2');


    // 「#title」に対する3つのメソッドを、変数を使って書き換えてください
    $title.css('color', 'red');
    $title.html('みなさん、こんばんは');
    $title.fadeOut(1000);

    // 「#text」に対する3つのメソッドを、メソッドチェーンを使って書き換えてください
    $('#hide-text2').css('color', 'blue').html('<h3>jQueryをマスターしましょう！</h3>').fadeOut(1000);
  });
});

$(function () {
  $('#find-method').click(function () {
    // findメソッドで、「#wrapper」内にあるすべての「a」要素を取得し、
    // cssメソッドで文字の色をredに指定してください
    $('#hide-wrapper').find('a').css('color', 'red');


  });

  $('#children-method').click(function () {
    // childrenメソッドで、「#wrapper」の一階層下にある「a」要素を取得し、
    // fadeOutメソッドで隠してください
    $('#hide-wrapper').children('a').fadeOut();


  });
});

$(function () {
  // 「#language-wrapper」にhoverしたときのhoverイベントを作成してください
  $('#language-wrapper').hover(function () {
    $('.language-text').fadeIn();
  },
    function () {
      $('.language-text').fadeOut();
    });

});

$(function() {
  // 「#login-show」要素に対するclickイベントを作成してください // modal - btn2
  $('#modal-show').click(function() {
    $('#modal-test').fadeIn();
  });
   // 「.close-modal」要素にclickイベントを設定してください
  $('.close-modal').click(function(){
    $('#modal-test').fadeOut();
  });
});

$(function(){
  $('.icon-hover').hover(
    function(){
      $(this).find('.ruby-icon-p').addClass('text-active');
    },
    function(){
      $(this).find('.ruby-icon-p').removeClass('text-active');
    });

  $('.faq-list-item').click(function () {
    var $answer = $(this).find('.answer');
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      // slideUpメソッドを用いて、$answerを隠してください
      $answer.slideUp();
      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('+');

    } else {
      $answer.addClass('open');
      // slideDownメソッドを用いて、$answerを表示してください
      $answer.slideDown();

      // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
      $(this).find('span').text('-');
    }
  });
});