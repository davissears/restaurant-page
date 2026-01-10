// loads home page content
export const content = () => {
  class Component {
    constructor(tag, className, text = "") {
      this.element = document.createElement(tag);
      this.element.className = className;
      this.element.textContent = text;
      // this.image = image; // image is undefined in original code
    }
    appendTo(parent) {
      parent.appendChild(this.element);
    }
    changeBg(image) {
      document.body.style.backgroundImage = `url(${image})`; // Used argument instead of this.image which was broken
      document.body.style.backgroundSize = "cover";
    }
  }
  return { Component };
};
