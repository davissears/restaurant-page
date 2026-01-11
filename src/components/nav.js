// listens for nav events
export const nav = () => {
  const homeButton = document.getElementById("home");
  const aboutButton = document.getElementById("about");
  const menuButton = document.getElementById("menu");

  homeButton.addEventListener("click", () => {
    // window.dispatchEvent(new CustomEvent('nav', { detail: 'home' }));
    appState.updateView("home");
  });

  aboutButton.addEventListener("click", () => {
    // window.dispatchEvent(new CustomEvent('nav', { detail: 'about' }));
    appState.updateView("about");
  });

  menuButton.addEventListener("click", () => {
    // window.dispatchEvent(new CustomEvent('nav', { detail: 'menu' }));
  });
};
