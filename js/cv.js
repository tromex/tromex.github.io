function hashHandler() {
    // Asking for Printable version?
    if(document.location.hash === '#printable') {
        $('body').addClass('print');
    } else {
        $('body').removeClass('print');
    }
}

$(function () {
    $(window).hashchange(function() {
        hashHandler();
    });

    $(window).hashchange();
});