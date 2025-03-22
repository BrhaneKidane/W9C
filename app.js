let item_names= ["Banana", "orange", "onion"]
let item_prices = [20, 40, 60]
let in_stock = [true, false, false]

let first_item_name = item_names[0]
let first_item_price = item_prices[0]

item_names.push("cabbage")
item_prices.push(80)
in_stock.push(true)
console.log(item_names)
let last_item_name = item_names.pop()
let last_item_price = item_prices.pop()
let last_item_stock = in_stock.pop()
console.log(last_item_name, last_item_price, last_item_stock )
