// water
$("body").ripples({
  resolution: 256,
  perturbance: 0.04
});


// window
$(".window")
  .draggable({
    cancel: ".inside,input,textarea"
  });
$(".window-bloger")
  .draggable({
    cancel: ".inside,input,textarea"
  });


$("input.address").focus(function () {
  $(".fa-refresh").hide(500);
  this.select();
}).focusout(function () {
  $(".fa-refresh").show(500);
});

// ui-draggable 
var __dx;
var __dy;
var __scale = 0.5;
var __recoupLeft, __recoupTop;

$(".ui-draggable").draggable({
  //revert: true,
  zIndex: 100,
  drag: function (event, ui) {
    //resize bug fix ui drag `enter code here`
    __dx = ui.position.left - ui.originalPosition.left;
    __dy = ui.position.top - ui.originalPosition.top;
    //ui.position.left = ui.originalPosition.left + ( __dx/__scale);
    //ui.position.top = ui.originalPosition.top + ( __dy/__scale );
    ui.position.left = ui.originalPosition.left + (__dx);
    ui.position.top = ui.originalPosition.top + (__dy);
    //
    ui.position.left += __recoupLeft;
    ui.position.top += __recoupTop;
  },
  start: function (event, ui) {
    $(this).css('cursor', 'pointer');
    //resize bug fix ui drag
    var left = parseInt($(this).css('left'), 10);
    left = isNaN(left) ? 0 : left;
    var top = parseInt($(this).css('top'), 10);
    top = isNaN(top) ? 0 : top;
    __recoupLeft = left - ui.position.left;
    __recoupTop = top - ui.position.top;
  },
  stop: function (event, ui) {
    $(this).css('cursor', 'default');
    //alternate to revert (don't use revert)
    $(this).animate({
      left: $(this).attr('oriLeft'),
      top: $(this).attr('oriTop')
    }, 1000)
  },
  create: function (event, ui) {
    $(this).attr('oriLeft', $(this).css('left'));
    $(this).attr('oriTop', $(this).css('top'));
  }
})

// close
$(document).ready(function () {
  $(".panel").click(function () {
    $(this).parents(".window").toggle("close");
  });
});
// open
var i = 1;

$(document).ready(function () {
  $(".recentlyAtc").click(function () {
    $(".window-recentlyAtc").toggle("close");
    $(".window-recentlyAtc").css("z-index", i);
  });
});
$(document).ready(function () {
  $(".bloger").click(function () {
    $(".window-bloger").toggle("close");
    $(".window-bloger").css("z-index", i);
  });
});
$(document).ready(function () {
  $(".cover").click(function () {
    $(".window-cover").toggle("close");
    $(".window-cover").css("z-index");
  });
});