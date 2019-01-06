"use strict";

/* Меню */

// var menuItemActive = $(".js-header__menu__link--active");
// var menuItems =  $(".header__menu__link");
// var SubMenuList = document.querySelector(".js-header__submenu__list--active");
// var subMenuItems =  $(".header__submenu__link");
//
// function nav () {
//     function delActive() {
//         $(menuItemActive).removeClass("js-header__menu__link--active");
//         console.log("отработало удаление активных");
//     }
//     console.log("Зашли в NAV");
//     $(menuItems).click(function () {
//         console.log("Нажали на линк меню" + $(this).html())
//         delActive();
//         $(this).addClass("js-header__menu__link--active");
// 		console.log("Назначили активным" + $(this).html());
//     });
// }
//
// $(document).ready(function() {
//     nav();
// });


/* Адвертайзер */

var headerAdvertising = document.querySelector(".js-header__advertising");
var windowAdvertising = document.querySelector(".js-header__advertising__window");
var windowAdvertisingClose = document.querySelector(".js-header__advertising__close");

headerAdvertising.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (windowAdvertising.classList.contains("js-visually-hidden")) {
    windowAdvertising.classList.remove("js-visually-hidden");
      console.log("Показали адвертайзер");
  }
  else {
   windowAdvertising.classList.add("js-visually-hidden");
 }
});

windowAdvertisingClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  windowAdvertising.classList.add("js-visually-hidden");
});


/* Закрываем попап по Esc */
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!(headerAdvertising.classList.contains("js-visually-hidden"))) {
      windowAdvertising.classList.add("js-visually-hidden");
    }
	if (!(starsTooltip.classList.contains("js-visually-hidden"))) {
      starsTooltip.classList.add("js-visually-hidden");
    }
  }
});


// window.addEventListener("mousedown", function (evt) {
//      evt.preventDefault();
//      if ((!(headerAdvertising.classList.contains("js-visually-hidden"))) &&
// 		      (evt.target.closest(".js-header__advertising__window") === null)) {
//            windowAdvertising.classList.add("js-visually-hidden");
// 				 }
//  });
