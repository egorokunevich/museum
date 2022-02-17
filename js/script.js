var burger = document.getElementById("burger-menu");
var nav = document.getElementById("header-nav");
burger.onclick = function() {
    if(nav.style.display == "flex") {
        nav.style.display = 'none';
     } else {
        nav.style.display = 'flex';
     };
     if(welcome__content.style.display == "none") {
        welcome__content.style.display = 'flex';
     } else {
        welcome__content.style.display = 'none';
     };

};
