var link=document.querySelector(".button-write-us");if(link){var popup=document.querySelector(".form-write-us"),close=document.querySelector(".modal-close"),inputName=popup.querySelector("[name=username]"),email=popup.querySelector("[name=email]"),comment=popup.querySelector("[name=comment]"),form=popup.querySelector("form");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),inputName.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){inputName.value&&email.value&&comment.value||(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")))});var buttonMap=document.querySelector(".info-contacts__map"),popupMap=document.querySelector(".modal-map"),closeMap=popupMap.querySelector(".modal-close");buttonMap.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.add("modal-show")}),closeMap.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupMap.classList.contains("modal-show")&&popupMap.classList.remove("modal-show"))})}else{for(var button=document.querySelectorAll(".hover-pay"),popupInfo=document.querySelector(".modal-info-add"),closeCatalog=popupInfo.querySelector(".modal-close"),purchase=popupInfo.querySelector(".modal-btn-continue"),i=0;i<button.length;i++)button[i].addEventListener("click",function(e){e.preventDefault(),popupInfo.classList.add("modal-show")});closeCatalog.addEventListener("click",function(e){e.preventDefault(),popupInfo.classList.remove("modal-show")}),purchase.addEventListener("click",function(e){e.preventDefault(),popupInfo.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popupInfo.classList.contains("modal-show")&&popupInfo.classList.remove("modal-show"))})}
