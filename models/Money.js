const truncateNumberDecimalPlaces = require('./../utils/truncateNumberDecimalPlaces');
const truncateStringDecimalPlaces = require('./../utils/truncateStringDecimalPlaces');

/**
 * Class for manipulating money values.
 * @class
 * @classdesc Manipulates money.
 */
class Money {
  /**
   * Add string money to amount.
   *
   * @param {string} amount
   * @param {string} amountToAdd
   * @param {object} options
   *
   * @return {string}
   *
   * @example add('10.00', '5.00');
   */
  static add(amount, amountToAdd, options = {round: true}) {
    amount = truncateStringDecimalPlaces(amount, 2);
    amountToAdd = truncateStringDecimalPlaces(amountToAdd, 2);

    return centsToMoney(moneyToCents(amount) + moneyToCents(amountToAdd), options.round);
  }

  /**
   * Subtract string money to amount.
   *
   * @param {string} amount
   * @param {string} amountToSubtract
   * @param {object} options
   *
   * @return {string}
   *
   * @example subtract('10.00', '5.00');
   */
  static subtract(amount, amountToSubtract, options = {round: true}) {
    amount = truncateStringDecimalPlaces(amount, 2);
    amountToSubtract = truncateStringDecimalPlaces(amountToSubtract, 2);

    return centsToMoney(moneyToCents(amount) - moneyToCents(amountToSubtract), options.round);
  }

  /**
   * Percentage of money value to amount.
   *
   * @param {string} amount
   * @param {string} percentage
   * @param {object} options
   *
   * @return {string}
   *
   * @example percentage('10.00', '5.00%');
   * @example percentage('10.00', '5.00%', { round: false });
   */
  static percentage(amount, percentage, options = {round: true}) {
    amount = truncateStringDecimalPlaces(amount, 2);

    return centsToMoney((moneyToCents(amount) * Number.parseFloat(percentage.replace('%', ''))) / 100, options.round);
  }
};

/**
 * Convert cents amount to money string.
 *
 * @param {number} amount
 * @param {boolean} round
 *
 * @return {string} Formated amount
 */
function centsToMoney(amount, round = true) {
  return round ? (amount / 100).toFixed(2) : truncateNumberDecimalPlaces(amount / 100, 2);
}

/**
 * Convert money string to int cents.
 *
 * @param {string} amount
 *S
 * @return {number} Cents amount
 */
function moneyToCents(amount) {
  return Number.parseInt((Number.parseFloat(amount) * 100).toFixed(0), 10);
}

module.exports = Money;
