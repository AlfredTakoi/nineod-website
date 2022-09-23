$(document).ready(function () {
  $(".search-icon").click(function () {
    $(this).toggleClass("active");
    $(".input-search").toggleClass("active");
    $(".btn-close").toggleClass("active");
  });
  $(".btn-close").click(function () {
    $(this).toggleClass("active");
    $(".input-search").toggleClass("active");
    $(".search-icon").toggleClass("active");
  });

  var showError = true;
  $(".input-search").on("keyup", function () {
    const value = $(this).val().toLowerCase();
    if (value === "") {
      $(".message-empty").hide();
    }
    $(".accordion-item").each(function () {
      const htxt = $(this).text().toString().toLowerCase();
      const accIndex = $(this).index();
      if (htxt.indexOf(value) > -1) {
        $(this).show();
        $("#accordion-item-" + accIndex)
          .attr("filter-key", value)
          .show();
        showError = false;
      } else if ($(".accordion-item:visible").length === 0) {
        $(".message-empty").show();
      } else {
        $(this).hide();
        $(".message-empty").hide();
      }
    });
    if (showError) {
      $(".message-empty").hide();
    }
  });
});
