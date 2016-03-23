(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 30)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('#collapsingNavbar li a').click(function(el) {
        /* always close responsive nav after click */
        $('.navbar-toggler:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

    window.location.hash.split('#tag=').map(function(v){
        if (v !== "") {
            $(document.getElementById(v)).focus().click();
        }
    })
})(jQuery);

function tags(el) {
    if ($(el).hasClass("tag-active")) {
        $(el).removeClass("tag-active");
        $(el).children().hide();
        $('.post').show();
        window.location.hash = 'three';
        return true;
    }
    $(".tag-active").removeClass("tag-active")
    $('.post').hide();
    $(el).addClass("tag-active");
    $(el).children().show();
    var tag = el.innerHTML.split('(')[0].trim();
    var postsTags = document.getElementsByClassName('tags-mark');
    for (var i =0; i < postsTags.length; i++ ) {
        var tags = postsTags[i].innerHTML.split(',');
        for (var k=0;k < tags.length; k++ ){
            if (tags[k].trim() === tag) {
                $(postsTags[i].parentElement.parentElement.parentElement.parentElement).show();
                break;
            }
        }
    }
    window.location.hash = 'tag=' + tag;
}