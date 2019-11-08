const {
  currencyToNumber,
  getRandomId,
  numberToCurrency
} = require("../lib/utils");

function calcTotal(movies) {
  // return movies.reduce((acc, cur) => acc + cur, 0);
  // return movies.reduce((acc, cur) => acc + cur.price, 0);
  return movies.reduce((acc, cur) => acc + currencyToNumber(cur.price), 0);
}

function addItem(cart, item) {
  const cartItem = Object.assign(item, { _id: getRandomId() });
  const movies = cart.movies.concat(cartItem);
  const total = numberToCurrency(calcTotal(movies));
  return { total, movies };
}

function removeItem(cart, item) {}

module.exports = { addItem, removeItem };
