let slider = document.querySelector("div.slider");
// let sliderItems = document.querySelector("div.welcome__slides");
let slides = document.querySelectorAll("div.welcome__slide");
let prev = document.querySelector("div.slider__arrow_left");
let next = document.querySelector("div.slider__arrow_right");
let sliderDot = document.querySelector(".slider__dot");

let sliderIndex = 0;
let position = `translateX(-${sliderIndex * 1000}px)`;
let sliderWidth = slider.clientWidth;
console.log(sliderWidth);

prev.onclick = function prevSlide() {
  if (sliderIndex == 0) {
    sliderIndex = 4;
  } else {
    sliderIndex--;
  }
  changePosition();
  // dotActive();
  dots();
};
next.onclick = function nextSlide() {
  if (sliderIndex == 4) {
    sliderIndex = 0;
  } else {
    sliderIndex++;
  }
  changePosition();
  // dotActive();
  dots();
};

function changePosition() {
  sliderWidth = slider.clientWidth;
  position = `translateX(-${sliderIndex * sliderWidth}px)`;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = position;
  }
}

// function dotActive() {
//   for (let i = 0; i < sliderDot.length; i++) {
//     console.log("index = ", sliderIndex);
//     console.log("dot = ", sliderDot[i]);
//     if (i == sliderIndex) {
//       sliderDot[i].classList.add("slider__dot_active");
//     } else {
//       sliderDot[i].classList.remove("slider__dot_active");
//     }
//     console.log("index = ", sliderIndex);
//     console.log("dot = ", sliderDot[i]);
//   }
// }

function dots() {
  for (let i = 0; i < sliderDot.length; i++) {
    if (i == sliderIndex) {
      // sliderDot[i].classList.add("slider__dot_active");
      sliderDot.classList.add("slider__dot_active")[i];
    }
    else {
      // sliderDot[i].classList.remove("slider__dot_active");
      sliderDot.classList.remove("slider__dot_active")[i];
    }
  }
}

function ddots() {
  for (let i = 0; i < sliderDot.length; i++) {
    if (i == sliderIndex) {
      sliderDot[i].classList.add("slider__dot_active");
    }
    else {
      sliderDot[i].classList.remove("slider__dot_active");
    }
  }
}
