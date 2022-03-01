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
    // if (welcomeContent.classList.contains("welcome-content_active")) {
    //   welcomeContent.classList.remove("welcome-content_active");
    // } else {
    //   welcomeContent.classList.add("welcome-content_active");
    // }
  }

  // Переключение иконки бургер-меню.
  burger.classList.toggle("burger_active");
};
document.onclick = function () {
  if (
    document.documentElement.clientWidth <= 1024 &&
    document.documentElement.clientWidth > 768 &&
    nav.classList.contains("nav_active")
  ) {
    welcomeContent.classList.add("welcome-content_active");
  } else {
    welcomeContent.classList.remove("welcome-content_active");
  }
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
  basicPrice.innerHTML = bookingBasicAmount.value * 20 + " €";
  seniorPrice.innerHTML = bookingSeniorAmount.value * 10 + " €";
  overviewTotal.innerHTML =
    bookingBasicAmount.value * 20 + bookingSeniorAmount.value * 10 + " €";

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

// Переменная, содержащая цену за билет
const price20 = 20;
const price10 = 10;

// Кнопка "+" в booking
function bookingAdd(add, amount, price, overviewAmount, priceVar) {
  add.onclick = function () {
    amount.value++;
    overviewAmount.innerHTML = amount.value;
    price.innerHTML = amount.value * priceVar + " €";
    overviewTotal.innerHTML =
      bookingBasicAmount.value * 20 + bookingSeniorAmount.value * 10 + " €";
  };
}

// Кнопка "-" в booking
function bookingRemove(remove, amount, price, overviewAmount, priceVar) {
  remove.onclick = function () {
    if (amount.value > 0) {
      amount.value--;
      overviewAmount.innerHTML = amount.value;
      price.innerHTML = amount.value * priceVar + " €";
      overviewTotal.innerHTML =
        bookingBasicAmount.value * 20 + bookingSeniorAmount.value * 10 + " €";
    } else {
      amount.value = 0;
      overviewAmount.innerHTML = amount.value;
      price.innerHTML = amount.value * priceVar + " €";
      overviewTotal.innerHTML =
        bookingBasicAmount.value * 20 + bookingSeniorAmount.value * 10 + " €";
    }
  };
}

// Booking Basic Stepper
bookingAdd(
  bookingBasicAdd,
  bookingBasicAmount,
  basicPrice,
  overviewBasicAmount,
  price20
);
bookingRemove(
  bookingBasicRemove,
  bookingBasicAmount,
  basicPrice,
  overviewBasicAmount,
  price20
);

// Booking Senior Stepper
bookingAdd(
  bookingSeniorAdd,
  bookingSeniorAmount,
  seniorPrice,
  overviewSeniorAmount,
  price10
);
bookingRemove(
  bookingSeniorRemove,
  bookingSeniorAmount,
  seniorPrice,
  overviewSeniorAmount,
  price10
);

// Кнопка "+" в Tickets
function ticketsAdd(add, amount) {
  add.onclick = function () {
    amount.value++;
    ticketsTotal.innerHTML =
      "Total: " +
      (ticketsBasicAmount.value * 20 + ticketsSeniorAmount.value * 10) +
      " €";
  };
}

// Кнопка "-" в Tickets
function ticketsRemove(remove, amount) {
  remove.onclick = function () {
    if (amount.value > 0) {
      amount.value--;
      ticketsTotal.innerHTML =
        "Total: " +
        (ticketsBasicAmount.value * 20 + ticketsSeniorAmount.value * 10) +
        " €";
    } else {
      amount.value = 0;
      ticketsTotal.innerHTML =
        "Total: " +
        (ticketsBasicAmount.value * 20 + ticketsSeniorAmount.value * 10) +
        " €";
    }
  };
}

// Tickets Steppers
ticketsAdd(ticketsBasicAdd, ticketsBasicAmount);
ticketsRemove(ticketsBasicRemove, ticketsBasicAmount);
ticketsAdd(ticketsSeniorAdd, ticketsSeniorAmount);
ticketsRemove(ticketsSeniorRemove, ticketsSeniorAmount);

// Обновляет сумму Total в Tickets при обновлении страницы
window.onload = (event) => {
  ticketsTotal.innerHTML =
    "Total: " +
    (ticketsBasicAmount.value * 20 + ticketsSeniorAmount.value * 10) +
    " €";
};


//explore slider

let sliderControl = document.querySelector("div.explore-slider__control");
let sliderAfter = document.querySelector("div.after-container");
let rangeThumb = document.querySelector("div.explore-slider input[name=exploreRange]");

rangeThumb.oninput = function() {
  sliderControl.style.left = rangeThumb.value + "%";
  sliderAfter.style.width = (100 - rangeThumb.value) + "%";
  console.log("value: " + rangeThumb.value);
  console.log("width: " + sliderAfter.style.width);
}

