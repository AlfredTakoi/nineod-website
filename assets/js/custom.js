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
      $(".arrow-dropdown").toggleClass("active");
    });
  }

  function paginationSectionScroll() {
    $(".page-scroll").click(function (e) {
      const element = $(this).attr("href");
      const goalElement = $(element);
      $("html").animate({
        scrollTop: goalElement.offset().top - 70,
      });
      $(this).css("color", "black");
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
      const email = $(".input-subscribe");
      if (isValidEmailAddress(email.val())) {
        $(".button-subscribe").attr("disabled", true);
        setTimeout(function () {
          email.val("");
          $(".message-subscribe").removeClass("d-none");
          $(".button-subscribe").attr("disabled", false);
        }, 2500);
        e.preventDefault();
      } else {
        $(".input-subscribe").css("border", "1px solid red");
      }
      setTimeout(function () {
        $(".message-subscribe").addClass("d-none");
      }, 5000);
    });
    $(".input-subscribe").keyup(function () {
      if ($(this).val() !== "") {
        $(this).css("border", "2px solid black");
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
      cssEase: "cubic-bezier(.87,0,.13,1)",
    });
  }

  function parallaxFixedBackground() {
    $(".hero").parallax({ imageSrc: "/assets/img/image-hero.jpg" });
    $(".about-image").parallax({ imageSrc: "/assets/img/about-image.jpg" });
  }

  function validateFormContact() {
    $(".form").validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true
        },
        subject: "required",
        address: "required"
      },
      errorClass: "error fail-alert",
      submitHandler: function(form, event) { 
        setTimeout(function () {
          $('.input-control-contact').val("");
          $(".message-contact").removeClass("d-none");
        }, 2500);
        setTimeout(function () {
          $(".message-contact").addClass("d-none");
        }, 5000);
        event.preventDefault()
       }
    });
  }

  hamburgerMenu();
  wrapperMenu();
  serviceLinkDropdown();

  $(window).breakpoints();
  $(window).on("lessThan-sm", function () {
    btnShowMoreProjectSm();
    partnersBody();
    boxClients();
    btnClickNextPrev();
    validateSubscribe();
    paginationSectionScroll();
    validateFormContact();
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
    validateFormContact();
  });
});
