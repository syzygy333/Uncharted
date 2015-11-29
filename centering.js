$(document).ready(function() {
  var screenWidth = $(window).width();
  var boxWidth = $(".upperleft").width();
  var adjustment = (screenWidth / 2) - boxWidth;
  if(screenWidth > 830) {
    $(".upperleft").css("margin-left", adjustment);
    $(".upperright").css("margin-left", "-4px");
    $(".lowerleft").css("margin-left", adjustment);
    $(".lowerright").css("margin-left", "-4px");
  }
  $(window).resize(function() {
    var screenWidth = $(window).width();
    var boxWidth = $(".upperleft").width();
    var adjustment = (screenWidth / 2) - boxWidth;
    if(screenWidth > 830) {
      $(".upperleft").css("margin-left", adjustment);
      $(".upperright").css("margin-left", "-4px");
      $(".lowerleft").css("margin-left", adjustment);
      $(".lowerright").css("margin-left", "-4px");
    } else {
      $(".upperleft").css("margin-left", "0");
      $(".upperright").css("margin-left", "0");
      $(".lowerleft").css("margin-left", "0");
      $(".lowerright").css("margin-left", "0");
    }
  });
});
