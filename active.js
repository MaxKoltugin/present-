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

  // Количество слайдов для показа
  slidesPerView: 1,

  spaceBetween: 10,

  // Скорость
  speed: 800,

  // Брейк поинты (адаптив)
  // Ширина экрана
  breakpoints: {
    430: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
