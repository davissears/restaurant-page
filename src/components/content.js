// Refactored renderer

const createMenuCard = (item) => {
  const card = document.createElement("div");
  card.className = "menu-item";

  const headerRow = document.createElement("div");
  headerRow.className = "menu-header";

  const dishName = document.createElement("h3");
  dishName.textContent = item.dish;

  // Badges next to name
  const badgeTexts = [];
  if (item.gf) badgeTexts.push("GF");
  if (item.vegan) badgeTexts.push("V");
  if (item.vegetarian && !item.vegan) badgeTexts.push("Veg");

  if (badgeTexts.length > 0) {
    const badgeSpan = document.createElement("span");
    badgeSpan.className = "badges";
    badgeSpan.textContent = `\u00A0\u00A0\u00A0${badgeTexts.join("/")}`;
    dishName.appendChild(badgeSpan);
  }

  headerRow.appendChild(dishName);

  const desc = document.createElement("p");
  desc.textContent = item.description;

  // Price after description
  const price = document.createElement("span");
  price.className = "price";
  price.textContent = ` $${item.price}`;
  desc.appendChild(price);

  card.append(headerRow, desc);
  return card;
};

export const render = (data) => {
  const contentContainer = document.getElementById("content");

  // 1. Update Background
  if (data.bgImage) {
    document.body.style.backgroundImage = `url(${data.bgImage})`;
    document.body.style.backgroundSize = "cover";
    // document.body.style.backgroundPosition = "center";
    // document.body.style.backgroundRepeat = "no-repeat";
  }

  // 2. Clear previous content
  contentContainer.innerHTML = "";

  // 3. Render Standard Text (Home/About)
  if (data.header && data.body) {
    const textContainer = document.createElement("div");
    textContainer.className = "text-container";

    const h1 = document.createElement("h1");
    h1.textContent = data.header;

    const p = document.createElement("p");
    p.textContent = data.body;

    textContainer.append(h1, p);
    contentContainer.appendChild(textContainer);
  }

  // 4. Render Menu Grid
  if (data.items) {
    const menuGrid = document.createElement("div");
    menuGrid.className = "menu-grid";

    data.items.forEach((item) => {
      menuGrid.appendChild(createMenuCard(item));
    });

    contentContainer.appendChild(menuGrid);
  }
};