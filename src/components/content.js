// loads home page content
export const content = () => {
  // handles background image
  class Background {
    constructor(file) {
      this.file = file;
    }
    // method changes bg image
    changeBg() {
      document.body.style.backgroundImage = `url(${this.file})`; // Used argument instead of this.image which was broken
      document.body.style.backgroundSize = "cover";
    }
  }
  // TODO: create class PageContent

  return { Background };
};

// use:
//      Get the Component class from the content function
// const { Background } = content();

//      Create an instance of Component (providing required tag and className)
// const homeBg = new Background(homeBackground);

//      Change the background using the imported image
// homeBg.changeBg();
