$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
   
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:true,
            nav:false,
            autoplay:true,
            autoplayTimeout:5000
            
        }
    }
})