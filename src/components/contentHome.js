import homeBg from "../../images/homeBackground.jpg";
import aboutBg from "../../images/aboutBackground.jpg";

// loads home page content
export const _Content = (() => {
  // define cotainer for content
  const contentContainer = document.getElementById("content");
  const test = document.createElement("p");
  document.body.style.backgroundImage = `url(${homeBg})`;
  document.body.style.backgroundImage = `url(${homeBg})`;
  document.body.style.backgroundSize = "cover";
  class Component {
    constructor(tag, className, text = '') {
      this.element = document.createElement(tag);
      this.element.className = className;
      this.element.textContent = text;
    }
    appendTo(parent) {
      parent.appendChild(this.element);
    }
  }
})();
