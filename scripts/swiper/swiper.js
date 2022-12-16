
 document.addEventListener('DOMContentLoaded', () => {
     const width = window.innerWidth;
    if (width < 550){        
        
        const slider = document.querySelector('.brends-list__swiper');
    const swiper = new Swiper(slider, {
        // Optional parameters
        direction: 'horizontal',    
        spaceBetween: 16,
        slidesPerView: 2,
        centeredSlides: true,
        slidesOffsetBefore: -110,
    
        // If we need pagination
        pagination: {
        el: '.swiper-pagination',  
        type:'bullets',      
        },
    
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',        
        },    
        
    });
    
    let buttonShowHide = document.querySelector('.button-show-more');
    let showText = document.querySelector('.brends-list__show-all-text::after');
    let hideText = document.querySelector('.brends-list__show-all-text::before');
    let iconShowHide = document.querySelector('.brends-list__show-img');
    showText.classList.add('hidden');
    hideText.classList.add('hidden');
    buttonShowHide.classList.add('hidden');
    iconShowHide.classList.add('hidden');

 } else {
 const swiper = document.querySelector('.brends-list__swiper');
 const slide = document.querySelectorAll('.brends-list__block');
 pagination = document.querySelector('.brends-list__pagination');
 swiper.classList.remove('swiper-container');
 slide.classList.remove('swiper-slide');
 pagination.classList.add('hidden');
}
 })


