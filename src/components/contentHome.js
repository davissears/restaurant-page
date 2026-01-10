import homeBg from "../../images/homeBackground.jpg";
import aboutBg from "../../images/aboutBackground.jpg";

// loads home page content
export const _Content = (() => {
  // define cotainer for content
  const contentContainer = document.getElementById("content");
  const test = document.createElement("p");
  // test.textContent = "HelloWorld";
  // contentContainer.appendChild(test);

  document.body.style.backgroundImage = `url(${homeBg})`;
  document.body.style.backgroundImage = `url(${homeBg})`;
  document.body.style.backgroundSize = "cover"; // or "contain", or "100% 100%"
})();
