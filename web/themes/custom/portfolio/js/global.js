/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_barrio_subtheme = {
    attach: function (context, settings) {
      let job_card = document.querySelectorAll('.paragraph--type--experience-pro');
      job_card.forEach((item, index) => {
        (index % 2 === 0) ?item.classList.add('odd'):item.classList.add('even')
      });
    }
  };

})(jQuery, Drupal);
