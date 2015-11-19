$(document).ready(function() {
  var screenWidth = $(window).width();
  var boxWidth = $(".upperleft").width();
  var adjustment = (screenWidth / 2) - boxWidth;
  $(".upperleft").css("margin-left", adjustment);
  $(".lowerleft").css("margin-left", adjustment);
  $(window).resize(function() {
    var screenWidth = $(window).width();
    var boxWidth = $(".upperleft").width();
    var adjustment = (screenWidth / 2) - boxWidth;
    $(".upperleft").css("margin-left", adjustment);
    $(".lowerleft").css("margin-left", adjustment);
  });
})
