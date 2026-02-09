$(document).ready(function(){
    // Back to top button visibility
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').css("display","block");
        } else {
            $('#back-to-top').css("display","none");
        }
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100 // Adjust offset for fixed header
            }, 1000);
        }
    });
});
