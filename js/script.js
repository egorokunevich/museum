"use strict";

//--------------------
// --- Burger-menu ---
//--------------------

// Burger-menu variables
const burger = document.getElementById("burger-menu");
const nav = document.getElementById("header-nav");
const welcomeContent = document.getElementById("welcome__content");

// Toggling a nav's visibility when burger-menu is clicked.
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
  }

  // Burger-menu's icon toggle.
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

// Closing a nav-menu if an option was clicked
let navList = document.querySelectorAll(".nav-link");
for (let i = 0; i < navList.length; i++) {
  // Adding an eventListener on every element on the list
  navList[i].addEventListener("click", () => {
    closeNav(); // Calling a function if an element is clicked
    burgerToggle(); // Calling a function if an element is clicked
  });
}
function closeNav() {
  // This function closes nav-menu
  nav.classList.remove("nav_active");
}
function burgerToggle() {
  // This function changes burger-menu's icon to default
  burger.classList.toggle("burger_active");
}

//---------------------
// -- Explore-slider --
//---------------------

let sliderControl = document.querySelector("div.explore-slider__control"); // Custom thumb for a slider
let sliderAfter = document.querySelector("div.after-container"); // Container with "after" img
let rangeThumb = document.querySelector(
  "div.explore-slider input[name=exploreRange]"
); // Range's thumb

rangeThumb.oninput = function () {
  sliderControl.style.left = rangeThumb.value + "%";

  // This conditional statement(if) sets an "after" container's width depending on range's value
  if (rangeThumb.value == "99") {
    sliderAfter.style.width = 0 + "%";
  } else {
    sliderAfter.style.width = 100 - rangeThumb.value + "%";
  }

  // Used to check values in console
  // console.log("value: " + rangeThumb.value);
  // console.log("width: " + sliderAfter.style.width);
};
