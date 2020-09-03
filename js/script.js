/*       DROPDOWN MENU      */
(function() {  
    const menu = document.querySelector('.navbar__header');
    const burger = document.querySelector('.header_burder');
      burger.addEventListener('click',() => {
          burger.classList.toggle('active');
          menu.classList.toggle('active');
      });
  }());

/*       SLIDER      */
$('.slider_main').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 900,
    arrows: false,
    autoplaySpeed: 10000,
    dots: true,
    infinite:true,
    responsive:[
        {
          breakpoint: 875,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
    ]  
});
                  