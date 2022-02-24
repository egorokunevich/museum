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


// Кол-во билетов в секции Tickets
const ticketsSeniorAmount = document.getElementById("ticketsSeniorAmount"); // Tickets: input=[number] Senior
const ticketsBasicAmount = document.getElementById("ticketsBasicAmount"); // Tickets: input=[number] Basic
// Кол-во билетов в форме
const bookingSeniorAmount = document.getElementById("booking_seniorAmount"); // Booking: input=[number] Senior
const bookingBasicAmount = document.getElementById("booking_basicAmount"); // Booking: input=[number] Basic
// Кол-во билетов в Overview
const overviewSeniorAmount = document.getElementById("overview_seniorAmount"); // Overview: senior amount
const overviewBasicAmount = document.getElementById("overview_basicAmount"); // Overview: basic amount
// Стоимость каждого типа билетов
const basicPrice = document.getElementById("basicPrice"); // Цена
const seniorPrice = document.getElementById("seniorPrice"); // Цена
// Общая стоимость в Overview
const overviewTotal = document.getElementById("overviewTotal");
// Общая стоимость в секции Tickets
const ticketsTotal = document.getElementById("ticketsTotal");
// Переменные для вызова формы Booking
const closeBtn = document.getElementById("booking__close-btn"); // Кнопка закрытия
const bookingWindow = document.getElementById("booking-window"); // Форма Booking
const buyBtn = document.getElementById("tickets__buy-btn"); // Кнопка BuyNow
closeBtn.onclick = function () {
  // Закрывает окно по кнопке "Close"
  bookingWindow.classList.remove("booking_active");
  ticketsBasicAmount.value = bookingBasicAmount.value;
  ticketsSeniorAmount.value = bookingSeniorAmount.value;
  ticketsTotal.innerHTML = "Total: " + overviewTotal.innerHTML;
};
buyBtn.onclick = function () {
  // Передаёт количество билетов из секции Tickets в форму Booking при вызове формы
  bookingSeniorAmount.value = ticketsSeniorAmount.value;
  bookingBasicAmount.value = ticketsBasicAmount.value;

  // Передаёт количество билетов в Overview при вызове формы
  overviewSeniorAmount.innerHTML = bookingSeniorAmount.value;
  overviewBasicAmount.innerHTML = bookingBasicAmount.value;

  // Считает стоимость каждого типа билета при вызове формы
  basicPrice.innerHTML = (bookingBasicAmount.value * 20) + " €";
  seniorPrice.innerHTML = (bookingSeniorAmount.value * 10) + " €";
  overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";

  // Открывает окно по кнопке "Buy now"
  bookingWindow.classList.add("booking_active");
};

const bookingBasicAdd = document.getElementById("booking_basicAdd");
const bookingBasicRemove = document.getElementById("booking_basicRemove");
const bookingSeniorAdd = document.getElementById("booking_seniorAdd");
const bookingSeniorRemove = document.getElementById("booking_seniorRemove");

const ticketsBasicAdd = document.getElementById("ticketsBasicAdd");
const ticketsBasicRemove = document.getElementById("ticketsBasicRemove");
const ticketsSeniorAdd = document.getElementById("ticketsSeniorAdd");
const ticketsSeniorRemove = document.getElementById("ticketsSeniorRemove");

// Booking Basic Stepper
bookingBasicAdd.onclick = function () {
  bookingBasicAmount.value++;
  overviewBasicAmount.innerHTML = bookingBasicAmount.value;
  basicPrice.innerHTML = (bookingBasicAmount.value * 20) + " €";
  overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";
};
bookingBasicRemove.onclick = function () {
  if(bookingBasicAmount.value > 0) {
  bookingBasicAmount.value--;
  overviewBasicAmount.innerHTML = bookingBasicAmount.value;
  basicPrice.innerHTML = (bookingBasicAmount.value * 20) + " €";
  overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";
  }
  else  {
    bookingBasicAmount.value = 0;
    overviewBasicAmount.innerHTML = bookingBasicAmount.value;
    basicPrice.innerHTML = (bookingBasicAmount.value * 20) + " €";
    overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";
  }
};

// Booking Senior Stepper
bookingSeniorAdd.onclick = function () {
  bookingSeniorAmount.value++;
  overviewSeniorAmount.innerHTML = bookingSeniorAmount.value;
  seniorPrice.innerHTML = (bookingSeniorAmount.value * 10) + " €";
  overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";
};
bookingSeniorRemove.onclick = function () {
  if(bookingSeniorAmount.value > 0) {
  bookingSeniorAmount.value--;
  overviewSeniorAmount.innerHTML = bookingSeniorAmount.value;
  seniorPrice.innerHTML = (bookingSeniorAmount.value * 10) + " €";
  overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";
  }
  else  {
    bookingSeniorAmount.value = 0;
    overviewSeniorAmount.innerHTML = bookingSeniorAmount.value;
    seniorPrice.innerHTML = (bookingSeniorAmount.value * 10) + " €";
    overviewTotal.innerHTML = ((bookingBasicAmount.value * 20)+(bookingSeniorAmount.value * 10)) + " €";
  }
};


// Обновляет сумму Total в Tickets при обновлении страницы
window.onload = (event) => {
  ticketsTotal.innerHTML = "Total: " + ((ticketsBasicAmount.value * 20)+(ticketsSeniorAmount.value * 10)) + " €";
};

// Tickets Basic Stepper
ticketsBasicAdd.onclick = function() {
  ticketsBasicAmount.value++;
  ticketsTotal.innerHTML = "Total: " + ((ticketsBasicAmount.value * 20)+(ticketsSeniorAmount.value * 10)) + " €";
}
ticketsBasicRemove.onclick = function () {
  if(ticketsBasicAmount.value > 0) {
    ticketsBasicAmount.value--;
    ticketsTotal.innerHTML = "Total: " + ((ticketsBasicAmount.value * 20)+(ticketsSeniorAmount.value * 10)) + " €";
    }
    else  {
      ticketsBasicAmount.value = 0;
      ticketsTotal.innerHTML = "Total: " + ((ticketsBasicAmount.value * 20)+(ticketsSeniorAmount.value * 10)) + " €";
    }
}
// Tickets Senior Stepper
ticketsSeniorAdd.onclick = function() {
  ticketsSeniorAmount.value++;
  ticketsTotal.innerHTML = "Total: " + ((ticketsBasicAmount.value * 20)+(ticketsSeniorAmount.value * 10)) + " €";
}
ticketsSeniorRemove.onclick = function () {
  if(ticketsSeniorAmount.value > 0) {
    ticketsSeniorAmount.value--;
    ticketsTotal.innerHTML = "Total: " + ((ticketsBasicAmount.value * 20)+(ticketsSeniorAmount.value * 10)) + " €";
    }
    else  {
      ticketsSeniorAmount.value = 0;
      ticketsTotal.innerHTML = "Total: " + ((ticketsBasicAmount.value * 20)+(ticketsSeniorAmount.value * 10)) + " €";
    }
}