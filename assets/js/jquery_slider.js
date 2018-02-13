(function ($, undefined) {

    var slide_width = $('.slide_list > li').first().width();
    var n_slides = $('.slide_list > li').length;

    $('.slide_box').width(slide_width).css('overflow', 'hidden');
    $('.slide_list').css('display', 'flex').width(slide_width * n_slides);

    $('.next').on('click', function () {
        $('.slide_list').animate({
            'margin-left': (-1) * slide_width
        }, 500, function () {
            $('.slide_list > li').last().after($('.slide_list > li').first());
            $('.slide_list').css('margin-left', 0);
        });
    });


    $('.prev').on('click', function () {

        $('.slide_list > li').first().before($('.slide_list > li').last());
        $('.slide_list').css('margin-left', (-1) * slide_width);

        $('.slide_list').animate({
            'margin-left': 0
        }, 500);
    });


})(jQuery);