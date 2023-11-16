let view = document.querySelector(".view");
// navbar
function navbar() {
  view.classList.toggle("end-0");
  document.querySelector("body").classList.toggle("overflow-hidden");
};
function navbar2() {
  view.classList.toggle("end-0");
  document.querySelector("body").classList.remove("overflow-hidden");
};
// back-to-top///
function scrollBtn() {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", function () {
  let topbtn = document.getElementById("topbtn");
  if (window.scrollY > 200) {
      topbtn.style.display = 'block';
  }
  else{
      topbtn.style.display = 'none';
  }
})

// preloder
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 2000);

$('.slidr').slick({
  dots: true,
  prevArrow: false,
  nextArrow: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3.1,
  autoplay: true,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4.1,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
  ]
});
$('.slidr-2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '.prev',
  nextArrow: '.next',
});
$('.slidr-1').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  prevArrow:false,
  nextArrow:false,

});
