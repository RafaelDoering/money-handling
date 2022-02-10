import truncateNumberDecimalPlaces from '../utils/truncate-number-decimal-places';
import truncateStringDecimalPlaces from '../utils/truncate-string-decimal-places';

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
  static add(amount: string, amountToAdd: string, options = {round: true}) {
    amount = truncateStringDecimalPlaces(amount, 2);
    amountToAdd = truncateStringDecimalPlaces(amountToAdd, 2);

    return centsToMoney(
      moneyToCents(amount) + moneyToCents(amountToAdd),
      options.round
    );
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
  static subtract(
    amount: string,
    amountToSubtract: string,
    options = {round: true}
  ) {
    amount = truncateStringDecimalPlaces(amount, 2);
    amountToSubtract = truncateStringDecimalPlaces(amountToSubtract, 2);

    return centsToMoney(
      moneyToCents(amount) - moneyToCents(amountToSubtract),
      options.round
    );
  }

  /**
   * Compare two amounts.
   *
   * @param {string} amount1
   * @param {string} amount2
   *
   * @return {boolean}
   *
   * @example isGreaterThan('10.00', '5.00');
   */
  static isGreaterThan(amount1: string, amount2: string) {
    amount1 = truncateStringDecimalPlaces(amount1, 2);
    amount2 = truncateStringDecimalPlaces(amount2, 2);

    return (
      parseInt(amount1.replace('.', '')) > parseInt(amount2.replace('.', ''))
    );
  }

  /**
   * Compare two amounts.
   *
   * @param {string} amount1
   * @param {string} amount2
   *
   * @return {boolean}
   *
   * @example isGreaterThanOrEqual('10.00', '5.00');
   */
  static isGreaterThanOrEqual(amount1: string, amount2: string) {
    amount1 = truncateStringDecimalPlaces(amount1, 2);
    amount2 = truncateStringDecimalPlaces(amount2, 2);

    return (
      parseInt(amount1.replace('.', '')) >= parseInt(amount2.replace('.', ''))
    );
  }

  /**
   * Compare two amounts.
   *
   * @param {string} amount1
   * @param {string} amount2
   *
   * @return {boolean}
   *
   * @example isLessThan('10.00', '5.00');
   */
  static isLessThan(amount1: string, amount2: string) {
    amount1 = truncateStringDecimalPlaces(amount1, 2);
    amount2 = truncateStringDecimalPlaces(amount2, 2);

    return (
      parseInt(amount1.replace('.', '')) < parseInt(amount2.replace('.', ''))
    );
  }

  /**
   * Compare two amounts.
   *
   * @param {string} amount1
   * @param {string} amount2
   *
   * @return {boolean}
   *
   * @example isLessThanOrEqual('10.00', '5.00');
   */
  static isLessThanOrEqual(amount1: string, amount2: string) {
    amount1 = truncateStringDecimalPlaces(amount1, 2);
    amount2 = truncateStringDecimalPlaces(amount2, 2);

    return (
      parseInt(amount1.replace('.', '')) <= parseInt(amount2.replace('.', ''))
    );
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
  static percentage(
    amount: string,
    percentage: string,
    options = {round: true}
  ) {
    amount = truncateStringDecimalPlaces(amount, 2);

    return centsToMoney(
      (moneyToCents(amount) * Number.parseFloat(percentage.replace('%', ''))) /
        100,
      options.round
    );
  }
}

/**
 * Convert cents amount to money string.
 *
 * @param {number} amount
 * @param {boolean} round
 *
 * @return {string} Formated amount
 */
function centsToMoney(amount: number, round = true) {
  return round
    ? (amount / 100).toFixed(2)
    : truncateNumberDecimalPlaces(amount / 100, 2);
}

/**
 * Convert money string to int cents.
 *
 * @param {string} amount
 *S
 * @return {number} Cents amount
 */
function moneyToCents(amount: string) {
  return Number.parseInt((Number.parseFloat(amount) * 100).toFixed(0), 10);
}

export default Money;
