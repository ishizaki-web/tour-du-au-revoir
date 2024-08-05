// drawer
    $(document).ready(function() {
      $('.drawer').drawer();
    });

// topback show hide
  $(function() {
      var navi = $("#topback");
      var startPos = 0;
      $(window).scroll(function() {
        var currentPos = $(this).scrollTop();
        if (currentPos > startPos) {
          if ($(window).scrollTop() >= 600) {
            $(navi).css("transform", "translateY(300%)");
          }
        } else {
          $(navi).css("transform", "translateY(0)");
        }
        startPos = currentPos;
      });
    });
  
  
// inview
      $(function() {
        $(".up").on("inview", function() {
          $(this).addClass("upstyle");
        });
      });
      
//  matchHeight
      $(function() {
          $(".matchheight").matchHeight();
        });
     
// backstretch
    $(function() {
      $("body").backstretch([
        "../images/tour/tour_italy_prague.jpg",
        "../images/tour/tour_italy_prague-bridge.jpg",
        "../images/tour/tour_indnesia_bali.jpg",
        "../images/tour/tour_thailand-street.jpg",
        "../images/tour/tour_moscow_street.jpg",
        "../images/tour/tour_germany_donau-cruise.jpg",
        "../images/tour/tour_china_banri-no-choujou.jpg",
        "../images/tour/tour_england_bigben.jpg",
        "../images/tour/tour_england_changing.jpg",
        "../images/tour/tour_france_versailles.jpg",
        "../images/tour/tour_netherland_train.jpg",
      ], {
        fade: 2500,
        duration: 3000
      });
    });
  
  