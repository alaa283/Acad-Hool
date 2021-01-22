
$(function () {
  'use strict';
  var winH    = $(window).height();
      upperH  = $('.upper-bar').innerHeight();
      navH    = $('.navbar').innerHeight();

  $('.slider  .carousel-item').height(winH - (upperH + navH));
});