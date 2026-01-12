import { appState } from "./state.js";

// listens for nav events
export const nav = () => {
  const homeButton = document.getElementById("home");
  const aboutButton = document.getElementById("about");
  const menuButton = document.getElementById("menu");

  homeButton.addEventListener("click", () => {
    appState.updateView("home");
  });

  aboutButton.addEventListener("click", () => {
    appState.updateView("about");
  });

  menuButton.addEventListener("click", () => {
    appState.updateView("menu");
  });
};