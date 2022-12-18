
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
} else {
swiper.classList.remove('swiper-container');
pagination.classList.add('hidden');
}}
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



