var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
     pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});


var nav =document.querySelector('nav');
window.addEventListener('scroll',function(){
    if(window.pageYOffset > 100){
        nav.classList.add('bg-darkblue','shadow');
    }else{
        nav.classList.remove('bg-darkblue');
    }
})
