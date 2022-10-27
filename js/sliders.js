
$('.big-slider').slick({
    lazyLoad: 'ondemand',
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".min-slider",
    draggable: false,
    swipe: false,
    fade: true,

  });

  $('.min-slider').slick({
    lazyLoad: 'ondemand',
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".big-slider",
    touchMove: false,
    focusOnSelect: true
});
  
//   let slidersMess = document.querySelectorAll(".big-slide");
//   let trakingSlide = document.getElementById('tracking-sliders');
// //   console.log(slidersMess);
//     let slider1 = document.querySelector('.min-slider');
//     trakingSlide.onmousedown = () => {
//         slider1.onmousemove = e => {
//             if (pageX !== 0) {
//                 trakingSlide.scrollLeft = trakingSlide.scrollLeft + (pageX - e.pageX);
//             }
//             pageX = e.pageX;
//         };
//         trakingSlide.onmouseup = () => {
//             document.onmousemove = null;
//             trakingSlide.onmouseup = null;
//         };
//         trakingSlide.ondragstart = () => {
//             return false;
//         };
//     }
// //   document.querySelectorAll(".big-slide").forEach(element => {
    
//   });