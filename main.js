// Product catalog - flat array with category included in each item
const products = [
  // Plates
  {
    category: "plates",
    value: "diner-white-dinner",
    name: "Diner White Dinner Plate",
    price: "$14",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-DWH-PT11_3.png?v=1749591116&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-DWH-PT11_1_9e86e09e-81ff-4d80-84dd-9c87a3fe0fac.png?v=1749591116&width=1008",
  },
  {
    category: "plates",
    value: "spot-on-app-plate",
    name: "Spot On - App Plate",
    price: "$14",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-SPO-PL08_03_26a2c202-edee-4682-bd8a-6d2c3d47dd60.png?v=1748451857&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-SPO-PL08_01_2d06b658-b23a-48ce-881f-8f5a578e98ff.png?v=1748451858&width=1008",
  },
  {
    category: "plates",
    value: "greenband-main-plate",
    name: "Greenband Main Plate",
    price: "$14",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-HLG-PT11_03.png?v=1747320289&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-HLG-PT11_01_141c15a1-36a7-428d-a07a-54a343ef886c.png?v=1747320289&width=1008",
  },
  {
    category: "plates",
    value: "checkerboard-main-plate",
    name: "Checkerboard Main Plate",
    price: "$14",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-LFC-PT10_03.png?v=1746645275&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-LFC-PT10_01.png?v=1746645275&width=1008",
  },
  {
    category: "plates",
    value: "nyc-toile-dinner-plate",
    name: "NYC Toile - Dinner Plate",
    price: "$15",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-250-118_3.png?v=1763591816&width=823",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-250-118_1.png?v=1763591816&width=1008",
  },
  {
    category: "plates",
    value: "212-skyline-dinner",
    name: "212 Skyline Dinner Plate",
    price: "$18",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-212-PT08_03.png?v=1747940014&width=823",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-212-PT08_01.png?v=1747940015&width=1008",
  },
  {
    category: "plates",
    value: "brooklynese-plate",
    name: "Pleasantries Dinner Plate",
    price: "$16",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-BKN-BD08_2_0ea185be-acd7-4b15-a514-9e09a58310d8.png?v=1756489273&width=1066",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-BKN-BD08_1_436fc719-b803-4552-9c10-14faa9bac124.png?v=1756489273&width=1008",
  },
  {
    category: "plates",
    value: "colorware-blue-dinner",
    name: "Colorware Blue Dinner Plate",
    price: "$15",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-250-175_3.png?v=1761841911&width=823",
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-BKN-BD08_1_436fc719-b803-4552-9c10-14faa9bac124.png?v=1756489273&width=1008",
  },
  // Bowls
  {
    category: "bowls",
    value: "everything-white-bowl",
    name: "Everything Bowl White",
    price: "$12",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-DWH-BO22_3.png?v=1749591027&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-DWH-BO22_1_e1413a66-d56c-4cd0-bdaf-0a5816877294.png?v=1749591027&width=1008",
  },
  {
    category: "bowls",
    value: "colorware-nut-bowl-cherry",
    name: "Colorware - Nut Bowl Cherry",
    price: "$14",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-250-122_1.png?v=1763146479&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-250-122_3.png?v=1763146480&width=1008",
  },
  {
    category: "bowls",
    value: "greenband-bowl",
    name: "Greenband Bowl",
    price: "$12",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-HLG-BO14_02.png?v=1747259382&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-HLG-BO14_03.png?v=1747259376&width=1008",
  },
  {
    category: "bowls",
    value: "checkerboard-bowl",
    name: "Checkerboard Bowl",
    price: "$12",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-LFC-BO14_02.png?v=1746645656&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-LFC-BO14_03.png?v=1746645653&width=1008",
  },
  {
    category: "bowls",
    value: "skyline-bowl",
    name: "Skyline Bowl",
    price: "$12",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-212-BO56_02.png?v=1761233878&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-212-BO22_03.png?v=1747939999&width=1008",
  },
  {
    category: "bowls",
    value: "spot-on-bowl",
    name: "Spot On - Bowl",
    price: "$12",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-SPO-B056_03_5174c242-0b90-4f7a-9452-3af94dcb8d2c.png?v=1748451776&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-SPO-B056_03_5174c242-0b90-4f7a-9452-3af94dcb8d2c.png?v=1748451776&width=1008",
  },
  {
    category: "bowls",
    value: "nut-bowl-blue",
    name: "Nut Bowl Coronet Blue",
    price: "$6.50",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-250-128_1.png?v=1763146408&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-250-128_3.png?v=1763146408&width=1008",
  },
  {
    category: "bowls",
    value: "brooklyn-bowl",
    name: "Brooklynese - Bowl",
    price: "$6.50",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-BKN-SB08_2_ca6f0807-7dba-4576-9666-04244343b476.png?v=1756489322&width=940",
    topViewImage:"https://www.fishseddy.com/cdn/shop/files/FEST-BKN-SB08_3_ecd2726b-251b-4d97-9b81-96756412706a.png?v=1756489322&width=1008",
  },
  // Mugs
  {
    category: "mugs",
    value: "bulldog-mug",
    name: "Bull Dog Mug",
    price: "$16",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-250-182_1.png?v=1764712360&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-250-182_2.png?v=1764712360&width=1008",
  },
  {
    category: "mugs",
    value: "spot-on-mug",
    name: "Spot On - Mug",
    price: "$16",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-SPO-MU12_01.png?v=1748451384&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-SPO-MU12_03.png?v=1748451384&width=1008",
  },
  {
    category: "mugs",
    value: "greenband-teacup",
    name: "Greenband Tea Cup",
    price: "$16",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-HLG-MU07_01.png?v=1747259289&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-HLG-MU07_03.png?v=1747259289&width=1008",
  },
  {
    category: "mugs",
    value: "checkerboard-dinner-mug",
    name: "Checkerboard Dinner Mug",
    price: "$16",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-LFC-MU08_01.png?v=1746645190&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-LFC-MU08_03.png?v=1746645190&width=1008",
  },
  {
    category: "mugs",
    value: "skyline-mug",
    name: "Skyline Mug",
    price: "$16",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-212-MU08_1.png?v=1752174706&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-212-MU08_3.png?v=1752174706&width=1008",
  },
  {
    category: "mugs",
    value: "cat-person-mug",
    name: "Cat Person Mug",
    price: "$16",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-BEN-MUCP_1_0b403e89-7f8c-415b-b08f-b111f1b49963.png?v=1756142688&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-BEN-MUCP_3_434522ee-eb8c-4f14-b7d8-21a70b3c0329.png?v=1756142688&width=1008",
  },
  {
    category: "mugs",
    value: "pleasantries-mug",
    name: "Pleasantries Mug",
    price: "$14",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-SLB-MU13_01.png?v=1746480310&width=400",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-LFC-MU08_03.png?v=1746645190&width=1008",
  },
  {
    category: "mugs",
    value: "diner-white-mug",
    name: "Diner White Mug",
    price: "$12",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-DWH-MU13_3.png?v=1749591135&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-DWH-MU13_3.png?v=1749591135&width=1008",
  },
  {
    category: "mugs",
    value: "brooklyn-mug",
    name: "Brooklynese - Cawfee Mug",
    price: "$12",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEST-BKN-MU10_2_205df4a0-6233-412c-820b-3f8cc242ce66.png?v=1756489349&width=1008",

    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-BKN-MU10_3_012984a9-2e4b-4365-84a2-7bcc41dcb31b.png?v=1756489349&width=1008",
  },
  // Napkins
  {
    category: "napkins",
    value: "sweet-tea-towel",
    name: "Sweet Tea Towel",
    price: "$8",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEKL-250-110_3.png?v=1764947422&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEKL-250-110_3.png?v=1764947422&width=1008",
  },
  {
    category: "napkins",
    value: "spot-on-guest-napkin",
    name: "Spot On - Guest Napkin",
    price: "$8",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEPG-NAP-SPO_1.png?v=1764788011&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEPG-NAP-SPO_1.png?v=1764788011&width=1008",
  },
  {
    category: "napkins",
    value: "skyline-tea-towel",
    name: "Skyline - Tea towel",
    price: "$8",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FECS-212-TT01_1.png?v=1750442020&width=400",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FECS-212-TT01_2.png?v=1750442021&width=1008",
  },
  {
    category: "napkins",
    value: "greenband-4-pack-napkin",
    name: "Greenband Napkin",
    price: "$10",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FECS-HLG-NA04_1.png?v=1752686632&width=400",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FECS-HLG-NA04_2.png?v=1752686632&width=1008",
  },
  {
    category: "napkins",
    value: "brooklyn-napkin",
    name: "Brooklynese - Napkin",
    price: "$12",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FEKL-250-237_1_4755de54-a602-4a4d-a514-cfa8c9ae3ad0.png?v=1761334019&width=940",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEKL-250-237_1_4755de54-a602-4a4d-a514-cfa8c9ae3ad0.png?v=1761334019&width=1008",
  },
  {
    category: "napkins",
    value: "checkerboard-4-pack-napkin",
    name: "Checkerboard Napkin",
    price: "$12",
    image:
      "https://www.fishseddy.com/cdn/shop/files/Checkeredtowel_1_935c3e9f-cbeb-4d55-8794-0c9bdbc6858f.png?v=1754928926&width=1008",
  
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/Checkeredtowel_3.png?v=1769011221&width=1008",
  },
  {
    category: "napkins",
    value: "pedestrians-tea-towel",
    name: "Pedestrians Tea Towel",
    price: "$12",
    image:
      "https://www.fishseddy.com/cdn/shop/files/FECS-PED-TT01_2.png?v=1768489357&width=1008",

    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FECS-PED-TT01_1.png?v=1768489357&width=1008",
  },
];



// Bundle configurations
const bundleData = {
  "classic-diner": {
    name: "Classic Diner Set",
    products: {
      plate: "diner-white-dinner",
      bowl: "everything-white-bowl",
      mug: "diner-white-mug",
      napkin: "pedestrians-tea-towel",
    },
  },
  "modern-minimalist": {
    name: "Modern Minimalist",
    products: {
      plate: "brooklynese-plate",
      bowl: "brooklyn-bowl",
      mug: "brooklyn-mug",
      napkin: "brooklyn-napkin",
    },
  },
  "colorful-collection": {
    name: "Colorful Collection",
    products: {
      plate: "colorware-blue-dinner",
      bowl: "colorware-nut-bowl-cherry",
      mug: "cat-person-mug",
      napkin: "sweet-tea-towel",
    },
  },
  "skyline-set": {
    name: "NYC Skyline Set",
    products: {
      plate: "212-skyline-dinner",
      bowl: "skyline-bowl",
      mug: "skyline-mug",
      napkin: "skyline-tea-towel",
    },
  },
  "greenband-set": {
    name: "Greenband Set",
    products: {
      plate: "greenband-main-plate",
      bowl: "greenband-bowl",
      mug: "greenband-teacup",
      napkin: "greenband-4-pack-napkin",
    },
  },
  "checkerboard-set": {
    name: "Checkerboard Set",
    products: {
      plate: "checkerboard-main-plate",
      bowl: "checkerboard-bowl",
      mug: "checkerboard-dinner-mug",
      napkin: "checkerboard-4-pack-napkin",
    },
  },
  "spot-on-set": {
    name: "Spot On Set",
    products: {
      plate: "spot-on-app-plate",
      bowl: "spot-on-bowl",
      mug: "spot-on-mug",
      napkin: "spot-on-guest-napkin",
    },
  },
};

// Create lookup map for easy product access by value
const allProducts = {};
products.forEach((product) => {
  allProducts[product.value] = product;
});

// Helper function to get products by category
function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}

// View mode state - "front" or "top"
let currentView = "front";

// Mode switching elements
const individualModeBtn = document.getElementById("individual-mode");
const bundleModeBtn = document.getElementById("bundle-mode");
const individualControls = document.getElementById("individual-controls");
const bundleControls = document.getElementById("bundle-controls");

// View toggle elements
const frontViewBtn = document.getElementById("front-view");
const topViewBtn = document.getElementById("top-view");

// Individual UI elements
const MAX_SLOTS = 5;
const tableItems = document.querySelector(".table-items");
const addSlotBtn = document.getElementById("add-slot-btn");
const categorySelect = document.getElementById("select-category");
const productSelect = document.getElementById("select-product");

let slots = [];
let slotCounter = 0;
let pendingSlotId = null;
let editingSlotId = null; // NEW: track which slot is being edited

// --- Bundle slots (dynamic, using same placeholder system) ---
let bundleSlotIds = []; // [plate, bowl, mug, napkin]

function setIndividualUIState(state) {
  const isPending = state === "pending" || state === "editing";

  addSlotBtn.disabled = isPending || slots.length >= MAX_SLOTS;
  categorySelect.disabled = !isPending;

  // productSelect enabled only if pending/editing AND category chosen
  productSelect.disabled = !isPending || !categorySelect.value;

  if (!isPending) {
    categorySelect.value = "";
    productSelect.innerHTML = '<option value="">Product </option>';
    productSelect.disabled = true;
  }
}

function createPlaceholder() {
  if (slots.length >= MAX_SLOTS) return null;

  slotCounter += 1;
  const id = `slot-${slotCounter}`;

  const el = document.createElement("div");
  el.className = "product-position draggable";
  el.id = id;
  el.innerHTML = `<div class="placeholder">Placeholder</div>`;

  // initial placement
  el.style.top = "73%";
  el.style.left = `${180 + slots.length * 120}px`;
  el.style.width = "110px";
  el.style.height = "110px";

  // draggable init
  el.dataset.x = "0";
  el.dataset.y = "0";
  el.style.willChange = "transform";
  el.style.touchAction = "none";
  el.addEventListener("pointerdown", startDrag);

  tableItems.appendChild(el);
  slots.push({ id, el, hasProduct: false }); // Track if slot has a product

  // Add click handler for empty placeholders too
  el.style.cursor = "pointer";
  el.addEventListener("click", handlePlaceholderClick);

  return id;
}

// NEW: Handle clicking on an empty placeholder to configure it
function handlePlaceholderClick(e) {
  // Only handle if in individual mode and not currently dragging
  if (bundleModeBtn.classList.contains("active")) return;
  if (activeItem) return; // Don't trigger during drag

  const slotEl = e.currentTarget;
  const slotId = slotEl.id;
  const slotObj = slots.find((s) => s.id === slotId);

  if (!slotObj) return;

  // If it has a product, use the product click handler
  if (slotObj.hasProduct) {
    handleProductClick(e);
    return;
  }

  // Empty placeholder - enable configuration
  editingSlotId = slotId;
  pendingSlotId = null;

  // Enable controls
  setIndividualUIState("editing");
  categorySelect.value = "";
  productSelect.innerHTML = '<option value="">Product </option>';
  productSelect.disabled = true;
}

function placeProductIntoSlot(slotId, productValue) {
  const product = allProducts[productValue];
  if (!product) return;

  const slotEl = document.getElementById(slotId);
  if (!slotEl) return;

  // Use the category from the product object
  const productCategory = product.category;

  // Select image based on current view mode
  const imageUrl = currentView === "top" ? product.topViewImage : product.image;

  slotEl.innerHTML = `<img src="${imageUrl}" alt="${product.name}" class="product-image ${productCategory}" style="transition: opacity 0.2s;">`;
  slotEl.dataset.productValue = productValue; // Store product value for later reference
  slotEl.dataset.category = productCategory; // Store category for reference

  // Mark slot as having a product
  const slotObj = slots.find((s) => s.id === slotId);
  if (slotObj) {
    slotObj.hasProduct = true;
  }

  // Add click handler for editing
  slotEl.style.cursor = "pointer";

  // Remove old click listeners
  slotEl.removeEventListener("click", handlePlaceholderClick);
  slotEl.removeEventListener("click", handleProductClick);
  slotEl.addEventListener("click", handleProductClick);

  // Add hover effect
  slotEl.addEventListener("mouseenter", function () {
    if (!bundleModeBtn.classList.contains("active")) {
      const img = this.querySelector(".product-image");
      if (img) img.style.opacity = "0.7";
    }
  });

  slotEl.addEventListener("mouseleave", function () {
    const img = this.querySelector(".product-image");
    if (img) img.style.opacity = "1";
  });
}

// NEW: Handle clicking on a placed product to edit it
function handleProductClick(e) {
  // Only handle if in individual mode and not currently dragging
  if (bundleModeBtn.classList.contains("active")) return;
  if (activeItem) return; // Don't trigger during drag

  const slotEl = e.currentTarget;
  const slotId = slotEl.id;
  const slotObj = slots.find((s) => s.id === slotId);

  // Only allow editing if slot has a product
  if (!slotObj || !slotObj.hasProduct) return;

  const currentProductValue = slotEl.dataset.productValue;

  // Set editing mode
  editingSlotId = slotId;
  pendingSlotId = null;

  // Use the category from the product object
  const currentCategory = allProducts[currentProductValue]?.category;

  // Enable controls and pre-select current category
  setIndividualUIState("editing");

  if (currentCategory) {
    categorySelect.value = currentCategory;

    // Populate product dropdown
    productSelect.innerHTML = '<option value="">Product </option>';
    getProductsByCategory(currentCategory).forEach((product) => {
      const option = document.createElement("option");
      option.value = product.value;
      option.textContent = product.name;
      if (product.value === currentProductValue) {
        option.selected = true;
      }
      productSelect.appendChild(option);
    });
    productSelect.disabled = false;
  }
}

// --------- NEW: Bundle helpers using same slot system ---------
function clearAllDynamicSlots() {
  slots.forEach((s) => s.el.remove());
  slots = [];
  slotCounter = 0;
  pendingSlotId = null;
  editingSlotId = null;
  bundleSlotIds = [];

  setIndividualUIState("idle");
}

function setSlotLabel(slotId, label) {
  const slotEl = document.getElementById(slotId);
  if (!slotEl) return;
  slotEl.innerHTML = `<div class="placeholder">${label}</div>`;
}

function createBundlePlaceholders() {
  clearAllDynamicSlots();

  const labels = ["Item 1", "Item 2", "Item 3", "Item 4"];

  labels.forEach((label) => {
    const id = createPlaceholder();
    if (!id) return;
    bundleSlotIds.push(id);
    setSlotLabel(id, label);
  });

  // Optional: nicer layout (mimics your old pos-1..pos-4 sizes)
  const layout = [
    { left: "40%", top: "73%", size: 180 }, // Plate
    { left: "42%", top: "54%", size: 110 }, // Bowl
    { left: "56%", top: "80%", size: 90 }, // Mug
    { left: "28%", top: "75%", size: 150 }, // Napkin
  ];

  bundleSlotIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    const { left, top, size } = layout[i];
    el.style.left = `${left}`;
    el.style.top = top;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
  });
}

function applyBundle(bundleKey) {
  const bundle = bundleData[bundleKey];
  if (!bundle) return;

  // Make sure bundle placeholders exist
  if (bundleSlotIds.length !== 4) createBundlePlaceholders();

  const [plateId, bowlId, mugId, napkinId] = bundleSlotIds;

  placeProductIntoSlot(plateId, bundle.products.plate);
  placeProductIntoSlot(bowlId, bundle.products.bowl);
  placeProductIntoSlot(mugId, bundle.products.mug);
  placeProductIntoSlot(napkinId, bundle.products.napkin);
}

// Individual: Add Placeholder flow - now directly adds placeholder
addSlotBtn.addEventListener("click", () => {
  const newSlotId = createPlaceholder();
  if (!newSlotId) return;

  // Don't enter pending state - just add the placeholder
  // User can click it later to configure
  if (slots.length >= MAX_SLOTS) {
    addSlotBtn.disabled = true;
  }
});

// Category selection (only used in pending/editing state)
categorySelect.addEventListener("change", function () {
  const category = this.value;
  productSelect.innerHTML = '<option value="">Product </option>';

  if (category) {
    getProductsByCategory(category).forEach((product) => {
      const option = document.createElement("option");
      option.value = product.value;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
    productSelect.disabled = false;
  } else {
    productSelect.disabled = true;
  }
});

// Product selection -> place into pending/editing placeholder -> unlock add button
productSelect.addEventListener("change", function () {
  const productValue = this.value;
  if (!productValue) return;

  // Handle both new placement and editing
  const targetSlotId = editingSlotId || pendingSlotId;
  if (!targetSlotId) return;

  placeProductIntoSlot(targetSlotId, productValue);

  pendingSlotId = null;
  editingSlotId = null;
  setIndividualUIState("idle");

  if (slots.length >= MAX_SLOTS) {
    addSlotBtn.disabled = true;
  }
});

// Bundle dropdown -> apply bundle into 4 dynamic placeholders
document
  .getElementById("select-bundle")
  .addEventListener("change", function () {
    const bundleKey = this.value;
    if (!bundleKey) return;
    applyBundle(bundleKey);
  });

// Mode switching behavior
individualModeBtn.addEventListener("click", () => {
  individualModeBtn.classList.add("active");
  bundleModeBtn.classList.remove("active");
  individualControls.style.display = "flex";
  bundleControls.style.display = "none";

  // Clear dynamic placeholders (includes bundle ones)
  clearAllDynamicSlots();
  setIndividualUIState("idle");
});

bundleModeBtn.addEventListener("click", () => {
  bundleModeBtn.classList.add("active");
  individualModeBtn.classList.remove("active");
  bundleControls.style.display = "flex";
  individualControls.style.display = "none";

  // Create 4 bundle placeholders
  clearAllDynamicSlots();
  createBundlePlaceholders();

  // Reset the bundle dropdown to show placeholder
  document.getElementById("select-bundle").value = "";
});

// View toggle listeners
frontViewBtn.addEventListener("click", () => {
  frontViewBtn.classList.add("active");
  topViewBtn.classList.remove("active");
  currentView = "front";
  // Update all placed products to show front view image
  updateAllProductImages();
  updateTableView();
});

topViewBtn.addEventListener("click", () => {
  topViewBtn.classList.add("active");
  frontViewBtn.classList.remove("active");
  currentView = "top";
  // Update all placed products to show top view image
  updateAllProductImages();
  updateTableView();
});

// Function to update all product images based on current view
function updateAllProductImages() {
  slots.forEach((slot) => {
    if (slot.hasProduct) {
      const productValue = slot.el.dataset.productValue;
      const product = allProducts[productValue];
      if (!product) return;

      const imageUrl = currentView === "top" ? product.topViewImage : product.image;
      const img = slot.el.querySelector(".product-image");
      if (img) {
        img.src = imageUrl;
      }
    }
  });
}

// Update which table image is visible based on current view
function updateTableView() {
  const tableFront = document.getElementById("table-front-img");
  const tableTop = document.getElementById("table-top-img");
  if (!tableFront || !tableTop) return;

  if (currentView === "top") {
    tableFront.classList.add("hidden");
    tableTop.classList.remove("hidden");
  } else {
    tableFront.classList.remove("hidden");
    tableTop.classList.add("hidden");
  }
}

// Recommendations
function initRecommendations() {
  const slider = document.getElementById("recommendations-slider");
  const recommendedProducts = [
    {
      name: "Butter Dish",
      price: "$18",
      image:
        "https://www.fishseddy.com/cdn/shop/files/FEST-DWH-BO56_2_9ded49f2-967e-4559-aef6-4fe67d6becd1.png?v=1749591189&width=200",
    
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-DWH-BO56_2_9ded49f2-967e-4559-aef6-4fe67d6becd1.png?v=1749591189&width=200",
  },
    {
      name: "Storage Bowl",
      price: "$15",
      image:
        "https://www.fishseddy.com/cdn/shop/files/FEST-SLB-BO09_01.png?v=1746480280&width=200",
    
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-SLB-BO09_01.png?v=1746480280&width=200",
  },
    {
      name: "Coffee Cup",
      price: "$14",
      image:
        "https://www.fishseddy.com/cdn/shop/files/FEST-HLG-MU03_01.png?v=1747259346&width=200",
    
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-HLG-MU03_01.png?v=1747259346&width=200",
  },
    {
      name: "Serving Platter",
      price: "$22",
      image:
        "https://www.fishseddy.com/cdn/shop/files/FEST-GOF-PT10_2.png?v=1753997374&width=1008",
    
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-GOF-PT10_2.png?v=1753997374&width=1008",
  },
    {
      name: "Salt & Pepper",
      price: "$16",
      image:
        "https://www.fishseddy.com/cdn/shop/files/FEST-DWH-PT11_1_9e86e09e-81ff-4d80-84dd-9c87a3fe0fac.png?v=1749591116&width=200",
    
    topViewImage:
      "https://www.fishseddy.com/cdn/shop/files/FEST-DWH-PT11_1_9e86e09e-81ff-4d80-84dd-9c87a3fe0fac.png?v=1749591116&width=200",
  },
    {
      name: "Tea Towel Set",
      price: "$12",
      image:
        "https://www.fishseddy.com/cdn/shop/files/Checkeredtowel_2.png?v=1754928926&width=200",
    },
  ];

  slider.innerHTML = "";
  recommendedProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="name">${product.name}</div>
      <div class="price">${product.price}</div>
    `;
    slider.appendChild(card);
  });
}

function slideLeft() {
  console.log("Slide left clicked");
  const slider = document.getElementById("recommendations-slider");
  slider.scrollBy({ left: -220, behavior: "smooth" });
}

function slideRight() {
  console.log("Slide right clicked");
  const slider = document.getElementById("recommendations-slider");
  slider.scrollBy({ left: 220, behavior: "smooth" });
}

initRecommendations();
// Ensure table view matches initial `currentView`
updateTableView();

let activeItem = null;
let startX = 0;
let startY = 0;
let baseX = 0;
let baseY = 0;
let targetX = 0;
let targetY = 0;
let needsUpdate = false;
let rafId = null;

// init draggable items
document.querySelectorAll(".draggable").forEach((item) => {
  item.dataset.x = "0";
  item.dataset.y = "0";
  item.style.willChange = "transform";
  item.style.touchAction = "none";
  item.style.cursor = "grab";
  anime.set(item, { translateX: 0, translateY: 0 });
  item.addEventListener("pointerdown", startDrag);
});

document.addEventListener("pointermove", onMove);
document.addEventListener("pointerup", stopDrag);
document.addEventListener("pointercancel", stopDrag);

function startDrag(e) {
  activeItem = e.currentTarget;
  activeItem.setPointerCapture(e.pointerId);
  activeItem.style.cursor = "grabbing";

  startX = e.clientX;
  startY = e.clientY;

  baseX = parseFloat(activeItem.dataset.x) || 0;
  baseY = parseFloat(activeItem.dataset.y) || 0;

  targetX = baseX;
  targetY = baseY;

  needsUpdate = true;
  rafId = requestAnimationFrame(update);
}

function onMove(e) {
  if (!activeItem) return;

  targetX = baseX + (e.clientX - startX);
  targetY = baseY + (e.clientY - startY);
  needsUpdate = true;
}

function update() {
  if (!activeItem) return;

  if (needsUpdate) {
    activeItem.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    needsUpdate = false;
  }

  rafId = requestAnimationFrame(update);
}

function stopDrag(e) {
  if (!activeItem) return;

  activeItem.releasePointerCapture(e.pointerId);

  cancelAnimationFrame(rafId);

  activeItem.dataset.x = targetX;
  activeItem.dataset.y = targetY;
  activeItem.style.cursor = "grab";

  activeItem = null;
  rafId = null;
}

// Expose functions used by inline `onclick` attributes in `index.html`
window.slideLeft = slideLeft;
window.slideRight = slideRight;
