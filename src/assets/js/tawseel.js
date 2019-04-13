(function ($) {

    $('.trigger').toggle(function () {
        $(this).addClass('active');
    }, function () {
        $(this).removeClass('active');
    });
    $('.trigger').click(function () {
        $(this).next('.toggle-container').slideToggle();
    });

    $('.trigger.opened').toggle(function () {
        $(this).removeClass('active');
    }, function () {
        $(this).addClass('active');
    });

    $('.trigger.opened').addClass('active').next('.toggle-container').show();



    $(document).mouseup(function (e) {
        let container = $('#toast-container');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });

}(jQuery));
