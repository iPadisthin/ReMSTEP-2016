$(document).ready(function () {

    function setTopPadding(viewportWidth, siteHeaderHeight) {
        if (viewportWidth > 600) {
            $('body').css('padding-top', siteHeaderHeight);
        } else {
            $('body').css('padding-top', 0);
        }
    }
    // set top padding to accomodate fixed header
    var viewportWidth = $(window).width();
    var siteHeaderHeight = $('.site-header').height();
    setTopPadding(viewportWidth, siteHeaderHeight);
    
    $(window).resize(function () {
        // reset top padding to accomodate fixed header when window resized
        viewportWidth = $(window).width();
        siteHeaderHeight = $('.site-header').height();
        setTopPadding(viewportWidth, siteHeaderHeight);
    });

    // mobile menu toggle handler
    $('.mobile-menu-toggle').click(function () {
        $('.main-nav').slideToggle();
    });
    
    // tabs handler
    $('.tab').click(function(){
        $('.tab, .tab-panel').removeClass('selected');
        var panelToShow = $(this).attr('aria-controls');
        $(this).addClass('selected');
        $('#'+panelToShow).addClass('selected');
    });

    var onThisPagePosition = $('.on-this-page').offset();
    //window scroll handler
    $(window).on("scroll  touchmove", function () {

        var scrollTop = $(document).scrollTop();
        var headerHeight = $('header').height();
        

        // minimise header
        if (scrollTop > 100) {
            $('.site-header').addClass('shrink');
        } else {
            $('.site-header').removeClass('shrink');
        }
        
        // fix on this page menu when scrolls up (484 is approx header height when shrunk)
        if (viewportWidth > 600) {
            if (scrollTop >= (onThisPagePosition.top - headerHeight*0.7)) {
                $('.on-this-page').addClass('fixed');
                $('.on-this-page').css('top',headerHeight);
            } else {
                $('.on-this-page').removeClass('fixed');
                $('.on-this-page').css('top','auto');
            }
        }
    });
    
    //smooth scroll
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      var scrollLocal = target.offset().top;
		  console.log(scrollLocal);
	      if (target.length) {
            $('html,body').animate({
                scrollTop: scrollLocal
            }, 1000);
                return false;
          }
        }
	  });
    
    
});
