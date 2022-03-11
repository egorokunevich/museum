let slider = document.querySelector("div.slider");
let slides = document.querySelectorAll("div.welcome__slide");
let prev = document.querySelector("div.slider__arrow_left");
let next = document.querySelector("div.slider__arrow_right");
let sliderDot = document.querySelectorAll(".slider__dot");

let sliderIndex = 0; // Current slide index
let position = `translateX(-${sliderIndex * 1000}px)`; // Slides' offset
let sliderWidth = slider.clientWidth;
console.log(sliderWidth);

// Previous slide
prev.onclick = function prevSlide() {
  if (sliderIndex == 0) {
    sliderIndex = 4;
  } else {
    sliderIndex--;
  }
  changePosition();
  dotActive();
};

// Next slide
next.onclick = function nextSlide() {
  if (sliderIndex == 4) {
    sliderIndex = 0;
  } else {
    sliderIndex++;
  }
  changePosition();
  dotActive();
};

// Moves slides
function changePosition() {
  sliderWidth = slider.clientWidth;
  position = `translateX(-${sliderIndex * sliderWidth}px)`;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = position;
  }
}

// Moves active dot
function dotActive() {
  for (let i = 0; i < sliderDot.length; i++) {
    if (i == sliderIndex) {
      sliderDot[i].classList.add("slider__dot_active");
    }
    else {
      sliderDot[i].classList.remove("slider__dot_active");
    }
  }
}
