$(document).ready(function() {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $(".navbar-toggler").click();
    }
  })
})

$(document).ready(function() {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate( {
        scrollTop: $(hash).offset().scrollTop
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});

$(document).ready(function() {
  $(document).click(function (event) {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
  });
});
