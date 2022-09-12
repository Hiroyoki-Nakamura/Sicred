$(function () {
  //open and close nav
  $(".toggle, .nav-close").click(function (e) {
    e.preventDefault();
    $(".nav-body").toggleClass("active");
  });

  //open and close menu
  $(".option").click(function (e) {
    e.preventDefault();
    $(".nav-menu").toggleClass("dropdown");
  });
});
