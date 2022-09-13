/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.navbar = {
    attach: function (context, settings) {

      // window.addEventListener("hashchange", () => window.history.pushState({}, "", '/'), {});

      // Collapse Navbar
      var navbarCollapse = function() {
        if ($("#navbar-main").offset().top < 100) {
          $("#navbar-main").addClass("navbar-expensed");
        } else {
          $("#navbar-main").removeClass("navbar-expensed");
        }
      };
      // Collapse now if page is not at top
      navbarCollapse();
      // Collapse the navbar when page is scrolled
      $(window).scroll(navbarCollapse);

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#navbar-main',
        offset: 80
      });
    }
  };

})(jQuery, Drupal);
