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
    // reset top padding to accomodate fixed header when window resized
    $(window).resize(function () {
        viewportWidth = $(window).width();
        siteHeaderHeight = $('.site-header').height();
        setTopPadding(viewportWidth, siteHeaderHeight);
    });

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

    //window scroll handler
    $(window).on("scroll  touchmove", function () {

        var scrollTop = $(document).scrollTop();
        var headerHeight = $('header').height();
        var onThisPagePosition = $('.on-this-page').offset();

        // minimise header
        if (scrollTop > 100) {
            $('.site-header').addClass('shrink');
        } else {
            $('.site-header').removeClass('shrink');
        }
        
        // fix on this page menu when scrolls up (484 is approx header height when shrunk)
        if (viewportWidth > 600) {
            if (scrollTop >= 484) {
                $('.on-this-page').addClass('fixed');
                $('.on-this-page').css('top',headerHeight);
            } else {
                $('.on-this-page').removeClass('fixed');
                $('.on-this-page').css('top','auto');
            }
        }
    });
});
