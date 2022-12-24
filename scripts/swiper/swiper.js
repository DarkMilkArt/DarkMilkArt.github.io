
 document.addEventListener('DOMContentLoaded', () => {
     const width = window.innerWidth;
    if (width < 550){        
        
        const sliderBrends = document.querySelector('.brends-list__swiper');
        const sliderDevices = document.querySelector('.devices-list__swiper');
        const sliderServices = document.querySelector('.services-list__swiper');
        
               
    const brendsSwiper = {
        direction: 'horizontal',    
        spaceBetween: 16,
        slidesPerView: 2,
        centeredSlides: true,
        slidesOffsetBefore: -110,
    
        
        pagination: {
        el: '.brends-pag', 
        type:'bullets',     
        },
    
        
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',        
        },         
    }; 


    const devicesSwiper = {
        direction: 'horizontal',    
        spaceBetween: 16,
        slidesPerView: 2,
        centeredSlides: true,
        slidesOffsetBefore: -110,
    
        
        pagination: {
        el: '.devices-pag', 
        type:'bullets',     
        },
    
        
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',        
        },         
    }; 

    const servicesSwiper = {
        direction: 'horizontal',    
        spaceBetween: 16,
        slidesPerView: 2,
        centeredSlides: true,
        slidesOffsetBefore: -110,
    
        
        pagination: {
        el: '.services-pag', 
        type:'bullets',          
        },
    
        
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',        
        },         
    }; 


    const swiperBrends = new Swiper(sliderBrends, brendsSwiper);
    const swiperDevices = new Swiper(sliderDevices, devicesSwiper);
    const swiperServices = new Swiper(sliderServices, servicesSwiper);
}}
)


// main-menu

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
})

// request-menu

const requestButtons = document.querySelectorAll('.contacts__chat');
const popupRequestButton = requestButtons[0];
const titleRequestButton = requestButtons[1];

titleRequestButton.addEventListener('click', function(){  
    const requestMenu = document.querySelector('.request-menu');
    const requestBar = requestMenu.querySelector('.request');    

    const clicking = function () {
      requestMenu.classList.add('request-menu--show');
      requestBar.classList.add('request--show');        
    }
return clicking();
})

popupRequestButton.addEventListener('click', function () {  
    const requestMenu = document.querySelector('.request-menu');
    const requestBar = requestMenu.querySelector('.request');
    const menu = document.querySelector('.main-menu');
    const asideBar = menu.querySelector('.aside-bar');

    const clicking = function () {
      requestMenu.classList.add('request-menu--show');
        requestBar.classList.add('request--show');
        asideBar.classList.remove('aside-bar--show');
      menu.classList.remove('main-menu--show');
    }
return clicking();
})

const hideRequest = document.querySelector('.request__close')
hideRequest.addEventListener('click', function () {
    const requestMenu = document.querySelector('.request-menu');
    const requestBar = requestMenu.querySelector('.request');

    const clickingClose = function () {      
        requestBar.classList.remove('request--show');
        requestMenu.classList.remove('request-menu--show');       
    }
return clickingClose();
})

// call-menu

const callButtons = document.querySelectorAll('.contacts__call');
const popupCallButton = callButtons[0];
const titleCallButton = callButtons[1];

titleCallButton.addEventListener('click', function(){  
    const callMenu = document.querySelector('.call-menu');
    const callBar = callMenu.querySelector('.call');    

    const clicking = function () {
      callMenu.classList.add('call-menu--show');
      callBar.classList.add('call--show');        
    }
return clicking();
})

popupCallButton.addEventListener('click', function () {  
    const callMenu = document.querySelector('.call-menu');
    const callBar = callMenu.querySelector('.call');
    const menu = document.querySelector('.main-menu');
    const asideBar = menu.querySelector('.aside-bar');

    const clicking = function () {
      callMenu.classList.add('call-menu--show');
        callBar.classList.add('call--show');
        asideBar.classList.remove('aside-bar--show');
      menu.classList.remove('main-menu--show');
    }
return clicking();
})

const hideCall = document.querySelector('.call__close')
hideCall.addEventListener('click', function () {
    const callMenu = document.querySelector('.call-menu');
    const callBar = callMenu.querySelector('.call');

    const clickingClose = function () {      
        callBar.classList.remove('call--show');
        callMenu.classList.remove('call-menu--show');       
    }
return clickingClose();
})
