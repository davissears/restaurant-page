// imports
import homeBg from "../../images/homeBackground.jpg";
import aboutBg from "../../images/aboutBackground.jpg";
import menuBg from "../../images/menuBackground.jpg";

export const viewsData = {
  home: {
    bgImage: homeBg,
    header: "we serve food to people",
    body: "Be our guest!",
  },
  about: {
    bgImage: aboutBg,
    header: "A Place for People to eat food",
    body: "Be our guest! Eat our food! Drink our libations!",
  },
  menu: {
    bgImage: menuBg,
    items: [
      {
        dish: "fries",
        course: "starter",
        description: "fried long-cut potatoes, duck-fat, tomato",
        price: "10",
        gf: true,
        vegan: false,
        vegetarian: false,
      },
      {
        dish: "cesar salad",
        course: "starter",
        description: "greens, anchovy, egg",
        price: "14",
        gf: false,
        vegan: false,
        vegetarian: false,
      },
      {
        dish: "plantains",
        course: "starter",
        description: "fried plantains, sherry vinegar, beer-batter",
        price: "12",
        gf: false,
        vegan: true,
        vegetarian: true,
      },
      {
        dish: "steak",
        course: "main",
        description: "ribeye, rosemary, truffle-butter",
        price: "32",
        gf: true,
        vegan: false,
        vegetarian: false,
      },
      {
        dish: "salmon",
        course: "main",
        description: "wild fillet, chimichuri, gremolata",
        price: "28",
        gf: true,
        vegan: false,
        vegetarian: false,
      },
      {
        dish: "squash",
        course: "main",
        description: "butternut, baking spice, pastry",
        price: "22",
        gf: false,
        vegan: true,
        vegetarian: true,
      },
      {
        dish: "cake",
        course: "sweets",
        description: "rum, garam masalla, corn",
        price: "12",
        gf: true,
        vegan: true,
        vegetarian: true,
      },
      {
        dish: "cashew ice cream",
        course: "sweets",
        description: "cashew cream, vanilla, shortbread",
        price: "10",
        gf: false,
        vegan: true,
        vegetarian: true,
      },
    ],
  },
};