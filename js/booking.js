"use strict";

// The tickets' amount in "Tickets" section
const ticketsSeniorAmount = document.getElementById("ticketsSeniorAmount"); // Tickets: input=[number] Senior
const ticketsBasicAmount = document.getElementById("ticketsBasicAmount"); // Tickets: input=[number] Basic
// The tickets' amount in "Booking" form
const bookingSeniorAmount = document.getElementById("booking_seniorAmount"); // Booking: input=[number] Senior
const bookingBasicAmount = document.getElementById("booking_basicAmount"); // Booking: input=[number] Basic
// The tickets' amount in "Overview"
const overviewSeniorAmount = document.getElementById("overview_seniorAmount"); // Overview: senior amount
const overviewBasicAmount = document.getElementById("overview_basicAmount"); // Overview: basic amount
// Each ticket's price in "Overview"
const basicPrice = document.getElementById("basicPrice"); // Basic's Price
const seniorPrice = document.getElementById("seniorPrice"); // Senior's price
// Total price in "Overview"
const overviewTotal = document.getElementById("overviewTotal");
// Total price in "Tickets" section
const ticketsTotal = document.getElementById("ticketsTotal");
// Variables used to call a "Booking" form
const closeBtn = document.getElementById("booking__close-btn"); // "Close" btn
const bookingWindow = document.getElementById("booking-window"); // "Booking" form
const buyBtn = document.getElementById("tickets__buy-btn"); // "BuyNow" btn
closeBtn.onclick = function () {
  // Closes "Booking" form when "Close" btn is clicked
  bookingWindow.classList.remove("booking_active");
  ticketsBasicAmount.value = bookingBasicAmount.value;
  ticketsSeniorAmount.value = bookingSeniorAmount.value;
  ticketsTotal.innerHTML = "Total: " + overviewTotal.innerHTML;
  // Check which ticket type is selected
  selectCheck();
  // Send selected ticket type to "Tickets" radio
  setRadio();
};

buyBtn.onclick = function () {
  // Sends tickets' amount from "Tickets" to "Booking" form when form is called
  bookingSeniorAmount.value = ticketsSeniorAmount.value;
  bookingBasicAmount.value = ticketsBasicAmount.value;

  // Sends tickets' amount to "Overview" when form is called
  overviewSeniorAmount.innerHTML = bookingSeniorAmount.value;
  overviewBasicAmount.innerHTML = bookingBasicAmount.value;

  // Calculates ticket's price of each type when form is called
  basicPrice.innerHTML = bookingBasicAmount.value * 20 + " €";
  seniorPrice.innerHTML = bookingSeniorAmount.value * 10 + " €";
  overviewTotal.innerHTML =
    bookingBasicAmount.value * 20 + bookingSeniorAmount.value * 10 + " €";

  // Calls "Booking" form when "Buy now" btn is clicked
  bookingWindow.classList.add("booking_active");
  // Check which ticket type is selected in radio in "Tickets" section
  radioCheck();
  // Sends selected ticket type to "Booking" form
  setOption();
};

// Variables for Steppers in form
const bookingBasicAdd = document.getElementById("booking_basicAdd");
const bookingBasicRemove = document.getElementById("booking_basicRemove");
const bookingSeniorAdd = document.getElementById("booking_seniorAdd");
const bookingSeniorRemove = document.getElementById("booking_seniorRemove");

// Variables for Steppers in "Tickets" section
const ticketsBasicAdd = document.getElementById("ticketsBasicAdd");
const ticketsBasicRemove = document.getElementById("ticketsBasicRemove");
const ticketsSeniorAdd = document.getElementById("ticketsSeniorAdd");
const ticketsSeniorRemove = document.getElementById("ticketsSeniorRemove");

// Variables with ticket's price of each type
const price20 = 20; // for Basic type
const price10 = 10; // for Senior type

// "+" btn in "Booking" form
function bookingAdd(add, amount, price, overviewAmount, priceVar) {
  add.onclick = function () {
    amount.value++;
    overviewAmount.innerHTML = amount.value;
    price.innerHTML = amount.value * priceVar + " €";
    overviewTotal.innerHTML =
      bookingBasicAmount.value * 20 + bookingSeniorAmount.value * 10 + " €";
  };
}

// "-" btn in "Booking" form
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

// "+" btn in "Tickets" section
function ticketsAdd(add, amount) {
  add.onclick = function () {
    amount.value++;
    ticketsTotal.innerHTML =
      "Total: " +
      (ticketsBasicAmount.value * 20 + ticketsSeniorAmount.value * 10) +
      " €";
  };
}

// "-" btn in "Tickets" section
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

// Refreshing a Total in "Tickets" section on a page load
window.onload = (event) => {
  ticketsTotal.innerHTML =
    "Total: " +
    (ticketsBasicAmount.value * 20 + ticketsSeniorAmount.value * 10) +
    " €";
};

let radios = document.querySelectorAll('input[name="radio-btn__ticket"]');
let radioValue;

// Function writes checked radio option to radioValue;
function radioCheck() {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      radioValue = radios[i].value;
    }
  }
}

let select = document.querySelector("select.select__header").getElementsByTagName('option');
// Function sends selected ticket type to the "Booking" form
function setOption() {
for (let i = 0; i < select.length; i++) {
  if (select[i].value === radioValue) select[i].selected = true;
}
}

let selectedOption;

// Function writes selected option to selectedOption;
function selectCheck() {
  for (let i = 0; i < select.length; i++) {
    if (select[i].selected) {
      selectedOption = select[i].value;
    }
  }
}
// Function sends selected ticket type to the "Tickets" section
function setRadio() {
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].value === selectedOption) radios[i].checked = true;
  }
  }

  // занести в овервью тикет тайп
  // let overviewTicket = document.querySelector("div.overview__ticket-type");