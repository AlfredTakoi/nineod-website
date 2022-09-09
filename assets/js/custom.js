$(document).ready(function(){
  $(this).scrollTop(0);
});

$('.menu-toggle').click(function(){
  $('.bar1').toggleClass('change')
  $('.bar2').toggleClass('change')
  $('.bar3').toggleClass('change')
})

$('.hamburger').click(function(){
  $('.bar').toggleClass('is-active')
  $('.hamburger').toggleClass('is-active')
})

$('.wrapper-menu').click(function(){
  $(this).toggleClass('open')
  $('.mobile-nav').toggleClass('is-active')
})

$('#service-link').click(function(){
  $('#website-link').toggleClass('d-none')
  $('#platform-link').toggleClass('d-none')
})

$(".page-scroll").on("click", function (e) {
  const element = $(this).attr("href");
  const goalElement = $(element);
  $('.wrapper-menu').toggleClass('open')
  $('.mobile-nav').toggleClass('is-active')
  $(window).scrollTop(goalElement.offset().top - 90);
  e.preventDefault();
});
