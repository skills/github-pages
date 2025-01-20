// Scrollspy
var spy = new Gumshoe('#nav  a');
// Burger
   $('.burger').on('click', function (event) {
        $(this).toggleClass('open');
        $('.navigation-bar').toggleClass('show');
    })

    // Darkmode
    $('.darkmode-btn').on('click', function (event) {
        $('body').toggleClass('darkmode');
    })

    // modal
    $('.btn-view').on('click', function (event) {
        $('.modal-container').addClass('active');
    })
    $('.close-modal').on('click', function(event){
        $('.modal-container').removeClass('active');
    })

// Sticky navbar
$(document).ready(function(){
	$(window).bind('scroll', function() {
		var navHeight = $('header').height();
		if ($(window).scrollTop() > navHeight) {
			$('header').addClass('fixed');
		 }
		else {
			$('header').removeClass('fixed');
		 }
	});
});
// Scroll to TOP
var btn = $('.scrollup');
$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});

    // testmonial
    $('.testmonial-slider').owlCarousel({
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        loop: true,
        responsiveClass: true,
        nav: false,
        dots: true,
        smartSpeed: 700,
        margin:30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
    // Reveal animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '90px',
        duration: 2000,
        reset: true
    });
    ScrollReveal().reveal('.social-icon, .feature-item, .progressbar-item, .services-block, .project-item, .form-item', { interval: 100 });
    ScrollReveal().reveal('.sub-heading');
    ScrollReveal().reveal('.col-right')
    ScrollReveal().reveal('.heading', { delay: 100 });
    ScrollReveal().reveal('.heading2', { delay: 200 });
    ScrollReveal().reveal('.paragraph', { delay: 300 });
    ScrollReveal().reveal('.btn-blk', { delay: 400 });
    // About
    ScrollReveal().reveal('.about-col-left');
    ScrollReveal().reveal('.about-heading');
    ScrollReveal().reveal('.about2', { delay: 100 });
    ScrollReveal().reveal('.about3', { delay: 200 });
    ScrollReveal().reveal('.about-btn-blk', { delay: 300 });
    // CTA
    ScrollReveal().reveal('.cta-inner', { delay: 100 })
    ScrollReveal().reveal('.btn-outline', { delay: 200 });
    // testmonail
    ScrollReveal().reveal('.testmonial-slider');
    // Contact form
    ScrollReveal().reveal('.contact-inner');



 