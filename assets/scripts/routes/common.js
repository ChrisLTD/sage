// Debounce http://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

function smoothScrollTo($target){
  if ($target.length) {
    var scrollValue = $target.offset().top;
    $('html,body').animate({
      scrollTop: scrollValue
    }, 1000);
    return false;
  }
}

export default {
  init() {
    // JavaScript to be fired on all pages

      // Toggle active
      $('[data-toggle-active]').click(function(event) {
        event.preventDefault();
        var $toggleTarget = $( $(this).data('toggle-active') );
        $toggleTarget.toggleClass('active');
      });

      // Smooth scrolling
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          smoothScrollTo( target );
        }
      });

      // Equalize heights
      var equalizeChildrenHeight = debounce(function(parentSelector) {
        setTimeout(function(){

          // naive equal heights script
          $(parentSelector).each(function(){
            var highestBox = 0;
            $('.equalize-heights', this).each(function(){
              $(this).height('auto');
              if($(this).height() > highestBox) {
                highestBox = $(this).height();
              }
            });
            $('.equalize-heights',this).height(highestBox);
          });

        }, 250);
      }, 250);
      equalizeChildrenHeight('.equalize-children');

      // equalize again after page has been have resized
      window.addEventListener('resize', function(){ equalizeChildrenHeight('.equalize-children'); });

  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
