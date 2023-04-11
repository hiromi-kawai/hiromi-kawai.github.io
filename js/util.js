$(function () {
  var headerHeight = $("header").outerHeight();
  console.log(headerHeight);
  var urlHash = location.hash;
  if (urlHash) {
    $("body,html").stop().scrollTop(0);
    setTimeout(function () {
      var target = $(urlHash);
      var position = target.offset().top - headerHeight;
      $("body,html").stop().animate({ scrollTop: position }, 500);
    }, 100);
  }
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $("body,html").stop().animate({ scrollTop: position }, 500);
    return false;
  });
});

$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".globalMenuSp").addClass("active");
      document.addEventListener("touchmove", noscroll, { passive: false });
      document.addEventListener("wheel", noscroll, { passive: false });
    } else {
      $(".globalMenuSp").removeClass("active");
      document.removeEventListener("touchmove", noscroll);
      document.removeEventListener("wheel", noscroll);
    }
  });
});
//メニュー内を閉じておく
$(function () {
  $(".globalMenuSp a[href]").click(function () {
    document.removeEventListener("touchmove", noscroll);
    document.removeEventListener("wheel", noscroll);
    $(".globalMenuSp").removeClass("active");
    $(".hamburger").removeClass("active");
  });
});
//スクロール領域を取得
const body = document.getElementById("body");

//スクロールを禁止する関数
function ban() {
  body.style.overflowY = "hidden";
}

//禁止を解除する関数
function lift() {
  body.style.overflowY = "auto";
}
function noscroll(e) {
  e.preventDefault();
}
