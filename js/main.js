$(document).ready( function() {
    accordeonFooter();
    $('.header-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

});

function accordeonFooter () {
    var $list = $('.footer-widgets__pages-title');
    var $cont = $('.footer-widgets__pages-content');
    $list.on('click', function (e) {
        e.preventDefault();
        var $this = $(this).next(".footer-widgets__pages-content");
        // if (!$this) {
        //     $cont.slideUp();
        // }
        if(!$.contains($list.get(0), e.target)) {
            $cont.slideUp();
        }
            $this.slideToggle();
    });
}

