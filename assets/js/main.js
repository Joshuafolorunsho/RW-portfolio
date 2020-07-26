const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.nav-mobile')
hamburger.addEventListener('click', () => {
      header.classList.toggle('toggle');
})



$('.responsive').slick({
      autoplay: true,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });