// creates collections of view objects for:
// -home -about -menu

// each view needs:
//  Background: file, view
//  PageContent: text, view

// imports
import { Background, PageContent } from "./content.js";
import homeBg from "../../images/homeBackground.jpg";

// home Content
export const home = () => {
  const homeView = [];
  //  home Background
  const homeBackground = new Background(homeBg, "home");
  homeView.push(homeBackground);
  homeBackground.changeBg();
  const homeHeader = "we serve food to people";
  const homeBody = "Be our guest!";
  const homeContent = new PageContent(homeHeader, homeBody, "home");
  homeView.push(homeContent);
  homeContent.updatePageContent();
};
