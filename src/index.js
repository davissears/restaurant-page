// imports
//  contentHome
import { content } from "./components/content.js";
import homeBackground from "../images/homeBackground.jpg";
import aboutBg from "../images/aboutBackground.jpg";

// Get the Component class from the content function
const { Background } = content();

// Create an instance of Component (providing required tag and className)
const homeBg = new Background(homeBackground);

// Change the background using the imported image
homeBg.changeBg();
