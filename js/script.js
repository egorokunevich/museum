const screenWidth = window.screen.width;
console.log("screen width: ", screenWidth);
// burger menu
const burger = document.getElementById("burger-menu");
const nav = document.getElementById("header-nav");
const welcomeContent = document.getElementById("welcome__content");

// burger.onclick = function () {
//   if (window.screen.width > 1024) {
//     nav.classList.toggle("nav_active");
//     console.log(">1024px: toggle nav");
//   } else if (window.screen.width <= 768) {
//     nav.classList.toggle("nav_active");
//     console.log("<=768px: toggle nav");
//   } else {
//     nav.classList.toggle("nav_active");
//     welcomeContent.classList.toggle("welcome-content_inactive");
//     console.log("768px < .. <= 1024px: toggle nav, toggle content");
//   }
// };

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
    
    if (welcomeContent.classList.contains("welcome-content_active")) {
      welcomeContent.classList.remove("welcome-content_active");
    } else {
      welcomeContent.classList.add("welcome-content_active");
    }
  }

  burger.classList.toggle("burger_active");
};

// if (nav.classList.contains("nav_active")) {
//   nav.classList.remove("nav_active");
// } else {
//   nav.classList.add("nav_active");
// }
// if (welcomeContent.classList.contains("welcome-content_inactive")) {
//   welcomeContent.classList.remove("welcome-content_inactive");
// } else {
//   welcomeContent.classList.add("welcome-content_inactive");
// }

// booking form
const closeBtn = document.getElementById("booking__close-btn");
const bookingWindow = document.getElementById("booking-window");
const buyBtn = document.getElementById("tickets__buy-btn");
closeBtn.onclick = function () {
  // закрытие окна
  bookingWindow.classList.remove("booking_active");
};
buyBtn.onclick = function () {
  // открытие окна
  bookingWindow.classList.add("booking_active");
};
