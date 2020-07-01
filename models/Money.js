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
   *
   * @return {string}
   *
   * @example add('10.00', '5.00')
   */
  static add(amount, amountToAdd) {
    return this.toMoneyString(this.toMoneyInt(amount) + this.toMoneyInt(amountToAdd));
  }

  /**
   * Subtract string money to amount.
   *
   * @param {string} amount
   * @param {string} amountToSubtract
   *
   * @return {string}
   *
   * @example subtract('10.00', '5.00')
   */
  static subtract(amount, amountToSubtract) {
    return this.toMoneyString(this.toMoneyInt(amount) - this.toMoneyInt(amountToSubtract));
  }

  /**
   * Percentage of money value to amount.
   *
   * @param {string} amount
   * @param {string} percentage
   *
   * @return {string}
   *
   * @example percentage('10.00', '5.00%')
   */
  static percentage(amount, percentage) {
    return this.toMoneyString((this.toMoneyInt(amount) * Number.parseFloat(percentage.replace('%', ''))) / 100);
  }

  /**
   * Convert money int to fixed decimal string.
   *
   * @param {number} amount
   *
   * @return {string} Formated amount
   */
  static toMoneyString(amount) {
    return _toFixedWithoutRounding(Number.parseFloat(amount / 100), 2);
  }

  /**
   * Convert string to int money.
   *
   * @param {string} amount
   *
   * @return {number} Float amount
   */
  static toMoneyInt(amount) {
    return Number.parseInt(Number.parseFloat(amount) * 100);
  }
};

/**
 * Fix a number to certain decimal places.
 *
 * @param {number} number
 * @param {number} numberOfDecimalPlaces
 *
 * @return {string} Float amount
 */
function _toFixedWithoutRounding(number, numberOfDecimalPlaces) {
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
