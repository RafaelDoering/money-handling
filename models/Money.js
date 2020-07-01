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
   * @param {boolean} round
   *
   * @return {string}
   *
   * @example add('10.00', '5.00')
   */
  static add(amount, amountToAdd, round = true) {
    return toMoneyString(toMoneyInt(amount) + toMoneyInt(amountToAdd), round);
  }

  /**
   * Subtract string money to amount.
   *
   * @param {string} amount
   * @param {string} amountToSubtract
   * @param {boolean} round
   *
   * @return {string}
   *
   * @example subtract('10.00', '5.00')
   */
  static subtract(amount, amountToSubtract, round = true) {
    return toMoneyString(toMoneyInt(amount) - toMoneyInt(amountToSubtract), round);
  }

  /**
   * Percentage of money value to amount.
   *
   * @param {string} amount
   * @param {string} percentage
   * @param {boolean} round
   *
   * @return {string}
   *
   * @example percentage('10.00', '5.00%')
   */
  static percentage(amount, percentage, round = true) {
    return toMoneyString((toMoneyInt(amount) * Number.parseFloat(percentage.replace('%', ''))) / 100, round);
  }
};

/**
 * Convert money int to fixed decimal string.
 *
 * @param {number} amount
 * @param {boolean} round
 *
 * @return {string} Formated amount
 */
function toMoneyString(amount, round = true) {
  return round ? (amount / 100).toFixed(2) : toFixedWithoutRounding(amount / 100, 2);
}

/**
 * Convert string to int money.
 *
 * @param {string} amount
 *S
 * @return {number} Float amount
 */
function toMoneyInt(amount) {
  return Number.parseInt((Number.parseFloat(amount) * 100).toString(), 10);
}

/**
 * Fix a number to certain decimal places.
 *
 * @param {number} number
 * @param {number} numberOfDecimalPlaces
 *
 * @return {string} Float amount
 */
function toFixedWithoutRounding(number, numberOfDecimalPlaces) {
  const reg = new RegExp('^-?\\d+(?:\\.\\d{0,' + numberOfDecimalPlaces + '})?', 'g');

  const numberWithoutSurplusDecimalPlaces = number.toString().match(reg)[0];
  const dotIndex = numberWithoutSurplusDecimalPlaces.indexOf('.');

  if (dotIndex === -1) {
    return numberWithoutSurplusDecimalPlaces + '.' + '0'.repeat(numberOfDecimalPlaces);
  }
  const decimalPlacesToAdd = numberOfDecimalPlaces - (numberWithoutSurplusDecimalPlaces.length - dotIndex) + 1;

  return decimalPlacesToAdd > 0 ?
    (numberWithoutSurplusDecimalPlaces + '0'.repeat(decimalPlacesToAdd)) :
    numberWithoutSurplusDecimalPlaces;
}

module.exports = Money;
