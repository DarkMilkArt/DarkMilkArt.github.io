
 document.addEventListener('DOMContentLoaded', () => {
     const width = window.innerWidth;
    if (width < 550){        
        
        const sliders = document.querySelectorAll('.swiper-container');
        const sliderBrends = sliders[0];
        const sliderDevices = sliders[1];
        const sliderServices = sliders[2];
               
    const slider = {
        direction: 'horizontal',    
        spaceBetween: 16,
        slidesPerView: 2,
        centeredSlides: true,
        slidesOffsetBefore: -110,
    
        
        pagination: {
        el: '.swiper-pagination',  
        type:'bullets',      
        },
    
        
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',        
        },          
    }; 
    const swiperBrends = new Swiper(sliderBrends, slider);
    const swiperDevices = new Swiper(sliderDevices, slider);
    const swiperServices = new Swiper(sliderServices, slider);
} else {
swiper.classList.remove('swiper-container');
pagination.classList.add('hidden');
}}
)


const burgerButton = document.querySelector('.nav-buttons__menu');
burgerButton.addEventListener('click',function(){
    const menu = document.querySelector('.main-menu');
    const asideBar = menu.querySelector('.aside-bar');
    const clicking = function () {
        menu.classList.add('main-menu--show');
        asideBar.classList.add('aside-bar--show');
    }
return clicking();
}
)
const hideMenu = document.querySelector('.top__close')
hideMenu.addEventListener('click',function(){
    const menu = document.querySelector('.main-menu');
    const asideBar = menu.querySelector('.aside-bar');
    const clickingClose = function () {          
        asideBar.classList.remove('aside-bar--show');
        menu.classList.remove('main-menu--show');       
    }
return clickingClose();
}
)


// window.addEventListener('resize', function() {
//     let width = window.innerWidth;
//     if (width < 550){ 
      
//     const buttonShowHide = document.querySelector('.brends-list__label-check-box');
//     const showText = document.querySelector('.brends-list__show-all-text');
//     const iconShowHide = document.querySelector('.brends-list__show-img');
//     showText.remove();
//     const desctopElements = [        
//         buttonShowHide,
//         iconShowHide, ];     
//         for(i=0;i<desctopElements.length;i++){
//             desctopElements[i].classList.toggle('hidden');
//         }    
//         console.log(iconShowHide);
//     }
// });



