// /* Burger menu */
// window.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('#burger').addEventListener('click', function() {
//     document.querySelector('#burger').classList.toggle('active'),
//     document.querySelector('#nav').classList.toggle('is-active')
//   });
// })


/* Swiper */
var heroSwiper = new Swiper('.hero__slider', {
  autoHeight: true,
  autoplay: {
    delay: 2000,
  },
  effect: 'fade',
  speed: 3000,
});

var galerrySwiper = new Swiper('.gallery__slider', {
  autoHeight: true,
  spaceBetween: 45,
	slidesPerView: 3,
	slidesPerColumn: 2,
	slidesPerColumnFill: 'row',
	slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* Search */
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#input__search').addEventListener('click', function() {
    this.classList.remove("focus-visible");
    document.querySelector('#btn__search').classList.add("is-active");
    this.placeholder = '';
  });

  document.querySelector('#input__search').addEventListener('input', function() {
    this.classList.remove("focus-visible");
  });

  document.querySelector('#input__search').addEventListener('blur', function() {
    this.placeholder = 'Поиск по сайту';
    document.querySelector('#btn__search').classList.remove("is-active");
  });
});


/* Dropdown */
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.header__down-list-item').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function() {

        let currentTabsBtn = this;
        this.classList.toggle('is-active');
        this.children[1].classList.toggle('active');

        document.querySelectorAll('.header__down-list-item').forEach(function(tabsBtn) {
          if (currentTabsBtn != tabsBtn) {
            tabsBtn.children[1].classList.remove('active');
            tabsBtn.classList.remove('is-active');
          }
        });
      });
  });
});

// скрываем выпадающие списки при клике в любой другой части сайта
window.addEventListener('click', function(event) {
  if (event.target.className != 'down-list-title') {
    document.querySelectorAll('.down__list').forEach(function(tabContent) {
      tabContent.classList.remove('active');
      tabContent.closest('li').classList.remove('is-active')
    });
  }
});

/* Select */
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});


// /* Accordion */
// $(function() {
//   $( "#accordion" ).accordion({
//     active: false,
//     collapsible: true,
//     heightStyle: "content",
//     // icons: { "header": "plus", "activeHeader": "minus" }
//   })
// })

// window.addEventListener('DOMContentLoaded', function() {
//   document.querySelectorAll('.questions__list-item-btn').forEach(function(item) {
//     item.addEventListener('click', function() {
//       // $this.querySelector('.questions__list-item-btn').classList.toggle('actives')
//       if (item.classList.contains('actives')) {
//         item.classList.remove('actives')
//       }
//       else  {
//         document.querySelectorAll('.questions__list-item-btn').forEach(function(item) {
//           item.classList.remove('actives')
//         })
//         item.classList.add('actives')
//       }
//     })
//   })
// })

