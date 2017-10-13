$(document).ready(function () {

  module = new NHSUK.Modules.HighlightActiveSectionHeading();
  module.start($('.js-page-nav'));

  NHSUK.stickAtTopWhenScrolling.init();
  NHSUK.stopScrollingAtFooter.addEl($('.js-stick-at-top-when-scrolling'), $('.js-stick-at-top-when-scrolling').height());

  // scroll to internal content
  var scrollToContent = (function () {

    $('.js-page-nav-list a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      var target = $(this.hash),
          $target = $(target),
          extraOffset = 15;

      // scroll to
      $('html, body').animate({
        scrollTop: target.offset().top - extraOffset
      }, 1000);
    });
  }());



  // webtrends for common questions
  var webtrendsSummary = (function () {

    var submitTracking = function (el) {

      var isOpen = $(el).attr('aria-expanded'),
          $status = isOpen === 'true' ? 'open' : 'close',
          $qheader = $(el).find('.c-common-questions__header').text();

      Webtrends.multiTrack({ element: this, argsa: ["DCSext.Details", $qheader, "DCSext.DetailsType", $status, "WT.dl", "121"] });
    }

    $('summary').on('click', function () {
      submitTracking(this);
    });

    $('summary').on('keydown', function (e) {
      if (e.which === 13) { // enter
        $(this).click();
        return false;
      }
    });

  }());

});
