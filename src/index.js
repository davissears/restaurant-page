import { appState } from "./components/state.js";
import { viewsData } from "./components/views.js";
import { render } from "./components/content.js";
import { nav } from "./components/nav.js";

// Listen for state changes
appState.addEventListener("statechange", (e) => {
  const viewName = e.detail.newView;
  const data = viewsData[viewName];
  render(data);
});

// Initialize Navigation Listeners
nav();

// Initial Render
render(viewsData[appState.view]);