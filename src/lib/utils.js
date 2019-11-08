function currencyToNumber(currency) {
  return Number(currency.replace(/[^0-9.-]+/g, ""));
}

function getRandomId() {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

function getRandomNumberBetween(start, end) {
  return Math.floor(Math.random() * end) + start;
}

function numberToCurrency(number) {
  return `$${number.toFixed(2)}`;
}

module.exports = {
  currencyToNumber,
  getRandomId,
  getRandomNumberBetween,
  numberToCurrency
};
