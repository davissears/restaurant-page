import { State } from "./state";

// handles background image
export class Background {
  #view;
  #file;
  constructor(file, view) {
    this.#file = file;
    this.#view = view;
  }
  // method changes bg image
  changeBg() {
    document.body.style.backgroundImage = `url(${this.#file})`;
    document.body.style.backgroundSize = "cover";
  }
}

export class PageContent {
  #header;
  #view;
  #body;
  constructor(header, body, view) {
    this.#header = header;
    this.#body = body;
    this.#view = view;
  }
  updatePageContent() {
    // container
    const contentContainer = document.getElementById("content");
    contentContainer
      .querySelectorAll(".navContent")
      .forEach((content) => content.remove());
    const textContainer = document.createElement("div");
    const headerContent = document.createElement("h2");
    const bodyContent = document.createElement("p");
    // append textContainer
    contentContainer.appendChild(textContainer);
    // append header
    headerContent.textContent = this.#header;
    headerContent.setAttribute("class", "navContent");
    textContainer.appendChild(headerContent);
    // append body
    bodyContent.textContent = this.#body;
    bodyContent.setAttribute("class", "navContent");
    contentContainer.appendChild(bodyContent);
  }
}
