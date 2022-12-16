
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
}})

let buttonShowHide = document.querySelector('.button-show-more');
let showText = document.querySelector('.brends-list__show-all-text::after');
let hideText = document.querySelector('.brends-list__show-all-text::before');
let iconShowHide = document.querySelector('.brends-list__show-img');


window.addEventListener('resize', function() {
    var desctopElements = {
        showText,
        hideText,
        buttonShowHide,
        iconShowHide,
   };
  const width = window.innerWidth;
  if (width < 550){  

 for ( let i=0; i <= desctopElements.length; i++ ){
    var elementHide;
     let item = desctopElements[i].classList.add('hidden');
     elementHide +=  item;
    
 } return elementHide;
}
});
// hideFunction(desctopElements);


//  addClass = function(elememt, elementClass) {
//    item = elememt.classList.add(elementClass);
//  return item;
//  }
//  addClass(showText,'hidden');
//  addClass(hideText,'hidden');
//  addClass(buttonShowHide,'hidden');
//  addClass(iconShowHide,'hidden');
//  showText.classList.add('hidden');
//  hideText.classList.add('hidden');
//  buttonShowHide.classList.add('hidden');
//  iconShowHide.classList.add('hidden');

// } else {
// const swiper = document.querySelector('.brends-list__swiper');
// swiper.classList.remove('swiper-container');
// pagination.classList.add('hidden');
// }
