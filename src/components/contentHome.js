// loads home page content
export const _Content = (() => {
  class Component {
    constructor(tag, className, text = "") {
      this.element = document.createElement(tag);
      this.element.className = className;
      this.element.textContent = text;
    }
    appendTo(parent) {
      parent.appendChild(this.element);
    }
  }
})();
