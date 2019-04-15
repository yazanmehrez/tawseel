$(document).ready(function () {
    $(document).on('click', '.toggle', function (e) {
        e.preventDefault();

        let $this = $(this);
        $this.find('.fa').toggleClass('fa-angle-up fa-angle-down');

        if ($this.find('.inner').hasClass('show')) {
            $this.find('.inner').removeClass('show');
            $this.find('.head').removeClass('active');
            // $this.next().slideUp(350);
        } else {
            $this.find('.inner').removeClass('show');
            $this.find('.head').removeClass('active');
            // $this.find('li .inner').slideUp(350);
            $this.find('.inner').toggleClass('show');
            $this.find('.head').toggleClass('active');
            // $this.next().slideToggle(350);
        }
    });


    $(document).mouseup(function (e) {
        let container = $('#toast-container');
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.hide();
        }
    });

});
