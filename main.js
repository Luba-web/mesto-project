(()=>{"use strict";var e=document.querySelector(".page");function t(t){t.classList.add("popup_opened"),e.addEventListener("keydown",o),e.addEventListener("click",r)}function n(t){t.classList.remove("popup_opened"),e.removeEventListener("keydown",o),e.removeEventListener("click",r)}var o=function(e){var t=document.querySelector(".popup_opened");"Escape"===e.key&&n(t)},r=function(e){var t=document.querySelector(".popup_opened");(e.target.classList.contains("popup")||e.target.classList.contains("popup__button-close"))&&n(t)},c=function(e,t){var n=t.textContent;t.textContent=e?"Сохранение..":n},a={url:"https://mesto.nomoreparties.co/v1/plus-cohort-8/",headers:{authorization:"cb8f559f-5b92-4512-9828-0e4dd400de93","Content-Type":"application/json"}},u=function(e){return e.ok?e.json():Promise.reject("Ошибка : "+e)};function i(){return fetch("".concat(a.url,"users/me"),{headers:a.headers}).then(u)}function l(){return fetch("".concat(a.url,"cards"),{headers:a.headers}).then(u)}var s=document.querySelector("#popupImages"),d=document.querySelector(".popup__images"),f=document.querySelector(".cards");function m(e){var n=document.querySelector("#cardTemplate").content.querySelector(".cards__item").cloneNode(!0),o=n.querySelector(".cards__images"),r=n.querySelector(".cards__text"),c=n.querySelector(".cards__button-delete"),i=n.querySelector(".cards__like-numbers"),l=n.querySelector(".cards__like");return r.textContent=e.name,o.src=e.link,o.alt=e.name,i.textContent=e.likes.length,e.owner._id!==D.id&&(c.style.display="none"),l.addEventListener("click",(function(t){!function(e,t,n){var o;e.target.classList.toggle("cards__like_active")?(o=n,fetch("".concat(a.url,"cards/likes/").concat(o._id),{method:"PUT",headers:a.headers}).then(u)).then((function(e){return e})).then((function(e){t.textContent=e.likes.length})).catch((function(e){return console.log(e)})):function(e){return fetch("".concat(a.url,"cards/likes/").concat(e._id),{method:"DELETE",headers:a.headers}).then(u)}(n).then((function(e){return n.likes.find((function(e){return e._id===D.id})),e})).then((function(e){t.textContent=e.likes.length})).catch((function(e){return console.log(e)}))}(t,i,e)})),c.addEventListener("click",(function(t){!function(e,t){var n;(n=t,fetch("".concat(a.url,"cards/").concat(n._id),{method:"DELETE",headers:a.headers}).then(u)).then((function(){e.target.closest(".cards__item").remove()})).catch((function(e){return console.log(e)}))}(t,e)})),o.addEventListener("click",(function(){!function(e){d.src=e.link,d.alt=e.name,s.querySelector(".popup__caption").textContent=e.name,t(s)}(e)})),n}function v(e){l().then((function(){f.prepend(m(e))})).catch((function(e){return console.log(e)}))}var h=document.querySelector("#profile"),p=document.querySelector("#profileForm"),_=document.querySelector(".profile__button-pen"),y=document.querySelector(".profile__title"),S=document.querySelector(".profile__subtitle"),g=document.forms.profileForm,q=g.elements.firstName,b=g.elements.profession,k=p.querySelector(".form__button-save"),E=document.querySelector("#avatar"),L=document.querySelector("#avatarForm"),C=document.forms.avatarForm,x=C.elements.avatar,T=document.querySelector(".profile__avatar"),A=L.querySelector(".form__button-save"),D={id:""};l().then((function(e){e.forEach((function(e){v(e)}))})),i().then((function(e){y.textContent=e.name,S.textContent=e.about,T.src=e.avatar,x.value=e.avatar,D.id=e._id,q.value=e.name,b.value=e.about,D.likes=e._likes})).catch((function(e){return console.log(e)})),Promise.all([l(),i]).then((function(e){return e})).catch((function(e){return console.log(e)}));var F=document.querySelector("#cardMesto"),P=document.forms.cardMestoForm,B=P.elements.nameImg,M=P.elements.linkImg,N=document.querySelector("#profileAdd"),O=document.querySelector("#cardMestoForm"),j=P.querySelector(".form__button-save");var w,I,J=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;t?(e.classList.remove(n.inactiveButtonClass),e.disabled=!1):(e.classList.add(n.inactiveButtonClass),e.disabled="disabled")};p.addEventListener("submit",(function(e){e.preventDefault();var t,o={name:q.value,about:b.value};c(!0,k),(t=o,fetch("".concat(a.url,"users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:t.name,about:t.about})}).then(u)).then((function(){y.textContent=o.name,S.textContent=o.about,n(h)})).catch((function(e){return console.log(e)})).catch((function(e){return console.log(e)})).finally((function(){c(!1,k)}))})),_.addEventListener("click",(function(){t(h),q.value=y.textContent,b.value=S.textContent})),L.addEventListener("submit",(function(e){e.preventDefault();var t,o={avatar:x.value};c(!0,A),(t=o,fetch("".concat(a.url,"users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:t.avatar})}).then(u)).then((function(e){T.src=e.avatar,n(E),C.reset()})).catch((function(e){return console.log(e)})).finally((function(){c(!1,A)}))})),T.addEventListener("click",(function(){t(E)})),O.addEventListener("submit",(function(e){e.preventDefault();var t,o={name:B.value,link:M.value};c(!0,j),(t=o,fetch("".concat(a.url,"cards"),{method:"POST",headers:a.headers,body:JSON.stringify(t)}).then(u)).then((function(e){v(e),n(F),P.reset()})).catch((function(e){return console.log(e)})).finally((function(){c(!1,j)}))})),N.addEventListener("click",(function(){t(F)})),w={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button-save",inactiveButtonClass:"form__button-save_disabled",inputErrorClass:"form__input_condition_invalid"},I=document.querySelectorAll(w.formSelector),Array.from(I).forEach((function(e){!function(e,t){var n=e.querySelectorAll(t.inputSelector),o=e.querySelector(t.submitButtonSelector);Array.from(n).forEach((function(n){n.addEventListener("input",(function(){!function(e,t,n){t.checkValidity()?function(e,t,n){var o=e.querySelector("#".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),o.textContent=t.validationMessage}(e,t,n):function(e,t,n){var o=e.querySelector("#".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=t.validationMessage}(e,t,n)}(e,n,t),J(o,e.checkValidity(),t)}))})),e.addEventListener("submit",(function(n){n.preventDefault(),console.log("отправка формы"),J(o,e.checkValidity(),t)}))}(e,w)}))})();