
var link = document.querySelector(".button-write-us");

if (link) {

var popup = document.querySelector(".form-write-us");
var close = document.querySelector(".modal-close");
var inputName = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var comment = popup.querySelector("[name=comment]");
var form = popup.querySelector("form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  inputName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!inputName.value || !email.value || !comment.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    }
  }
});

var buttonMap = document.querySelector(".info-contacts__map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

buttonMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});

} else {

var button = document.querySelectorAll(".hover-pay");
var popupInfo = document.querySelector(".modal-info-add");
var closeCatalog = popupInfo.querySelector(".modal-close");
var purchase = popupInfo.querySelector(".modal-btn-continue");

for (var elem of button) {
  elem.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupInfo.classList.add("modal-show");
  });
};

closeCatalog.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupInfo.classList.remove("modal-show");
});

purchase.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupInfo.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupInfo.classList.contains("modal-show")) {
      popupInfo.classList.remove("modal-show");
    }
  }
});

}

    //код для index.html













