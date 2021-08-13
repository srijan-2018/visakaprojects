$(document).ready(function() {
    'use strict';
    var drop = $('nav > div ul ul li');
    $('nav > div ul ul').each(function() {
        var delay = 50;
        $(this).find(drop).each(function() {
            $(this).css({
                transitionDelay: delay + 'ms'
            });
            delay += 50;
        });
    });
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $("nav ul li a").each(function() {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
            $(this).parent('li').addClass("active").parent().parent().addClass("active").parent().parent().addClass("active");
    });
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $(".menu-wrap ul li a").each(function() {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
            $(this).parent('li').addClass("active").parent().parent().addClass("active-parent").parent().parent().addClass("active-parent");
    });
    var width = window.innerWidth;
    if ($(".wow").length > 0) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        });
        wow.init();
    }
    $('.rspn-mnu-btn').on('click', function() {
        $('.rsnp-mnu').addClass('slidein');
        return false;
    });
    $('.rspn-mnu-cls').on('click', function() {
        $('.rsnp-mnu').removeClass('slidein');
    });
    $('.rsnp-mnu li.menu-item-has-children > a').on('click', function() {
        $(this).parent().siblings('li').children('ul').slideUp();
        $(this).parent().siblings('li').removeClass('active');
        $(this).parent().children('ul').slideToggle();
        $(this).parent().toggleClass('active');
        return false;
    });
    if ($('.slc-wrp > select').length > 0) {
        $('.slc-wrp > select').selectpicker();
    }
    if ($('.qty').length > 0) {
        $('.qty').TouchSpin();
    }
    if (width > 851) {
        if ($('.post-detail-wrap > div.row > div').length > 0) {
            $('.post-detail-wrap > div.row > div').theiaStickySidebar({
                additionalMarginTop: 40,
                additionalMarginBottom: 40
            });
        }
    }
    if ($(".toggle").length > 0) {
        $(function() {
            $('#toggle .toggle-content').hide();
            $('#toggle h4:first').next().slideDown(500).parent().addClass("active");
            $('#toggle h4').on("click", function() {
                if ($(this).next().is(':hidden')) {
                    $('#toggle h4').next().slideUp(500).parent().removeClass("active");
                    $(this).next().slideDown(500).parent().toggleClass("active");
                }
            });
        });
    }

});
$(window).on('scroll', function() {
    'use strict';
    var menu_height = $('header').innerHeight();
    var scroll = $(window).scrollTop();
    if (scroll >= menu_height) {
        $('body').addClass('sticky');
    } else {
        $('body').removeClass('sticky');
    }
});