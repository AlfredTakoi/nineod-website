$(document).ready(function () {
  // $(this).scrollTop(0);

  // Window breakpoints Jquery Start
  function responsiveSm() {
    $(".project-wrap").slice(0, 4).show();
    $(".showMore").click(function (e) {
      $(".project-wrap:hidden").slice(0, 4).slideDown(500);
      if ($(".project-wrap:hidden").length === 0) {
        $(".showMore").fadeOut(500);
      }
      e.preventDefault();
    });
  }
  function responsiveMd() {
    $(".project-wrap").slice(0, 6).show();
    $(".showMore").click(function (e) {
      $(".project-wrap:hidden").slice(0, 3).slideDown(500);
      if ($(".project-wrap:hidden").length === 0) {
        $(".showMore").fadeOut(500);
      }
      e.preventDefault();
    });
  }
  $(window).breakpoints();
  $(window).on("lessThan-sm", function () {
    responsiveSm();
  });
  $(window).on("greaterEqualTo-md", function () {
    responsiveMd();
  });
  // Window breakpoints Jquery End



  $(".hamburger").click(function () {
    $(".bar").toggleClass("is-active");
    $(".hamburger").toggleClass("is-active");
  });

  $(".wrapper-menu").click(function () {
    $(this).toggleClass("open");
    $(".mobile-nav").toggleClass("is-active");
  });

  $("#service-link").click(function () {
    $("#website-link").toggleClass("d-none");
    $("#platform-link").toggleClass("d-none");
  });

  $(".page-scroll").on("click", function (e) {
    const element = $(this).attr("href");
    const goalElement = $(element);
    $("html, body").animate({
      scrollTop: goalElement.offset().top - 70,
    });
    $(".wrapper-menu").toggleClass("open");
    $(".mobile-nav").toggleClass("is-active");
    e.preventDefault();
  });

  $(window).scroll(function () {
    $(".section-row").each(function () {
      const sectionRowTop = $(this).offset().top - 100;
      if ($(window).scrollTop() > sectionRowTop) {
        $(".section-row").removeClass("active");
        ActiveId = $(this).addClass("active").attr("id");
      }
    });

    $(".item-nav").each(function () {
      const thisChildrenHref = $(this).children("a").attr("href");
      if (thisChildrenHref === "#" + ActiveId) {
        $(".item-nav").removeClass("active");
        $(this).addClass("active");
      }
    });

    $(".page-item").each(function () {
      thisChildren = $(this).children("a");
      thisChildrenHref = $(this).children("a").attr("href");
      if (thisChildrenHref === "#" + ActiveId) {
        $(".page-item a").removeClass("active");
        $(thisChildren).addClass("active");
      }
    });

    const wScroll = $(this).scrollTop();
    $(".hero").css({
      transform: "translate(0px, " + wScroll / -90 + "%)",
    });
  });

  $(".partners-body").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    varibleWidth: true,
    centerMode: true,
    speed: 2000,
    prevArrow: '<i class="fas fa-chevron-left text-white arrow-prev"></i>',
    nextArrow: '<i class="fas fa-chevron-right text-white arrow-next"></i>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".box-clients").slick({
    prevArrow: "",
    nextArrow: "",
    autoplay: true,
    dots: true,
    speed: 800,
    autoplaySpeed: 5000,
  });
});
