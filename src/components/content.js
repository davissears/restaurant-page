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
    const textContainer = document.createElement("div");
    contentContainer.appendChild(textContainer);
    // header
    const headerContent = document.createElement("h1");
    headerContent.textContent = this.#header;
    textContainer.appendChild(headerContent);
    const bodyContent = document.createElement("p");
    bodyContent.textContent = this.#body;
    contentContainer.appendChild(bodyContent);
  }
}

// TODO: create view text setter