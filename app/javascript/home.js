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
