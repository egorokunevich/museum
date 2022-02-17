// burger menu
var burger = document.getElementById("burger-menu");
var nav = document.getElementById("header-nav");
burger.onclick = function() {
   // отображение нав-меню
    if(nav.style.display == "flex") {
        nav.style.display = 'none';
     } else {
        nav.style.display = 'flex';
     };
   //   скрытие welcome content
     if(welcome__content.style.display == "none") {
        welcome__content.style.display = 'flex';
     } else {
        welcome__content.style.display = 'none';
     };

};

// booking window
var closeBtn = document.getElementById("booking__close-btn");
var bookingWindow = document.getElementById("booking-window");
var buyBtn = document.getElementById("tickets__buy-btn");
closeBtn.onclick = function() {
   // закрытие окна
   bookingWindow.style.left = '-100%';
}
buyBtn.onclick = function() {
   // открытие окна
   bookingWindow.style.left = '0';
}