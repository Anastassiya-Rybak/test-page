const swiper = new Swiper('.big-slider', {
    simulateTouch: false,

    thumbs: {
        swiper: {
            el: '.min-slider',
            edgeSwipeDetection: true,
            slideToClickedSlide: true,
            slidesPerView: 5,
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true
            },

        }
    }
 });

//   const swiperMin = new Swiper('.min-slider', {
//     edgeSwipeDetection: true,
//     slideToClickedSlide: true,
//     slidesPerView: 5,
//     scrollbar: {
//       el: '.swiper-scrollbar',
//       draggable: true
//     },
// .  });