/**
 * Class for manipulating amounts of money.
 * @class
 * @classdesc Manipulates money.
 */
class MoneyV2 {
  private amountInCents: number;

  constructor(amount: string) {
    this.amountInCents = this.transformCurrencyToNumberInCents(amount);
  }

  /**
   * Add amount.
   *
   * @param {string} amountToAdd
   *
   * @return {string}
   *
   * @example money.add('10.00');
   */
  public add(amountToAdd: string) {
    this.amountInCents += this.transformCurrencyToNumberInCents(amountToAdd);

    return this;
  }

  /**
   * Subtract amount.
   *
   * @param {string} amountToAdd
   *
   * @return {string}
   *
   * @example money.subtract('10.00');
   */
  public subtract(amountToSubtract: string) {
    this.amountInCents -=
      this.transformCurrencyToNumberInCents(amountToSubtract);

    return this;
  }

  /**
   * Percentage of money.
   *
   * @param {string} percentage
   *
   * @return {object}
   *
   * @example money.percentage('5.00%');
   */
  public percentage(percentage: string): MoneyV2 {
    this.amountInCents *= this.transformCurrencyToNumberInCents(
      percentage.replace('%', '')
    );
    this.amountInCents /= 100;

    return this;
  }

  private transformCurrencyToNumberInCents(amount: string) {
    const regex = /^\d+(?:\.\d{2})$/;
    if (!regex.test(amount)) {
      throw new Error('Invalid currency format');
    }

    return parseInt(amount.replace('$', '').replace('.', ''));
  }

  public getAmount(): string {
    const amountInCents = this.amountInCents.toString();
    const integerAmount =
      amountInCents.length > 2 ? amountInCents.slice(0, -2) : '0';
    const decimalAmount =
      amountInCents.length > 1 ? amountInCents.slice(-2) : `0${amountInCents}`;

    return `${integerAmount}.${decimalAmount}`;
  }

  public getAmountInCents(): number {
    return this.amountInCents;
  }
}

export default MoneyV2;
