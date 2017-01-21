$(document).ready(function () {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener("click", function (e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active"): this.classList.add("is-active");
        });
    }

    $('.single-item').slick({
        dots: true,
        /* Just changed this to get the bottom dots navigation */
        infinite: true,
        speed: 300,

        slidesToScroll: 1,
        arrows: true
    });


    $('.nav-1').localScroll({
        hash: true,
        offset: -100,
        duration: 1000
    });
    $('body').localScroll({
        hash: true,
        offset: -100,
        duration: 1000
    });
    //    $('.nav-1').localScroll({duration:800});

    $('.slick-arrow').addClass('disappear');

    $('.slick-dots').addClass('disappear');

    
//    var hamburger = function(){
//        $('.nav-1').removeClass('expanded');
//    }
//    
//    $('.c-hamburger').on("click", function(){
//        hamburger();
//        $('.nav-1').addClass('expanded');
//        
//    })
    
    (function($) {
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));
    
    
$('.c-hamburger').clickToggle(function() {   
    $('nav-1').animate({
        height: "290px"
    }, 1500);
},
function() {
    $('.nav-1').animate({
        height: "50px"
    }, 1500);
});
    //HIGHLIGHT MOVE TEXT LI

    $(".heightchange").on("mouseenter", function () {
        $(this).finish().animate({
            marginLeft: "-40px"
        }, 200)
    });

    var pClickHandler = function () {
        $('.heightchange').finish().animate({
            marginLeft: "0px"
        }, 200)
    };
    $(".heightchange").on("mouseleave", pClickHandler);

    //ALL VAR
    var closeVelo = function () {
        $("#velo .fade").removeClass('expanded', 2000);
        $("#velo.heightchange").removeClass('expanded', 2000);
        $(".picture-5").addClass('disappear');
        $("#close5").addClass('disappear');
        $(".work ul #velo").on("mouseleave", pClickHandler);
        $('#velo .slick-arrow').addClass('disappear');
        $('#velo .slick-dots').addClass('disappear');
        $("#velo p").removeClass('make-black');
        $('.slick-next').addClass('none');
        pClickHandler();
    };
    var closeGofar = function () {
        $("#gofar .fade").removeClass('expanded', 2000);
        $("#gofar.heightchange").removeClass('expanded', 2000);
        $(".picture-6").addClass('disappear');
        $("#close6").addClass('disappear');
        $(".work ul #gofar").on("mouseleave", pClickHandler);
        $('#gofar .slick-arrow').addClass('disappear');
        $('#gofar .slick-dots').addClass('disappear');
        $("#gofar p").removeClass('make-black');
        $('.slick-next').addClass('none');
        pClickHandler();
    };
    var closeDarl = function () {
        // close picture
        $("#darl .fade").removeClass('expanded', 3000);
        // close li
        $("#darl.heightchange").removeClass('expanded', 3000);
        // make picture respond to mouse hover
        $(".picture-1").addClass('disappear');
        // make close button disappear
        $("#close1").addClass('disappear');
        // turn on moving text
        $(".work ul #darl").on("mouseleave", pClickHandler);
        $(".jcarousel-wrapper").addClass('none');

        $("#darl p").removeClass('make-black');
        $('#darl .slick-arrow').addClass('disappear');

        $('#darl .slick-dots').addClass('disappear');
        $('.slick-next').addClass('none');
        $('.slick-prev').addClass('none');
        pClickHandler();
    };
    var closeChil = function () {
        $("#chil .fade").removeClass('expanded', 2000);
        $("#chil.heightchange").removeClass('expanded', 2000);
        $(".picture-2").addClass('disappear');
        $("#close2").addClass('disappear');
        $(".work ul #chil").on("mouseleave", pClickHandler);

        $('#chil .slick-arrow').addClass('disappear');
        $('#chil .slick-dots').addClass('disappear');
        $('.slick-next').addClass('none');
        $('.slick-prev').addClass('none');

        pClickHandler();

    };
    var closeLawn = function () {
        $("#lawn .fade").removeClass('expanded', 2000);
        $("#lawn.heightchange").removeClass('expanded', 2000);
        $(".picture-3").addClass('disappear');
        $("#close3").addClass('disappear');
        $(".work ul #lawn").on("mouseleave", pClickHandler);
        $('#lawn .slick-arrow').addClass('disappear');
        $('#lawn .slick-dots').addClass('disappear');
        $("#lawn p").removeClass('make-black');
        $('.slick-next').addClass('none');
        $('.slick-prev').addClass('none');

        pClickHandler();
    };
    var closeAque = function () {
        $("#aque .fade").removeClass('expanded', 2000);
        $("#aque.heightchange").removeClass('expanded', 2000);
        $(".picture-4").addClass('disappear');
        $("#close4").addClass('disappear');
        $(".work ul #aque").on("mouseleave", pClickHandler);
        $('#aque .slick-arrow').addClass('disappear');
        $('#aque .slick-dots').addClass('disappear');
        $('.slick-next').addClass('none');
        $('.slick-prev').addClass('none');
        pClickHandler();

    };
    //FOR DARL
    $("#darl").click(function () {
        closeAque();
        closeChil();
        closeLawn();
        closeVelo();
        closeGofar();
        // expand picture
        $("#darl .fade").addClass('expanded', 2000);
        // expand li
        $("#darl.heightchange").addClass('expanded', 2000);
        // stop picture from fadeOut
        $(".picture-1").removeClass('disappear');
        // make close button appear
        $("#close1").removeClass('disappear');
        // stop text from moving
        $(".work ul #darl").off('mouseleave');
        //make carousel appear
        $(".jcarousel-wrapper").removeClass('none');
        //make carousel 2 appear

        $("#darl p").addClass('make-black');
        $('#darl .slick-arrow').removeClass('disappear');

        $('#darl .slick-dots').removeClass('disappear');
        $('.slick-next').removeClass('none');
        $('.slick-prev').removeClass('none');
    });



    $("#close1").click(closeDarl);

    //FOR CHIL
    $("#chil").click(function () {
        closeDarl();
        closeAque();
        closeLawn();
        closeVelo();
        closeGofar();
        $("#chil .fade").addClass('expanded', 2000);
        $("#chil.heightchange").addClass('expanded', 2000);
        $(".picture-2").removeClass('disappear');
        $("#close2").removeClass('disappear');
        $(".work ul #chil").off('mouseleave');
        $("#chil .single-item").removeClass('none', 1000);
        $('#chil .slick-arrow').removeClass('disappear');
        $('#chil .slick-dots').removeClass('disappear');
        $('.slick-next').removeClass('none');
        $('.slick-prev').removeClass('none');
    });


    $("#close2").click(closeChil);

    //FOR LAWN
    $("#lawn").click(function () {
        closeAque();
        closeChil();
        closeDarl();
        closeVelo();
        closeGofar();
        $("#lawn .fade").addClass('expanded', 2000);
        $("#lawn.heightchange").addClass('expanded', 2000);
        $(".picture-3").removeClass('disappear');
        $("#close3").removeClass('disappear');
        $(".work ul #lawn").off('mouseleave');
        $('#lawn .slick-arrow').removeClass('disappear');
        $('#lawn .slick-dots').removeClass('disappear');
        $("#lawn p").addClass('make-black');
        $('.slick-next').removeClass('none');
        $('.slick-prev').removeClass('none');
    });

    $("#close3").click(closeLawn);

    //FOR AQUE
    $("#aque").click(function () {
        closeChil();
        closeDarl();
        closeLawn();
        closeVelo();
        closeGofar();
        $("#aque .fade").addClass('expanded', 2000);
        $("#aque.heightchange").addClass('expanded', 2000);
        $(".picture-4").removeClass('disappear');
        $("#close4").removeClass('disappear');
        $(".work ul #aque").off('mouseleave');
        $('#aque .slick-arrow').removeClass('disappear');
        $('#aque .slick-dots').removeClass('disappear');
        $('.slick-next').removeClass('none');
        $('.slick-prev').removeClass('none');
    });

    $("#close4").click(closeAque);

    //FOR VELO
    $("#velo").click(function () {
        closeAque();
        closeChil();
        closeDarl();
        closeLawn();
        closeGofar();
        $("#velo .fade").addClass('expanded', 2000);
        $("#velo.heightchange").addClass('expanded', 2000);
        $(".picture-5").removeClass('disappear');
        $("#close5").removeClass('disappear');
        $(".work ul #velo").off('mouseleave');
        $('#velo .slick-arrow').removeClass('disappear');
        $('#velo .slick-dots').removeClass('disappear');
        $("#velo p").addClass('make-black');
        $('.slick-next').removeClass('none');
        $('.slick-prev').removeClass('none');
    });

    $("#close5").click(closeVelo);
    
    //FOR GOFAR
    $("#gofar").click(function () {
        closeAque();
        closeChil();
        closeDarl();
        closeLawn();
        closeVelo();
        $("#gofar .fade").addClass('expanded', 2000);
        $("#gofar.heightchange").addClass('expanded', 2000);
        $(".picture-6").removeClass('disappear');
        $("#close6").removeClass('disappear');
        $(".work ul #gofar").off('mouseleave');
        $('#gofar .slick-arrow').removeClass('disappear');
        $('#gofar .slick-dots').removeClass('disappear');
        $("#gofar p").addClass('make-black', 2000);
        $('.slick-next').removeClass('none');
        $('.slick-prev').removeClass('none');
 
    });

    $("#close6").click(closeGofar);


    //    //CAROUSEL
    //    
    //    (function($) {
    //    $(function() {
    //        $('.jcarousel').jcarousel();
    //
    //        $('.jcarousel-control-prev')
    //            .on('jcarouselcontrol:active', function() {
    //                $(this).removeClass('inactive');
    //            })
    //            .on('jcarouselcontrol:inactive', function() {
    //                $(this).addClass('inactive');
    //            })
    //            .jcarouselControl({
    //                target: '-=1'
    //            });
    //
    //        $('.jcarousel-control-next')
    //            .on('jcarouselcontrol:active', function() {
    //                $(this).removeClass('inactive');
    //            })
    //            .on('jcarouselcontrol:inactive', function() {
    //                $(this).addClass('inactive');
    //            })
    //            .jcarouselControl({
    //                target: '+=1'
    //            });
    //
    //        $('.jcarousel-pagination')
    //            .on('jcarouselpagination:active', 'a', function() {
    //                $(this).addClass('active');
    //            })
    //            .on('jcarouselpagination:inactive', 'a', function() {
    //                $(this).removeClass('active');
    //            })
    //            .jcarouselPagination();
    //    });
    //})(jQuery);


    //SCROLL TO IMAGE

    function goToByScroll(id) {

        // Scroll
        $('html,body').animate({
                scrollTop: $("#" + id).offset().top - 200
            },
            1000);
    }

    $(".work > ul > li").click(function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr("id"));
    });

//    $('.c-hamburger').toggle(
//        function(){
//            $('.nav-1').animate({
//                height: "300", 
//            }, 1000);
//        },
//        function(){
//            $('.nav-1').animate({
//                height: "300", 
//            }, 1000);     

//    });
    
});

