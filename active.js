// Инициализация Swiper
let myImageSlider = new Swiper(".image-slider", {
  // Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Настройка перемещения сладеров

  // Включение/отключение
  // Перетаскивание на ПК
  simulateTouch: true,
  // Чуствительность свайпа
  touchRatio: 1,
  // Угол срабатывания свайпа/перетаскивание
  touchAngle: 45,
  // Курсор перетаскивания
  grabCursor: true,

  //   переключение при клике на слайд
  slideToClickedSlide: true,

  // Навигация по хешу
  hashNavigation: {
    // Отслеживать состояние
    watchState: true,
  },

  // Управление клавиатурой
  keyboard: {
    // Включить/Выключить
    enabled: true,
    // Включить/Выключить
    // Только когда слайдер в пределах вьюпорта
    onlyInViewport: true,
    // Включить/Выключить
    // Управление клавишами
    // pageUp, pageDown
    pageUpDown: true,
  },

  mousewheel: {
    // Чувствительность колеса мыши
    sensitivity: 1,
    // Класс объекта на котором будет срабатывать прокрутка мыщью.
    EventTarget: ".image-slider",
  },

  // Автовысота
  autoHeight: true,

  // Количество слайдов для показа
  slidesPerView: 3,

  // Отступ
  spaceBetween: 30,

  // Свободный режим
  freeMode: false,

  // // Автопрокрутка
  // autoplay: {
  //   // Пауза между прокруткой
  //   delay: 1500,
  //   // Закончить на последнем слайде
  //   stopOnLastSlide: false,
  //   // Отключить после ручного переключения
  //   disableOnInteraction: true,
  // },

  // Скорость
  speed: 800,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// Ещё один слайдер
let myTextSlider = new Swiper(".text-slider", {
  // Кол-во слайдов для показа
  slidesPerView: 3,
  // Отступы между слайдами
  spaceBetween: 30,
});

// myImageSlider.controller.control = myTextSlider;
// myTextSlider.controller.control = myImageSlider;

// Запуск автопрокрутки при наведении
let sliderBlock = document.querySelector(".image-slider");

// myImageSlider - это переменная которой присвоен слайдер

sliderBlock.addEventListener("mouseenter", function (e) {
  myImageSlider.params.autoplay.disableOnInteraction = false;
  myImageSlider.params.autoplay.delay = 500;
  myImageSlider.autoplay.start();
});
sliderBlock.addEventListener("mouseleave", function (e) {
  myImageSlider.autoplay.stop();
});
