/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  const base = ["small", "medium", "large"];
  const addOn = ["regular", "latte", "cappuccino", "mocha"];
  if(typeof size!=="string") return -1;

  if(!base.includes(size)) return -1;
  if(!addOn.includes(type)) return -1;

  let basePrice = 0;
  let typePrice = 0;
  let netTotal = 0;
  
  if(size==="small") {
    basePrice = 3;
  } else if(size==="medium") {
    basePrice = 4;
  }  else {
    basePrice = 5;
  }

  //console.log("basePrice",basePrice);

  if(type==="regular") {
    typePrice = 0;
  } else if(type==="latte") {
    typePrice = 1;
  } else if(type==="cappuccino") {
    typePrice = 1.50;
  } else {
    typePrice = 2;
  }

  //console.log("typePrice",typePrice);
  netTotal = basePrice + typePrice;

  //console.log("netTotal", netTotal);

  let extraCream = extras.whippedCream ? 0.50 : 0;
  let extraShot = extras.extraShot ? 0.75 : 0;

  let TotalAmount = netTotal + extraCream + extraShot;
  return  Number(TotalAmount.toFixed(2));
  

}
