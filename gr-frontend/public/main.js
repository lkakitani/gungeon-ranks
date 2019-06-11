$(document).ready(function () {
  $('.ui.inverted.secondary.menu')
    .on('click', '.item', function () {
      if (!$(this).hasClass('dropdown')) {
        $(this)
          .addClass('active')
          .siblings('.item')
          .removeClass('active');
      }
    });

  $('.card-button').popup();
});