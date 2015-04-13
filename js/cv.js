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
    $(window).hashchange(); // kick

    $('button.open').on('click', function() {
        // The parent is div.section
        $(this).parent().toggleClass('closed');
    });

    $('button.more').on('click', function() {
        // The grand-parent is div.subsection
        $(this).parent().parent().toggleClass('extended');
    });
});
