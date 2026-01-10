// loads home page content
export const content = () => {
  class Background {
    constructor(file) {
      this.file = file;
    }

    changeBg() {
      document.body.style.backgroundImage = `url(${this.file})`; // Used argument instead of this.image which was broken
      document.body.style.backgroundSize = "cover";
    }
  }
  // class Component {
  //   constructor(tag, className, text = "") {
  //     this.element = document.createElement(tag);
  //     this.element.className = className;
  //     this.element.textContent = text;
  //   }

  //   // A helper to easily append this element to a parent
  //   appendTo(parent) {
  //     parent.appendChild(this.element);
  //   }
  // }
  return { Background };
};
