$(document).ready(function() {
    $('#discord-icon').on('click', function(){
        navigator.clipboard.writeText("Grimicron#2905");
    });
    $('.hideme').each(function(i) {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 5;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_object){
            $(this).animate({'opacity':'1'}, 500);
        }
    }); 
    $(window).scroll(function() {
        $('.hideme').each(function(i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'}, 500);
            }
        }); 
    });
});

$(function() {
    $('[data-toggle="popover"]').popover().click(function() {
        setTimeout(function() {
            $('[data-toggle="popover"]').popover('hide');
        }, 2000);
    });
});