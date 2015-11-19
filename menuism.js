$(document).ready(function() {
  $(".upperleft").hover(function() {
    $($(".boxoverlay")[0]).css("margin-top", "-167px");
  },
  function() {
    $($(".boxoverlay")[0]).css("margin-top", "133px");
  });
  $(".upperright").hover(function() {
    $($(".boxoverlay")[1]).css("margin-top", "-167px");
  },
  function() {
    $($(".boxoverlay")[1]).css("margin-top", "133px");
  });
  $(".lowerleft").hover(function() {
    $($(".boxoverlay")[2]).css("margin-top", "-167px");
  },
  function() {
    $($(".boxoverlay")[2]).css("margin-top", "133px");
  });
  $(".lowerright").hover(function() {
    $($(".boxoverlay")[3]).css("margin-top", "-167px");
  },
  function() {
    $($(".boxoverlay")[3]).css("margin-top", "133px");
  });
});
