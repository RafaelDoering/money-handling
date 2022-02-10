/**
 * Class for manipulating amounts of money.
 * @class
 * @classdesc Manipulates money.
 */
class Amount {
  private amountInCents: number;

  constructor(amount: string) {
    this.amountInCents = this.transformCurrencyToNumberInCents(amount);
  }

  private transformCurrencyToNumberInCents(amount: string) {
    const regex = /^\d+(?:\.\d{2})$/;
    if (!regex.test(amount)) {
      throw new Error('Invalid currency format');
    }

    return parseInt(amount.replace('$', '').replace('.', ''));
  }

  public getCents(): number {
    return this.amountInCents;
  }
}

export default Amount;
