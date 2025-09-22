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
