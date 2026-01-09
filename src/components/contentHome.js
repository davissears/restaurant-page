// loads home page content
export const _Content = (() => {
  // define cotainer for content
  const contentContainer = document.getElementById("content");
  const test = document.createElement("p");
  test.textContent = "HelloWorld";
  contentContainer.appendChild(test);
})();
