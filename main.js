// import * as anime from 'animejs';

// Import product data from external JSON file
let products = [];
let recommendedProducts = [];

// Fetch and load the data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    products = data.products;
    recommendedProducts = data.recommendedProducts;

    // Store in window object for global access
    window.recommendedProducts = recommendedProducts;

    // Reinitialize any code that depends on products being loaded
    initializeProductData();
  })
  .catch(error => console.error('Error loading product data:', error));

// Initialize products lookup and other dependent functionality
function initializeProductData() {
  // Rebuild the allProducts lookup since products were initially empty
  Object.keys(allProducts).forEach(key => delete allProducts[key]);
  products.forEach((product) => {
    allProducts[product.value] = product;
  });

  // Initialize recommendations now that data is loaded
  initRecommendations();
}

// Create lookup map for easy product access by value
const allProducts = {};
products.forEach((product) => {
  allProducts[product.value] = product;
});

// Helper function to get products by category
function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}

// Helper function to get bundle product details
function getBundleContents(bundleKey) {
  const bundle = products.find((p) => p.type === "bundle" && p.value === bundleKey);
  if (!bundle || !bundle.bundleContents) return null;

  return {
    ...bundle,
    items: bundle.bundleContents
      .map((item) => allProducts[item.productValue])
      .filter(Boolean),
  };
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
  el.style.top = "70%";
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
  const bundleDetails = getBundleContents(bundleKey);
  console.log(bundleDetails);
  if (!bundleDetails || !bundleDetails.items) return;

  // Make sure bundle placeholders exist
  if (bundleSlotIds.length !== 4) createBundlePlaceholders();
  console.log(bundleSlotIds);
  console.log(bundleDetails.items);
  const [plateId, bowlId, mugId, napkinId] = bundleSlotIds;
  const [plate, bowl, mug, napkin] = bundleDetails.items;

  placeProductIntoSlot(plateId, plate?.value);
  placeProductIntoSlot(bowlId, bowl?.value);
  placeProductIntoSlot(mugId, mug?.value);
  placeProductIntoSlot(napkinId, napkin?.value);
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
    console.log(bundleKey);
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
  // Shift all items up by 50px
  slots.forEach((slot) => {
    const el = slot.el;
    const currentX = parseFloat(el.dataset.x) || 0;
    const currentY = parseFloat(el.dataset.y) || 0;
    const newY = currentY - 200;
    el.dataset.y = newY;
    el.style.transform = `translate3d(${currentX}px, ${newY}px, 0)`;
  });

});

topViewBtn.addEventListener("click", () => {
  topViewBtn.classList.add("active");
  frontViewBtn.classList.remove("active");
  currentView = "top";
  // Update all placed products to show top view image
  updateAllProductImages();
  updateTableView();

  // Shift all items down by 50px
  slots.forEach((slot) => {
    const el = slot.el;
    const currentX = parseFloat(el.dataset.x) || 0;
    const currentY = parseFloat(el.dataset.y) || 0;
    const newY = currentY + 200;
    el.dataset.y = newY;
    el.style.transform = `translate3d(${currentX}px, ${newY}px, 0)`;
  });
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

const images = {
  top: "https://i.postimg.cc/QtTThGFf/top-view-table.png",
  front: "https://i.postimg.cc/q7xngbBX/table-(1).webp"
};

// Update which table image is visible based on current view
function updateTableView() {
  const tableImage = document.getElementById("tableImage");
  if( currentView === 'top' ){
    tableImage.src = images.top;
  } else {
    tableImage.src = images.front;
  }
}

// Recommendations
function initRecommendations() {
  const slider = document.getElementById("recommendations-slider");

  // Load recommended products from the JSON data
  const recommendedProducts = window.recommendedProducts || [];

  if (recommendedProducts.length === 0) {
    console.warn('Recommended products not loaded yet');
    return;
  }

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
  // anime.set(item, { translateX: 0, translateY: 0 });
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
  console.log("Update called");
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
