const movies = require("./constants/movies");
const { addItem } = require("./lib/shoppingCart");
const { getRandomNumberBetween } = require("./lib/utils");

let shoppingCart = { total: 0, movies: [] };

for (let i = 0; i < 5; i++) {
  shoppingCart = addItem(shoppingCart, movies[getRandomNumberBetween(0, 24)]);
}

console.log(shoppingCart);
