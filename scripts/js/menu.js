
jQuery(document).scroll(function() {
var y = jQuery(this).scrollTop();
    if (y > 20) {
        jQuery('#transparent-menu-toggle').addClass('scrollActive');
    } else {
        jQuery('#transparent-menu-toggle').removeClass('scrollActive');
    }
});

