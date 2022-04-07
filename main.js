(()=>{"use strict";var e=document.querySelector(".page");function t(t){t.classList.add("popup_opened"),e.addEventListener("keydown",r),e.addEventListener("click",o)}function n(t){t.classList.remove("popup_opened"),e.removeEventListener("keydown",r),e.removeEventListener("click",o)}var r=function(e){"Escape"===e.key&&n(document.querySelector(".popup_opened"))},o=function(e){var t=e.target.closest(".popup");(e.target.classList.contains("popup")||e.target.classList.contains("popup__button-close"))&&n(t)},c=function(e,t){var n=t.textContent;t.textContent=e?"Сохранение..":n},a={url:"https://mesto.nomoreparties.co/v1/plus-cohort-8/",headers:{authorization:"cb8f559f-5b92-4512-9828-0e4dd400de93","Content-Type":"application/json"}},i=function(e){return e.ok?e.json():Promise.reject("Ошибка : "+e)};function u(){return fetch("".concat(a.url,"cards"),{headers:a.headers}).then(i)}var l=document.querySelector("#popupImages"),s=document.querySelector(".popup__images"),d=document.querySelector(".cards");function f(e){var n=document.querySelector("#cardTemplate").content.querySelector(".cards__item").cloneNode(!0),r=n.querySelector(".cards__images"),o=n.querySelector(".cards__text"),c=n.querySelector(".cards__button-delete"),u=n.querySelector(".cards__like-numbers"),d=n.querySelector(".cards__like");return o.textContent=e.name,r.src=e.link,r.alt=e.name,u.textContent=e.likes.length,m(e)&&d.classList.add("cards__like_active"),e.owner._id!==j.id&&(c.style.display="none"),d.addEventListener("click",(function(t){!function(e,t,n){var r;m(n)?(r=n,fetch("".concat(a.url,"cards/likes/").concat(r._id),{method:"DELETE",headers:a.headers}).then(i)).then((function(r){t.textContent=r.likes.length,e.target.classList.remove("cards__like_active"),n.likes=r.likes})).catch((function(e){return console.log(e)})):function(e){return fetch("".concat(a.url,"cards/likes/").concat(e._id),{method:"PUT",headers:a.headers}).then(i)}(n).then((function(r){t.textContent=r.likes.length,e.target.classList.add("cards__like_active"),n.likes=r.likes})).catch((function(e){return console.log(e)}))}(t,u,e)})),c.addEventListener("click",(function(t){!function(e,t){var n;(n=t,fetch("".concat(a.url,"cards/").concat(n._id),{method:"DELETE",headers:a.headers}).then(i)).then((function(){e.target.closest(".cards__item").remove()})).catch((function(e){return console.log(e)}))}(t,e)})),r.addEventListener("click",(function(){!function(e){s.src=e.link,s.alt=e.name,l.querySelector(".popup__caption").textContent=e.name,t(l)}(e)})),n}function m(e){return!!e.likes.find((function(e){return e._id===j.id}))}function v(e){u().then((function(){d.prepend(f(e))})).catch((function(e){return console.log(e)}))}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=document.querySelector("#profile"),y=document.querySelector("#profileForm"),_=document.querySelector(".profile__button-pen"),S=document.querySelector(".profile__title"),b=document.querySelector(".profile__subtitle"),g=document.forms.profileForm,k=g.elements.firstName,q=g.elements.profession,E=y.querySelector(".form__button-save"),L=document.querySelector("#avatar"),C=document.querySelector("#avatarForm"),x=document.forms.avatarForm,A=x.elements.avatar,T=document.querySelector(".profile__avatar"),w=C.querySelector(".form__button-save"),j={id:""};Promise.all([u(),fetch("".concat(a.url,"users/me"),{headers:a.headers}).then(i)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);a=!0);}catch(e){i=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];S.textContent=c.name,b.textContent=c.about,T.src=c.avatar,A.value=c.avatar,j.id=c._id,k.value=c.name,q.value=c.about,j.likes=c._likes,o.forEach((function(e){v(e)}))})).catch((function(e){return console.log(e)}));var D=document.querySelector("#cardMesto"),F=document.forms.cardMestoForm,I=F.elements.nameImg,M=F.elements.linkImg,O=document.querySelector("#profileAdd"),P=document.querySelector("#cardMestoForm"),B=F.querySelector(".form__button-save");var N,J,V=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;t?(e.classList.remove(n.inactiveButtonClass),e.disabled=!1):(e.classList.add(n.inactiveButtonClass),e.disabled="disabled")};y.addEventListener("submit",(function(e){e.preventDefault();var t,r={name:k.value,about:q.value};c(!0,E),(t=r,fetch("".concat(a.url,"users/me"),{method:"PATCH",headers:a.headers,body:JSON.stringify({name:t.name,about:t.about})}).then(i)).then((function(){S.textContent=r.name,b.textContent=r.about,n(p)})).catch((function(e){return console.log(e)})).finally((function(){c(!1,E)}))})),_.addEventListener("click",(function(){t(p),k.value=S.textContent,q.value=b.textContent})),C.addEventListener("submit",(function(e){e.preventDefault();var t,r={avatar:A.value};c(!0,w),(t=r,fetch("".concat(a.url,"users/me/avatar"),{method:"PATCH",headers:a.headers,body:JSON.stringify({avatar:t.avatar})}).then(i)).then((function(e){T.src=e.avatar,n(L),x.reset()})).catch((function(e){return console.log(e)})).finally((function(){c(!1,w)}))})),T.addEventListener("click",(function(){t(L)})),P.addEventListener("submit",(function(e){e.preventDefault();var t,r={name:I.value,link:M.value};c(!0,B),(t=r,fetch("".concat(a.url,"cards"),{method:"POST",headers:a.headers,body:JSON.stringify(t)}).then(i)).then((function(e){v(e),n(D),F.reset()})).catch((function(e){return console.log(e)})).finally((function(){c(!1,B)}))})),O.addEventListener("click",(function(){t(D)})),N={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button-save",inactiveButtonClass:"form__button-save_disabled",inputErrorClass:"form__input_condition_invalid"},J=document.querySelectorAll(N.formSelector),Array.from(J).forEach((function(e){!function(e,t){var n=e.querySelectorAll(t.inputSelector),r=e.querySelector(t.submitButtonSelector);Array.from(n).forEach((function(n){n.addEventListener("input",(function(){!function(e,t,n){t.checkValidity()?function(e,t,n){var r=e.querySelector("#".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.textContent=t.validationMessage}(e,t,n):function(e,t,n){var r=e.querySelector("#".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),r.textContent=t.validationMessage}(e,t,n)}(e,n,t),V(r,e.checkValidity(),t)}))})),e.addEventListener("submit",(function(n){n.preventDefault(),console.log("отправка формы"),V(r,e.checkValidity(),t)}))}(e,N)}))})();