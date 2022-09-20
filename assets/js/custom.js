$(document).ready(function () {
  // $(this).scrollTop(0);

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
      $('.arrow-dropdown').toggleClass("active")
    });
  }

  function paginationSectionScroll() {
    $(".page-scroll").click(function (e) {
      const element = $(this).attr("href");
      const goalElement = $(element);
      $("html, body").animate({
        scrollTop: goalElement.offset().top - 70,
      });
      $(".wrapper-menu").toggleClass("open");
      $(".mobile-nav").toggleClass("is-active");
      e.preventDefault();
    });
    $(".page-item a").click(function (e) {
      const element = $(this).attr("href");
      const goalElement = $(element);
      $("html, body").animate({
        scrollTop: goalElement.offset().top - 70,
      });
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

  function btnShowMoreProjectSm() {
    $(".project-wrap").slice(0, 4).show();
    $(".show-more").click(function () {
      $(".project-wrap:hidden").slice(0, 4).slideDown(500);
      if ($(".project-wrap:hidden").length === 0) { 
        $(".show-more").fadeOut(500);
      }
    });
  }

  function btnShowMoreProjectMd() {
    $(".project-wrap").slice(0, 6).show();
    $(".show-more").click(function () {
      $(".project-wrap:hidden").slice(0, 3).slideDown(500);
      if ($(".project-wrap:hidden").length === 0) {
        $(".show-more").fadeOut(500);
      }
    });
  }

  function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    return pattern.test(emailAddress);
  }

  function validateSubscribe() {
    $(".button-subscribe").click(function (e) {
      const email = $(".input-subscribe").val();
      if (isValidEmailAddress(email)) {
        setTimeout(function () {
          $(".message-subscribe:hidden").toggleClass("d-none");
          $(".button-subscribe").css({
            backgroundColor: "black",
            borderColor: "black",
          });
        }, 2500);
        $(".button-subscribe").css({
          backgroundColor: "rgb(128, 126, 126)",
          borderColor: "rgb(128, 126, 126)",
        });
        e.preventDefault();
      } else {
        $(".input-subscribe").css("border", "1px solid red");
      }
    });

    $(".input-subscribe").keyup(function () {
      if ($(".input-subscribe").val() !== "") {
        $(".input-subscribe").css("border", "2px solid black");
      }
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
  }

  function btnHoverNextPrev() {
    $(".arrow-prev").mouseenter(function () {
      $(".partners-body").slick("slickPrev");
    });
    $(".arrow-next").mouseenter(function () {
      $(".partners-body").slick("slickNext");
    });
  }

  function btnClickNextPrev() {
    $(".arrow-prev").click(function () {
      $(".partners-body").slick("slickPrev");
    });
    $(".arrow-next").click(function () {
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
    btnClickNextPrev();
    validateSubscribe();
    paginationSectionScroll();
  });
  $(window).on("greaterEqualTo-md", function () {
    btnShowMoreProjectMd();
    paginationSectionScroll();
    navbarActiveScroll();
    partnersBody();
    boxClients();
    parallaxFixedBackground();
    btnHoverNextPrev();
    validateSubscribe();
  });
});
