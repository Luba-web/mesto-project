export default class UserInfo {
  constructor({ name: nameUser, about: aboutUser, avatar: avatarUser }, getUserData) {
    this._nameUser = document.querySelector(nameUser);
    this._aboutUser = document.querySelector(aboutUser);
    this._avatarUser = document.querySelector(avatarUser);
    this._getUserData = getUserData;
  }

  getUserInfo(objInput) {
    this._getUserData()
      .then((res) => {
        objInput.name.value = res.name;
        objInput.about.value = res.about;
      })
      .catch((err) => console.log(err));
  }

  setUserInfo(name, about, avatar) { // {} взять в объект и сделать =>
    this._nameUser.textContent = name;
    this._aboutUser.textContent = about;
    this._avatarUser.src = avatar;

  }


}