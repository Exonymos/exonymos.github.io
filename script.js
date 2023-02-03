function formatPaint() {
  var maxWindow = parseFloat($(".first").css("--mw"));
  var currentWindow = $(window).width();
  if (currentWindow < maxWindow) {
    var paintRatio = currentWindow / maxWindow;
    $(".first svg,#drawing svg").each(function() {
      var getOldS = parseFloat(1 - paintRatio);
      $(this).css("--ns", getOldS);
    });
  } else {
    $(".first svg,#drawing svg").css("--ns", 0);
  }
}
function makeGrid() {
  var getSize = parseFloat($(".content").outerWidth()) / 16 / 16;
  $(".first").css("--g", getSize);
  gridSize = parseFloat($(".grid").css("--g")) * 16;
  gridDown = false;
  gridSelected = false;
  formatPaint();
}
makeGrid();
$(window).on("resize", function() {
  makeGrid();
});
function calculateEditorHeight() {
  var getScroll = $(document).scrollTop();
  $(".content").css("min-height", "");
  var getHeight = $(".content")[0].scrollHeight;
  var getWindowHeight = $(window).outerHeight();
  $(".content").css("min-height", getHeight + ((getWindowHeight / 100) * 75));
  $(document).scrollTop(getScroll);
}
calculateEditorHeight();
$(document).on("ready", function() {
  calculateEditorHeight();
});
$(document).on("mousemove touchmove", function(e) {
  var currentY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
  var currentX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
  $(".eyeball span").each(function() {
    var standardR = parseFloat($(this).closest(".element").css("--r"));
    var eye = $(this);
    var eyeX = (eye.offset().left) + (eye.width() / 2);
    var eyeY = (eye.offset().top) + (eye.height() / 2);
    rad = Math.atan2(currentX - eyeX, currentY - eyeY);
    rot = (rad * (180 / Math.PI) * -1) + 180;
    rot -= standardR;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });
});
if ($(window).width() < 5) {
  $(".branding").mouseover(function() {
    $(".brandingContent").show(150)
  }).mouseleave(function() {
    $(".brandingContent").hide(150)
  });
}