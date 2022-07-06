// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 600) {       
        $(".nav").css("background-color","rgb(35,33,35)",);   
    } else {
        $(".nav").css("background-color","rgba(0, 0, 0, .7)");   
    }
});

$(".menu-background").hide();

$('.menu-bar').click(function(){
    $(".city-bg, .nav, .Logo, .menu-bar, .name, .profile-pic, .quote, .banner, .icons, .about-me, .header, .container, .side-pic, .paragraph,.column,.skill-info,.skill-icons,.port-bg,.content,.header-portfolio,.portfolio-text,.quotes,.slider-body,.swiper,.my-Swiper,.repository,.swiper-button-next,.swiper-button-prev,.swiper-pagination,.swiper-wrapper,.project-content,.swiper-slide,.card,.img,.project-name,.fade-bg,.divided-row,.input-group,.footer").hide();
    $(".menu-background").show();
});

$('.home-menu,.about-menu,.portfolio-menu,.resume-menu,.contact-menu').click(function(){
    $(".menu-background").hide();
    $(".city-bg, .nav, .Logo, .menu-bar, .name, .profile-pic, .quote, .banner, .icons, .about-me, .header, .container, .side-pic, .paragraph,.column,.skill-info,.skill-icons,.port-bg,.content,.header-portfolio,.portfolio-text,.quotes,.slider-body,.swiper,.my-Swiper,.repository,.swiper-button-next,.swiper-button-prev,.swiper-pagination,.swiper-wrapper,.project-content,.swiper-slide,.card,.img,.project-name,.fade-bg,.divided-row,.input-group,.footer").show();
});