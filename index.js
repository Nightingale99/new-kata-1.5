let swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 3000, 
    disableOnInteraction: true,
  },  
  slidesPerView: 1.5,
  spaceBetween: 75,
});


if(window.innerWidth > 767) {
  swiper.destroy();
  swiper = 0;
}

window.addEventListener('resize', function(event) {
  if(event.target.innerWidth > 767 && swiper) {
    swiper.destroy();
    swiper = 0;
  } else if(event.target.innerWidth < 767 && !swiper) {
    swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      pagination: {
        el: '.swiper-pagination',
      },
    
      autoplay: {
        delay: 3000, 
        disableOnInteraction: true, 
      },
    
      slidesPerView: 1.5, // Количество видимых слайдов
      spaceBetween: 16,
    });
  }
}, true);

const showAll = document.querySelector('.brands__show-all');
showAll.addEventListener('click', (event) => {
  hiddens = document.querySelectorAll('.hidden, .tablet-hidden');
  if(hiddens[0].classList.contains('visible')){
    hiddens.forEach(element => {
      element.classList.remove('visible');
    });
    showAll.textContent = 'Показать все';
    showAll.classList.remove('brands__show-all--active');
  }else{
    hiddens.forEach(element => {
      element.className += ' visible';
    });
    showAll.textContent = 'Скрыть';
    showAll.className += ' brands__show-all--active'
  }
})