$(document).ready(function () {
  // $(this).scrollTop(0);

  function btnShowMoreProjectSm() {
    $(".project-wrap").slice(0, 4).show();
    $(".showMore").click(function (e) {
      $(".project-wrap:hidden").slice(0, 4).slideDown(500);
      if ($(".project-wrap:hidden").length === 0) {
        $(".showMore").fadeOut(500);
      }
      e.preventDefault();
    });
  }

  function btnShowMoreProjectMd() {
    $(".project-wrap").slice(0, 6).show();
    $(".showMore").click(function (e) {
      $(".project-wrap:hidden").slice(0, 3).slideDown(500);
      if ($(".project-wrap:hidden").length === 0) {
        $(".showMore").fadeOut(500);
      }
      e.preventDefault();
    });
  }

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
    $("#service-link").click(function () {
      $("#website-link").toggleClass("d-none");
      $("#platform-link").toggleClass("d-none");
    });
  }

  function paginationSectionScroll() {
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
  }

  function navbarActiveScroll() {
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
    });
  }

  function partnersBody() {
    $(".partners-body").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      varibleWidth: true,
      centerMode: true,
      speed: 1500,
      arrows: true,
      prevArrow: "",
      nextArrow: "",
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
    $(".arrow-prev").mouseenter(function () {
      $(".partners-body").slick("slickPrev");
    });
    $(".arrow-next").mouseenter(function () {
      $(".partners-body").slick("slickNext");
    });
  }

  function boxClients() {
    $(".box-clients").slick({
      prevArrow: "",
      nextArrow: "",
      autoplay: true,
      dots: true,
      speed: 800,
      autoplaySpeed: 5000,
    });
  }

  function parallaxFixedBackground() {
    $(".hero").parallax({ imageSrc: "/assets/img/image-hero.jpg" });
    $(".about-image").parallax({ imageSrc: "/assets/img/about-image.jpg" });
  }

  $(window).breakpoints();
  $(window).on("lessThan-sm", function () {
    btnShowMoreProjectSm();
    hamburgerMenu();
    wrapperMenu();
    serviceLinkDropdown();
    partnersBody();
    boxClients();
  });
  $(window).on("greaterEqualTo-md", function () {
    btnShowMoreProjectMd();
    paginationSectionScroll();
    navbarActiveScroll();
    partnersBody();
    boxClients();
    parallaxFixedBackground();
  });
});
