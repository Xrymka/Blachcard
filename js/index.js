// /* Burger menu */
// window.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('#burger').addEventListener('click', function() {
//     document.querySelector('#burger').classList.toggle('active'),
//     document.querySelector('#nav').classList.toggle('is-active')
//   });
// })


/* ===== 3rd-party libraries ===== */

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

var editionsSwiper = new Swiper('.editions__slider', {
  autoHeight: true,
  spaceBetween: 50,
	slidesPerView: 3,
	slidesPerGroup: 3,
  slidesPerColumn: 1,
	slidesPerColumnFill: 'row',
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var editionsSwiper = new Swiper('.projects__slider', {
  autoHeight: true,
  spaceBetween: 50,
	slidesPerView: 3,
	slidesPerGroup: 1,
  slidesPerColumn: 1,
  loop: true,
	slidesPerColumnFill: 'row',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/* Select */
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});

/* Accordion */
$(function() {
  $( "#accordion" ).accordion({
    active: false,
    collapsible: true,
    heightStyle: "content",
    // icons: { "header": "plus", "activeHeader": "minus" }
  });
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__content-list-item-btn').forEach(function(item) {
    item.addEventListener('click', function() {
      // $this.querySelector('.questions__list-item-btn').classList.toggle('actives')
      if (item.classList.contains('actives')) {
        item.classList.remove('actives');
      }
      else  {
        document.querySelectorAll('.catalog__content-list-item-btn').forEach(function(item) {
          item.classList.remove('actives');
        })
        item.classList.add('actives');
      }
    });
  });
});

/* Ellipse */
Ellipsis({
  ellipsis: '…',
  debounce: 0,
  responsive: true,
  className: '.clamp',
  lines: 1,
  portrait: null,
  break_word: true
});

/* Map */
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
      center: [55.75960, 37.637030],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
      zoom: 14,
      controls: [],
	}, {
		searchControlProvider: 'yandex#search'
	});


  var myPlacemark = new ymaps.Placemark([55.758542, 37.600993], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'image/mark.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-20, -20]
  });
  myMap.geoObjects.add(myPlacemark);
}

/* ===== End 3rd-party libraries Calls ===== */

/* Smooth scroll */
  document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header__up').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
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
// hidden dropdown, if click in any other area on page
window.addEventListener('click', function(event) {
  if (event.target.className != 'down-list-title') {
    document.querySelectorAll('.down__list').forEach(function(tabContent) {
      tabContent.classList.remove('active');
      tabContent.closest('li').classList.remove('is-active')
    });
  }
});

/* Viewbox */
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#loadMore').addEventListener('click', function() {
    document.querySelector('#loadMore').classList.add('event__list-item--hidden');
    document.querySelectorAll('.event__list-item').forEach(function(e) {
      e.classList.remove('event__list-item--hidden');
    });
  });
});
