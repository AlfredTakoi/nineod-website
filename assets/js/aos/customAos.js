AOS.init({
  once: true,
  disable: function() {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  }
});
