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
    var $title = $('.footer-widgets__pages-title');
    var $cont = $('.footer-widgets__pages-content');
    $title.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if(!$this.hasClass('active-title')) {
            $cont.slideUp();
            $title.removeClass('active-title');
        }
            $this.next('.footer-widgets__pages-content').slideToggle();
            $this.toggleClass('active-title');
    });
}


function valid(form) { //валидация формы подписки
            stat_name.innerHTML = "";
            stat_email.innerHTML = "";

            var fail = false;
            var name = form.name.value;
            var email = form.email.value;

            var name_reg = /[a-zа-я0-9 ]{3,30}$/i;
            var email_reg = /.+@.+\.+./i;
            if (name_reg.test(name) == false){
                fail = true;
                stat_name.innerHTML = "Имя должно быть не короче 3 букв и не содержать спецсимволов";
            }else if (email_reg.test(email) == false){
                fail = true;
                stat_email.innerHTML = "Вы не ввели свою почту, либо ввели её не верно";
            }

            if(fail){
                return false;
            }else{
                return true;
            }
        }


