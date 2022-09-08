// $(window).scroll(function () {
//   let wScroll = $(this).scrollTop();

//   if (wScroll > $("#about").offset().top) {
//     console.log("ok");
//     $(".item-nav:nth-child(2)").toggleClass("active");
//     $(".item-nav:nth-child(1)").removeClass("active");
//   }
// });

$(window).scrollTop(goalElement.offset().top - 90);

$(".page-scroll").on("click", function (e) {
  const element = $(this).attr("href");
  const goalElement = $(element);

  // $(window).animate({
  //   scrollTop: goalElement.offset().top - 90,
  // }, 1000);

  // $(window).scrollTop(goalElement.offset().top - 90);

  e.preventDefault();
});
