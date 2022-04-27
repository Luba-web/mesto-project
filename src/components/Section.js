export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  setItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._items.forEach(item => {
      const cardElement = item.generate();//не забыть вызвать

      this.setItem(cardElement);
    });
  }
}