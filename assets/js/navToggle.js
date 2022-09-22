$(document).ready(function () {
  function hamburgerMenu() {
    $(".hamburger").click(function () {
      $(".bar").toggleClass("is-active");
      $(".hamburger").toggleClass("is-active");
    });
  }

  function wrapperMenu() {
    $(".wrapper-menu").click(function () {
      $(this).toggleClass("open");
      $(".mobile-nav").toggleClass("is-active");
    });
  }

  function serviceLinkDropdown() {
    $(".mobile-nav ul li:nth-child(4)").click(function () {
      $(this).children("ul").stop().slideToggle(400);
      $(".arrow-dropdown").toggleClass("active");
    });
  }

  hamburgerMenu();
  wrapperMenu();
  serviceLinkDropdown()
});
