$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    position += 0;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });
});

    $(function(){
  var pageTop = $("#topback");
  pageTop.click(function(){
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  $(window).scroll(function(){
    if($(this).scrollTop() >= 200){
      pageTop.css( "bottom", "120px" );
    } else{
      pageTop.css( "bottom", "-130px" );
    }
  });
});