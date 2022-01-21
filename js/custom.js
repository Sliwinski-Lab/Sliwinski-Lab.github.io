/*! Initializing Materialize Components */

/*! Initialize Mobile Collapse Navbar */
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

/*! Initialize Carousel */
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instance = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true
  });
});

/*! Initialize Slider */
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {
    height: 500
  });
});
