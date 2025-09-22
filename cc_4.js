// Coding Challenge 04 — Retail Discount Engine
// Steps: arrays/objects, switch, if/else if, loops, for...in, Object.entries, destructuring
// View results in the browser console.

// -----------------------------
// Step 2: Product Array (5 items)
// -----------------------------
const products = [
  { name: "Bluetooth Headphones", category: "electronics", price: 59.99, inventory: 12 },
  { name: "Graphic Tee",          category: "apparel",     price: 19.99, inventory: 30 },
  { name: "Whole Grain Bread",    category: "groceries",   price: 3.49,  inventory: 50 },
  { name: "All-Purpose Cleaner",  category: "household",   price: 4.99,  inventory: 40 },
  { name: "Stainless Bottle",     category: "other",       price: 14.99, inventory: 18 }, // default case
];

console.log("=== Step 2: Initial Products ===");
console.log(products);

// -----------------------------
// Step 3: Category Discounts with switch (update price in place)
// electronics: 20% | apparel: 15% | groceries/household: 10% | default: 0%
// -----------------------------
for (const item of products) { // for...of
  switch (item.category) {
    case "electronics":
      item.price *= 0.80; // 20% off
      break;
    case "apparel":
      item.price *= 0.85; // 15% off
      break;
    case "groceries":
    case "household":
      item.price *= 0.90; // 10% off
      break;
    default:
      // no discount
      break;
  }
  // Tidy to 2 decimals for display
  item.price = +item.price.toFixed(2);
}

console.log("=== Step 3: After Category Discounts (prices updated in place) ===");
for (const item of products) {
  console.log(`${item.name} [${item.category}] — $${item.price.toFixed(2)} | stock ${item.inventory}`);
}

// -----------------------------
// Step 4: Customer Type Discount with if / else if
// (applied to subtotal at checkout ONLY; not to individual product prices)
// -----------------------------
let customerType = "regular"; // "regular" | "student" | "senior"
let extraDiscount = 0;

function setExtraDiscount(type) {
  customerType = type;
  extraDiscount = 0;                 // start at 0
  if (customerType === "student") {  // 5%
    extraDiscount = 0.05;
  } else if (customerType === "senior") { // 7%
    extraDiscount = 0.07;
  } else {
    extraDiscount = 0;               // everyone else
  }
}

// -----------------------------
// Step 5: Checkout Loop & Inventory Update
// Loop 3 customers. Inside each iteration:
// - subtotal = 0 (reset inside loop)
// - for...of over products: add price to subtotal and decrement inventory by 1 if available
// - apply extraDiscount to subtotal
// - log customer number and total
// -----------------------------
const demoTypes = ["regular", "student", "senior"]; // rotate to show each case

console.log("\n=== Step 5: Checkout Simulation (3 customers) ===");
for (let i = 1; i <= 3; i++) { // standard for loop over customers
  setExtraDiscount(demoTypes[(i - 1) % demoTypes.length]);

  let subtotal = 0; // reset inside loop
  for (const item of products) { // for...of over products
    if (item.inventory > 0) {
      subtotal += item.price;
      item.inventory--; // inventory persists across customers
    }
  }

  const finalTotal = +(subtotal * (1 - extraDiscount)).toFixed(2);
  console.log(`Customer ${i} (${customerType}) — Subtotal $${subtotal.toFixed(2)} | Extra ${(extraDiscount*100).toFixed(0)}% | TOTAL $${finalTotal.toFixed(2)}`);
}

console.log("\nInventory after checkout:");
for (const p of products) {
  console.log(`${p.name}: ${p.inventory} left`);
}

// -----------------------------
// Step 6: for...in — log keys/values for one product (post-discounts)
// -----------------------------
console.log("\n=== Step 6: for...in on a single product ===");
const sample = products[0];
for (const key in sample) { // for...in over object keys
  console.log(`${key}: ${sample[key]}`);
}

// -----------------------------
// Step 7: Object.entries() + destructuring — log all product info
// (practice iteration tools; no logic changes here)
// -----------------------------
console.log("\n=== Step 7: Object.entries() + destructuring on all products ===");
for (const p of products) {
  const { name, category, price, inventory } = p; // destructuring
  console.log(`${name} [${category}] — $${price.toFixed(2)} | stock ${inventory}`);
  Object.entries(p).forEach(([k, v]) => console.log(`  ${k} => ${v}`));
}

console.log("\nDone. Open DevTools ➜ Console to review all outputs.");