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
   * Convert money int to fixed decimal string.
   *
   * @param {number} amount
   *
   * @return {string} Formated amount
   */
  static toMoneyString(amount) {
    return Number.parseFloat(amount / 100).toFixed(2);
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

module.exports = Money;
