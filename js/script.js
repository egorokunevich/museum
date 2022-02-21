// Переменная для получения ширины окна пользователя: window.screen.width

// Переменные для бургер-меню
const burger = document.getElementById("burger-menu");
const nav = document.getElementById("header-nav");
const welcomeContent = document.getElementById("welcome__content");

// Переключение видимости навигации при клике на бургер-меню.
burger.onclick = function () {
  if (window.screen.width > 1024) {
    if (nav.classList.contains("nav_active")) {
      nav.classList.remove("nav_active");
    } else {
      nav.classList.add("nav_active");
    }
  } else if (window.screen.width <= 768) {
    if (nav.classList.contains("nav_active")) {
      nav.classList.remove("nav_active");
    } else {
      nav.classList.add("nav_active");
    }
  } else {
    if (nav.classList.contains("nav_active")) {
      nav.classList.remove("nav_active");
    } else {
      nav.classList.add("nav_active");
    }
    
    // Переключение видимости контента welcome.
    if (welcomeContent.classList.contains("welcome-content_active")) {
      welcomeContent.classList.remove("welcome-content_active");
    } else {
      welcomeContent.classList.add("welcome-content_active");
    }
  }

  // Переключение иконки бургер-меню.
  burger.classList.toggle("burger_active");
};

// Переменные для окна Booking
const closeBtn = document.getElementById("booking__close-btn");
const bookingWindow = document.getElementById("booking-window");
const buyBtn = document.getElementById("tickets__buy-btn");
closeBtn.onclick = function () {
  // Закрытие окна по кнопке "Close"
  bookingWindow.classList.remove("booking_active");
};
buyBtn.onclick = function () {
  // Открытие окна по кнопке "Buy now"
  bookingWindow.classList.add("booking_active");
};
