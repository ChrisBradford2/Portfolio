/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.portoflio = {
    attach: function (context, settings) {
      let job_card = document.querySelectorAll('.paragraph--type--experience-pro');
      job_card.forEach((item, index) => {
        (index % 2 === 0) ? item.classList.add('odd') : item.classList.add('even')
      });

      // Get the modal
      let modal = document.getElementById("myModal");
      // Get the button that opens the modal
      let btn = document.getElementById("modalBtn");
      // Get the <span> element that closes the modal
      let span = document.getElementsByClassName("close")[0];
      // When the user clicks the button, open the modal
      btn.onclick = function () {
        modal.style.display = "block";
      }
      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      }
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      }
    }
  };

})(jQuery, Drupal);
